import { useState, useEffect, type ReactNode } from "react";
import {
  Psychology,
  Security,
  SentimentDissatisfied,
  MoodBad,
  EditNote,
} from "@mui/icons-material";
import { motion, type Variants } from "framer-motion";

// --- Assets ---
import studying from "@/assets/read-book-img.svg";

// --- Types ---
interface TopMiddleSectionProps {
  fadeContent?: boolean;
}

interface CarouselItem {
  id: number;
  text: string;
  icon: ReactNode;
  description: string;
}

const TopMiddleSection = ({ fadeContent = false }: TopMiddleSectionProps) => {
  const items: CarouselItem[] = [
    {
      id: 1,
      text: "Slow Feedback Loops",
      icon: <Psychology fontSize="large" />,
      description:
        "Students often wait days or even weeks to receive feedback on their work. This delay reduces learning effectiveness and makes it harder to improve performance in real time.",
    },
    {
      id: 2,
      text: "Cheating Concerns",
      icon: <Security fontSize="large" />,
      description:
        "Traditional assessments make it difficult to ensure academic integrity. Copying, impersonation, and other practices reduce the credibility of evaluation results.",
    },
    {
      id: 3,
      text: "Boring Assessment",
      icon: <SentimentDissatisfied fontSize="large" />,
      description:
        "Standardized tests often lack creativity and interactivity, reducing student interest and motivation to perform their best.",
    },
    {
      id: 4,
      text: "Assessment Anxiety",
      icon: <MoodBad fontSize="large" />,
      description:
        "High-stakes exams create unnecessary stress and anxiety for students. This pressure can negatively impact their performance and mental well-being.",
    },
    {
      id: 5,
      text: "Manual Grading",
      icon: <EditNote fontSize="large" />,
      description:
        "Grading piles of papers is time-consuming and prone to errors. It takes away valuable time that educators could spend on teaching and mentoring.",
    },
    {
      id: 6,
      text: "Manual Grading",
      icon: <EditNote fontSize="large" />,
      description:
        "Grading piles of papers is time-consuming and prone to errors. It takes away valuable time that educators could spend on teaching and mentoring.",
    },
    {
      id: 7,
      text: "Manual Grading",
      icon: <EditNote fontSize="large" />,
      description:
        "Grading piles of papers is time-consuming and prone to errors. It takes away valuable time that educators could spend on teaching and mentoring.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  const getOffset = (index: number): number => {
    let offset = index - activeIndex;
    if (offset > 2) offset -= items.length;
    if (offset < -2) offset += items.length;
    return offset;
  };

  // Animation variants for content fade-in
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
    <div className="w-full overflow-hidden bg-gradient-to-b from-[#b7baf8] to-[#ffffff] py-20 font-sans">
      <motion.div
        className="container mx-auto flex flex-col items-center gap-6 px-4 pb-6"
        variants={contentVariants}
        initial="hidden"
        animate={fadeContent ? "visible" : "hidden"}
      >
        {/* Header Illustration & Text */}
        <div className="mb-12 pb-12 text-center">
          <img
            src={studying}
            alt="Illustration"
            className="mx-auto mb-4 h-32 w-auto opacity-80"
          />
          <h2 className="text-4xl font-bold text-gray-900">Wave GoodBye To</h2>
        </div>

        {/* Vertical Carousel */}
        <div className="perspective-1000 relative flex h-[600px] w-full max-w-6xl flex-col items-center justify-center">
          {items.map((item, index) => {
            const offset = getOffset(index);
            const isActive = offset === 0;
            const isNeighbor = Math.abs(offset) === 1;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            return (
              <div
                key={item.id}
                className={`
                  absolute flex w-full max-w-4xl cursor-pointer items-start rounded-2xl border p-6 text-left transition-all duration-700 ease-in-out
                  ${
                    isActive
                      ? "z-30 scale-100 border-[#6366F1] bg-[#E0E7FF] opacity-100 shadow-xl"
                      : isNeighbor
                      ? "z-20 scale-95 border-[0.5px] border-[#6366F1] bg-[#E0E7FF] opacity-80 blur-[2px]"
                      : "z-10 scale-90 border-transparent bg-[#E0E7FF] opacity-30 blur-[2px]"
                  }
                `}
                style={{
                  transform: `translateY(${offset * 150}px) scale(${
                    1 - Math.abs(offset) * 0.05
                  })`,
                }}
                onClick={() => setActiveIndex(index)}
              >
                {/* Icon Box */}
                <div
                  className={`
                    mr-6 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg
                    ${isActive ? "text-[#4338ca]" : "text-gray-400"}
                  `}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className={`mb-2 text-xl font-bold ${
                      isActive ? "text-[#4338ca]" : "text-gray-400"
                    }`}
                  >
                    {item.text}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-colors duration-300 ${
                      isActive ? "text-[#4338ca]" : "text-gray-300"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default TopMiddleSection;