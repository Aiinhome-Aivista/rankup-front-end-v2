import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import MiddleSection from "../MiddleSection";
import TopMiddleSection from "../TopMiddleSection";
import DraggableCardsSection from "../DraggableCardsSection";
import Footer from "../Footer";

// --- Asset Imports ---
import fun from "@/assets/having-fun.svg";
import codingImage from "@/assets/coding-a-website.svg";
import studying from "@/assets/student-studying.svg";

// --- Types ---
// Define the shape of our visibility state to prevent string indexing errors
interface VisibleSectionsState {
  draggable: boolean;
  topMiddle: boolean;
  middle: boolean;
  footer: boolean;
}

export default function ParallaxLanding() {
  // 1. Refs Typed for specific HTML elements
  const sectionRef = useRef<HTMLElement>(null);
  const draggableRef = useRef<HTMLDivElement>(null);
  const topMiddleRef = useRef<HTMLDivElement>(null);
  const middleRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  // 2. State Typed
  const [visibleSections, setVisibleSections] = useState<VisibleSectionsState>({
    draggable: false,
    topMiddle: false,
    middle: false,
    footer: false,
  });

  // 3. Scroll Logic (Framer Motion)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const layer1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const layer2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const layer3 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const layer4 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const layer5 = useTransform(scrollYProgress, [0, 1], [0, -600]);

  // 4. Observer Logic
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Type assertion to access dataset safely
          const target = entry.target as HTMLElement;
          const sectionName = target.dataset.section as keyof VisibleSectionsState;
          
          if (sectionName) {
            setVisibleSections((prev) => ({ ...prev, [sectionName]: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    if (draggableRef.current) observer.observe(draggableRef.current);
    if (topMiddleRef.current) observer.observe(topMiddleRef.current);
    if (middleRef.current) observer.observe(middleRef.current);
    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* PARALLAX SECTION */}
      <section
        ref={sectionRef}
        className="relative h-[180vh] overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, #dcdbfc 66.67%, #514cf1 66.67%)",
        }}
      >
        <div className="z-1 absolute -right-5 -top-2 hidden w-72 opacity-90 transition-transform duration-500 hover:scale-105 lg:block">
          <img
            src={studying}
            alt="Student studying"
            className="h-auto w-full drop-shadow-lg"
          />
        </div>
        
        {/* WAVES */}
        <motion.div
          style={{ y: layer1 }}
          className="absolute inset-0 z-10 bg-[url('/Parallax/Layer01.svg')] bg-bottom bg-no-repeat"
        />

        <motion.div
          style={{ y: layer2 }}
          className="absolute inset-0 z-20 bg-[url('/Parallax/Layer02.svg')] bg-bottom bg-no-repeat"
        />
        
        <div className="z-5 absolute left-[2%] top-[30vh] w-40 opacity-90 transition-transform duration-500 hover:scale-105 md:left-10 md:w-64">
          <img
            src={codingImage}
            alt="Design and code"
            className="h-auto w-full drop-shadow-lg"
          />
        </div>
        
        <div className="z-40 absolute inset-x-0 top-[30vh] flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-indigo-600 md:text-6xl">
            Next Generation Assessment <br /> Platform For Every School
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-500 md:text-xl">
            Empower educators, engage students, and improve learning outcomes
          </p>
        </div>
        
        <div className="z-25 absolute right-[2%] top-[25%] w-48 opacity-90 transition-transform duration-500 hover:scale-105 md:right-10 md:w-72">
          <img
            src={fun}
            alt="Students having fun"
            className="h-auto w-full drop-shadow-lg"
          />
        </div>

        {/* TEXT LAYER (Ghost element for spacing/layering) */}
        <motion.div
          style={{ y: layer3 }}
          className="z-30 absolute inset-x-0 top-[40vh] flex flex-col items-center px-4 text-center"
        />

        <motion.div
          style={{ y: layer4 }}
          className="absolute inset-0 z-40 bg-[url('/Parallax/Layer03.svg')] bg-bottom bg-no-repeat"
        />

        <motion.div
          style={{ y: layer5 }}
          className="absolute inset-0 z-50 bg-[url('/Parallax/Layer04.svg')] bg-bottom bg-no-repeat"
        />
      </section>

      {/* NORMAL CONTENT FLOW WITH SCROLL FADE-IN EFFECTS */}

      <div ref={draggableRef} data-section="draggable">
        <DraggableCardsSection fadeContent={visibleSections.draggable} />
      </div>

      <div ref={topMiddleRef} data-section="topMiddle">
        <TopMiddleSection fadeContent={visibleSections.topMiddle} />
      </div>

      <div ref={middleRef} data-section="middle">
        <MiddleSection fadeContent={visibleSections.middle} />
      </div>

      <div ref={footerRef} data-section="footer">
        <Footer fadeContent={visibleSections.footer} />
      </div>
    </>
  );
}