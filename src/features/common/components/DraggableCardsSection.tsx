import React, { useState, useRef, useEffect } from "react";
import { GraduationCap, Globe, Book, Trees } from "lucide-react";
import { motion, type Variants } from "framer-motion";

// --- Types ---
interface DraggableCardsSectionProps {
  fadeContent?: boolean;
}

interface Position {
  x: number;
  y: number;
}

interface Dimensions {
  width: number;
  height: number;
}

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const DraggableCardsSection = ({ fadeContent = false }: DraggableCardsSectionProps) => {
  const initialPositions: Position[] = [
    { x: 20, y: 22 }, // Card 1: Schools
    { x: 40, y: 48 }, // Card 2: Countries
    { x: 57, y: 30 }, // Card 3: Submissions
    { x: 77, y: 65 }, // Card 4: Trees Saved
  ];

  const [cardPositions, setCardPositions] = useState<Position[]>(initialPositions);
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const magnetRef = useRef<number | null>(null); // Track which card index is magnetically attached

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalized % coordinates for mouse
    const mouseXPct = (mouseX / rect.width) * 100;
    const mouseYPct = (mouseY / rect.height) * 100;

    // Magnet Physics Constants - Tuned
    const GRAB_RADIUS = 95; // px
    const RELEASE_RADIUS = 250; // px

    let activeMagnet = magnetRef.current;

    // 1. Maintain or Break existing link
    if (activeMagnet !== null) {
      const anchor = initialPositions[activeMagnet];
      const anchorX = (anchor.x / 100) * rect.width;
      const anchorY = (anchor.y / 100) * rect.height;

      const dx = mouseX - anchorX;
      const dy = mouseY - anchorY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > RELEASE_RADIUS) {
        activeMagnet = null;
        magnetRef.current = null;
      }
    }

    // 2. Establish new link if none exists
    if (activeMagnet === null) {
      // Check all cards to see if any are in grab range
      // Find closest one to avoid conflicts
      let closestDist = GRAB_RADIUS;
      let candidate: number | null = null;

      initialPositions.forEach((anchor, index) => {
        const anchorX = (anchor.x / 100) * rect.width;
        const anchorY = (anchor.y / 100) * rect.height;
        const dx = mouseX - anchorX;
        const dy = mouseY - anchorY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < closestDist) {
          closestDist = dist;
          candidate = index;
        }
      });

      if (candidate !== null) {
        activeMagnet = candidate;
        magnetRef.current = candidate;
      }
    }

    setCardPositions((prev) => {
      return prev.map((pos, index) => {
        // Priority 1: Magnetic Pull (Ghost Hand)
        if (index === activeMagnet) {
          // 1:1 movement with mouse
          return {
            x: Math.max(5, Math.min(95, mouseXPct)),
            y: Math.max(5, Math.min(95, mouseYPct)),
          };
        }

        // Priority 2: Idle / Snap Back
        return initialPositions[index];
      });
    });
  };

  const handleMouseLeave = () => {
    setCardPositions(initialPositions);
    magnetRef.current = null; // Reset magnet when leaving container
  };

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stats: StatItem[] = [
    {
      icon: <GraduationCap size={32} strokeWidth={1.5} />,
      value: "800+",
      label: "Schools",
    },
    {
      icon: <Globe size={32} strokeWidth={1.5} />,
      value: "85+",
      label: "Countries",
    },
    {
      icon: <Book size={32} strokeWidth={1.5} />,
      value: "5M+",
      label: "Submissions",
    },
    {
      icon: <Trees size={32} strokeWidth={1.5} />,
      value: "10K+",
      label: "Trees Saved",
    },
  ];

  const getSmoothPath = (): string => {
    if (dimensions.width === 0) return "";

    // Offsets to make the line pass through cards at different heights
    const pathOffsets = [0, -5, 8, 12];

    const points = cardPositions.map((p, i) => ({
      x: (p.x / 100) * dimensions.width,
      y: ((p.y + (pathOffsets[i] || 0)) / 100) * dimensions.height,
    }));

    // Start at left edge
    const start = { x: 0, y: dimensions.height * 0.1 };

    // End at right edge
    const end = { x: dimensions.width, y: dimensions.height * 0.72 };

    const allPoints = [start, ...points, end];

    let d = `M ${start.x} ${start.y}`;

    for (let i = 0; i < allPoints.length - 1; i++) {
      const curr = allPoints[i];
      const next = allPoints[i + 1];

      const isThirdSegment = i === 3;
      const isLastSegment = i === allPoints.length - 2;

      // Default Control Points (Horizontal S-Curve)
      let cp1x = curr.x + (next.x - curr.x) * 0.5;
      let cp1y = curr.y;
      let cp2x = curr.x + (next.x - curr.x) * 0.78;
      let cp2y = next.y;

      if (isThirdSegment) {
        // "Orange Image" Style (Card 3 -> Card 4): Straighter, diagonal drop
        cp1y = curr.y + (next.y - curr.y) * 0.1; 
        cp2y = curr.y + (next.y - curr.y) * 0.9; 
      } else if (isLastSegment) {
        // "Blue Image" Style (Card 4 -> Edge): Deep Dip
        cp1y += dimensions.height * 0.15;
      }

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
    }

    return d;
  };

  // Animation variants
  const contentVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[600px] w-full select-none overflow-hidden bg-gradient-to-b from-[#514CF1] to-[#b7baf8]"
    >
      {/* Content wrapper with fade animation */}
      <motion.div
        className="absolute inset-0"
        variants={contentVariants}
        initial="hidden"
        animate={fadeContent ? "visible" : "hidden"}
      >
        {/* SVG Connected Line */}
        <svg className="pointer-events-none absolute inset-0 z-10 h-full w-full">
          <defs>
            <filter id="lineShadow">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="5.5"
                floodColor="#4338ca"
                floodOpacity="1"
              />
            </filter>
          </defs>
          <path
            d={getSmoothPath()}
            fill="none"
            stroke="#4338ca"
            strokeWidth="5"
            strokeLinecap="round"
            className="opacity-40"
            style={{ transition: "d 0.12s ease-out" }}
            filter="url(#lineShadow)"
          />
        </svg>

        {/* Stats Cards */}
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              left: `${cardPositions[index].x}%`,
              top: `${cardPositions[index].y}%`,
              transition:
                magnetRef.current === index
                  ? "left 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease-out"
                  : "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            className={`absolute z-10 flex h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-start justify-center 
            rounded-[24px] border-4 border-white bg-[#A1AEF2B2] p-4 text-left text-[#514CF1] 
            shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-[15px]
            ${
              magnetRef.current === index
                ? "scale-105 shadow-[0_12px_48px_rgba(0,0,0,0.2)] "
                : ""
            }
          `}
          >
            <div className="mb-2 opacity-90">{stat.icon}</div>
            <div className="mb-1 text-3xl font-bold tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs font-semibold uppercase tracking-wide opacity-80">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DraggableCardsSection;