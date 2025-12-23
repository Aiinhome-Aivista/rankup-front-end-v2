import { useRef, useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
// --- Components ---
import AIAssistanceSection from "./AIAssistanceSection";
import TrustedSection from "./TrustedSection";

// --- Assets ---
import strategyImage from "@/assets/strategy.svg";

// --- Types ---
interface MiddleSectionProps {
  fadeContent?: boolean;
}

interface VisibleSubSectionsState {
  aiAssistance: boolean;
  trusted: boolean;
}

const MiddleSection = ({ fadeContent = false }: MiddleSectionProps) => {
  // 1. Refs
  const aiAssistanceRef = useRef<HTMLDivElement>(null);
  const trustedRef = useRef<HTMLDivElement>(null);

  // 2. State
  const [visibleSubSections, setVisibleSubSections] = useState<VisibleSubSectionsState>({
    aiAssistance: false,
    trusted: false,
  });

  // 3. Observer Logic
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Type assertion to access dataset safely
          const target = entry.target as HTMLElement;
          const sectionName = target.dataset.section as keyof VisibleSubSectionsState;
          
          if (sectionName) {
            setVisibleSubSections((prev) => ({ ...prev, [sectionName]: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (aiAssistanceRef.current) observer.observe(aiAssistanceRef.current);
    if (trustedRef.current) observer.observe(trustedRef.current);

    return () => observer.disconnect();
  }, []);

  // 4. Animation Variants
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
    <>
      <div className="relative flex flex-col items-center justify-between overflow-hidden bg-white py-18 md:flex-row md:py-40">
        <motion.div
          className="h-full w-full"
          variants={contentVariants}
          initial="hidden"
          animate={fadeContent ? "visible" : "hidden"}
        >
          {/* Left Content */}
          <div className="z-10 flex max-w-2xl flex-col pl-10 md:pl-35">
            <div className="mb-6 flex items-start justify-center md:justify-start">
              <img
                src={strategyImage}
                alt="strategy illustration"
                className="h-32 w-auto"
              />
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-[#1C1B1F] md:text-5xl">
              Integrated with the
              <br />
              platforms you use
            </h1>

            <p className="text-lg leading-relaxed text-gray-600">
              Connect your favorite tools effortlessly. Our platform{" "}
              <br className="hidden md:block" />
              plays well with others, creating a unified ecosystem for{" "}
              <br className="hidden md:block" />
              your school.
            </p>
          </div>

          {/* Right Background Effect */}
          <div className="-mr-80 absolute right-0 top-1/2 flex h-[420px] w-[420px] -translate-y-1/2 translate-x-1/4 items-center justify-center md:h-[690px] md:w-[690px] md:translate-x-0">
            {/* Concentric Circles */}
            
            {/* Largest Circle */}
            <div className="animate-[breathe_4s_ease-in-out_infinite] absolute h-full w-full rounded-full bg-gradient-to-br from-[#A1AEF2] to-[#514CF1] opacity-40"></div>

            {/* Middle Circle */}
            <div className="animate-[breathe_6s_ease-in-out_infinite] absolute h-[75%] w-[75%] rounded-full bg-gradient-to-br from-[#A1AEF2] to-[#514CF1] opacity-40 drop-shadow-2xl"></div>
            
            {/* Inner Circle */}
            <div className="animate-[breathe_5s_ease-in-out_infinite] absolute flex h-[50%] w-[50%] items-center justify-center rounded-full bg-gradient-to-br from-[#A1AEF2] to-[#514CF1] opacity-60 drop-shadow-2xl">
              {/* Center Gradient Core */}
              <div className="animate-[breathe_7s_ease-in-out_infinite] h-[60%] w-[60%] rounded-full bg-gradient-to-br from-[#A1AEF2] to-[#514CF1] opacity-80 shadow-2xl"></div>
            </div>
            
            {/* Floating Icons */}
            
            {/* Icon 1 (Google) Orbit Container */}
            <div className="animate-[oscillate_25s_ease-in-out_infinite] absolute h-full w-full">
              <div className="animate-[oscillate-reverse_25s_ease-in-out_infinite] absolute right-[60%] top-[25%] transform rounded-xl border border-white/20 bg-white/30 p-4 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-110">
                <svg
                  viewBox="0 0 48 48"
                  className="h-4 w-4 drop-shadow-sm sm:h-6 sm:w-6 md:h-8 md:w-8"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
              </div>
            </div>
            
            {/* Icon 2 (Microsoft) Orbit Container */}
            <div className="animate-[oscillate-reverse_30s_ease-in-out_infinite] absolute h-full w-full">
              <div className="animate-[oscillate_30s_ease-in-out_infinite] absolute bottom-[20%] left-[20%] transform rounded-xl border border-white/20 bg-white/30 p-4 shadow-lg backdrop-blur-md transition-transform duration-400 hover:scale-110">
                <div className="grid h-4 w-4 grid-cols-2 grid-rows-2 gap-1 sm:h-6 sm:w-6 md:h-8 md:w-8">
                  <div className="bg-[#F35325]"></div>
                  <div className="bg-[#81BC06]"></div>
                  <div className="bg-[#05A6F0]"></div>
                  <div className="bg-[#FFBA08]"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* AI Assistance Section */}
      <div ref={aiAssistanceRef} data-section="aiAssistance">
        <AIAssistanceSection fadeContent={visibleSubSections.aiAssistance} />
      </div>

      {/* Trusted By Educators Section */}
      <div ref={trustedRef} data-section="trusted" className="mt-25">
        <TrustedSection fadeContent={visibleSubSections.trusted} />
      </div>
    </>
  );
};

export default MiddleSection;