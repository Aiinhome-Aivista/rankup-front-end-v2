import { motion, type Variants } from "framer-motion";

// --- Components ---
import ScoreCard from "./ScoreCard";
import RankUpAICard from "./RankUpAICard";
import InfoAllCard from "./InfoAllCard";

// --- Assets ---
import workingBeach from "@/assets/digital-working-near-beach.svg";

// --- Types ---
interface AIAssistanceSectionProps {
  fadeContent?: boolean;
}

const AIAssistanceSection = ({ fadeContent = false }: AIAssistanceSectionProps) => {
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const scaleVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <div className="relative bg-white px-4 py-10 text-white md:px-10">
      {/* Background Gradients/Blurs */}
      <div className="bg-linear-to-br absolute left-[70%] top-[5%] h-[90%] w-[30%] rounded-full from-[#514CF1] to-[#F21D2F] blur-[100px]"></div>
      <div className="bg-linear-to-br absolute left-[-5%] top-[10%] h-[90%] w-[40%] rounded-full from-[#514CF1] to-[#F21D2F] blur-[100px]"></div>
      <div className="bg-linear-to-br absolute bottom-[-2%] left-1/2 h-[40%] w-[40%] -translate-x-1/2 rounded-full from-[#514CF1] to-[#F21D2F] blur-[100px]"></div>

      <motion.div
        className="relative z-10 mx-auto flex w-[calc(100%-2rem)] max-w-5xl flex-col items-center"
        variants={contentVariants}
        initial="hidden"
        animate={fadeContent ? "visible" : "hidden"}
      >
        {/* Top Header Section */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex justify-center">
            <img
              src={workingBeach}
              alt="Relaxing"
              className="h-32 w-auto drop-shadow-lg"
            />
          </div>

          <h1 className="text-6xl font-extrabold text-white">AI Assistance</h1>
          
          {/* Decorative Blur behind text */}
          <div className="bg-linear-to-br pointer-events-none absolute left-1/2 -z-10 h-[15%] w-[60%] -translate-x-1/2 rounded-full from-[#514CF1] to-[#F21D2F] blur-[80px]"></div>

          <p className="text-lg font-normal text-white">
            Experience the future of assessments with your own AI assistant!
          </p>
        </div>

        {/* Grid Content */}
        <div className="relative grid w-full grid-cols-1 gap-6 md:grid-cols-12">
          {/* Central Glow */}
          <div className="bg-linear-to-br pointer-events-none absolute inset-0 -z-10 h-full w-full rounded-full from-[#541Cf1] to-[#F21D2F] blur-[120px]"></div>

          {/* Row 1: ScoreCard & RankUpAI */}
          <motion.div
            className="flex items-end justify-center md:col-span-4 md:justify-end"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px" }}
          >
            <ScoreCard />
          </motion.div>
          
          <motion.div
            className="md:col-span-8"
            variants={scaleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px" }}
          >
            <RankUpAICard />
          </motion.div>

          {/* Row 2: Three Info Cards */}
          {/* Assuming InfoAllCard handles its own grid spanning or spans full width */}
          <InfoAllCard />

          {/* Row 3: Value Prop & Blank Cards */}
          <motion.div
            className="md:col-span-8"
            variants={scaleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px" }}
          >
            <div className="flex h-full w-full flex-col items-center rounded-3xl border-3 border-[#FFFFFF38] px-6 pb-6 text-center text-[#FFFFFF80] shadow-[5px_12px_22px_4px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <p className="mt-8 text-lg font-normal text-[#FFFFFF80]">
                {" "}
                At RankUp, we use Artificial Intelligence (AI) to transform the
                way students learn, practice, and succeed. Our AI-driven system
                personalizes learning, evaluates performance instantly, and
                provides deep insights to help students and educators make
                better decisions—faster.
              </p>

              <button
                className="mt-5 h-[33px] w-[118px] cursor-pointer rounded-[20px] text-lg
                          font-semibold text-[#D9D9D9] backdrop-blur-md
                          shadow-[5px_12px_22px_rgba(0,0,0,0.25)]
                          transition-all duration-300
                          [box-shadow:5px_12px_22px_rgba(0,0,0,0.25),inset_4px_4px_4px_rgba(255,255,255,0.25)]
                          hover:scale-[1.02] hover:bg-white/10
                          active:scale-[0.98]"
              >
                Generate
              </button>
              
              {/* Decorative Line */}
              <div className="absolute -bottom-22 right-28 h-[199px] w-[23px] rotate-90 rounded-l-4xl bg-[#FFFFFF38]"></div>
            </div>
          </motion.div>

          {/* Blank Cards Stack */}
          <div className="flex h-full flex-col gap-6 md:col-span-4">
            <motion.div
              className="min-h-[140px] w-full flex-1 rounded-3xl border-3 border-[#FFFFFF38] shadow-[5px_12px_22px_4px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px" }}
            />
            <motion.div
              className="min-h-[140px] w-full flex-1 rounded-[30px] border-3 border-[#FFFFFF38] shadow-[5px_12px_22px_4px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AIAssistanceSection;