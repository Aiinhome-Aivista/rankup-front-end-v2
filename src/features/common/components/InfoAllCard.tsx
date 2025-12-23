import { motion, type Variants } from "framer-motion";

// --- Assets ---
import bookStudent from "@/assets/book-student.svg";
import announcementPoster from "@/assets/announcement-poster.svg";
import financeMoney from "@/assets/real-finance-money.svg";

const InfoAllCard = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Student Card */}
      <motion.div
        className="md:col-span-4"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-50px" }}
      >
        <div className="relative h-80 w-full max-w-md rounded-4xl border-3 border-[#FFFFFF38] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
          <div className="relative mb-6 inline-block">
            {/* INNER GLOW UNDER S */}
            <div
              className="absolute -left-2 top-1 h-5 w-5 rounded-full backdrop-blur-md
                        shadow-[5px_12px_22px_rgba(0,0,0,0.25)]
                        [box-shadow:5px_12px_22px_rgba(0,0,0,0.25),inset_4px_4px_4px_rgba(255,255,255,0.25)]"
            />
            {/* STUDENT TEXT */}
            <span className="relative z-10 text-lg font-extrabold text-[#FFFFFF80]">
              Student
            </span>
          </div>
          {/* FEATURES */}
          <p className="text-lg font-medium text-[#FFFFFF80]">
            Smart Practice <br />
            Instant feedback <br />
            Reduced exam anxiety
          </p>
          {/* IMAGE */}
          <img
            src={bookStudent}
            alt="Student"
            className="pointer-events-none absolute bottom-6 right-6 w-32 opacity-70"
          />
        </div>
      </motion.div>

      {/* Teacher Card */}
      <motion.div
        className="md:col-span-4"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-50px" }}
      >
        <div
          className="relative h-80 w-full max-w-md overflow-hidden rounded-4xl border-3
                        border-[#FFFFFF38] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.35)]
                        backdrop-blur-md"
        >
          <img
            src={announcementPoster}
            alt="Teacher"
            className="mb-2 w-28 opacity-70"
          />
          <p className="text-right text-lg font-medium text-[#FFFFFF80]">
            Auto grading <br />
            Performance dashboards <br />
            Student-wise progress tracking
          </p>
          {/* TEACHER LABEL (BOTTOM RIGHT) */}
          <div className="absolute bottom-6 right-8">
            {/* INNER GLOW UNDER 'T' */}
            <div
              className="absolute -right-1 top-1 h-5 w-5 rounded-full backdrop-blur-md
                            shadow-[5px_12px_22px_rgba(0,0,0,0.25)]
                            [box-shadow:5px_12px_22px_rgba(0,0,0,0.25),inset_4px_4px_4px_rgba(255,255,255,0.25)]"
            />
            <span className="relative z-10 text-lg font-extrabold text-[#FFFFFF80]">
              Teacher
            </span>
          </div>
        </div>
      </motion.div>

      {/* Institution Card */}
      <motion.div
        className="items-end text-right md:col-span-4"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-50px" }}
      >
        <div className="relative h-80 w-full max-w-md rounded-4xl border-3 border-[#FFFFFF38] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
          <div className="absolute right-8 top-6">
            <div
              className="absolute -right-1 top-1 h-5 w-5 rounded-full backdrop-blur-md
                            shadow-[5px_12px_22px_rgba(0,0,0,0.25)]
                            [box-shadow:5px_12px_22px_rgba(0,0,0,0.25),inset_4px_4px_4px_rgba(255,255,255,0.25)]"
            />

            <span className="relative z-10 text-lg font-extrabold text-[#FFFFFF80]">
              Institution
            </span>
          </div>

          {/* FEATURES (CENTER) */}
          <p className="mt-10 text-lg font-medium text-[#FFFFFF80]">
            Centralized reporting <br />
            Data-driven decisions <br />
            Large-scale exam automation
          </p>

          {/* IMAGE (BOTTOM LEFT) */}
          <img
            src={financeMoney}
            alt="Institution"
            className="absolute bottom-6 left-6 w-28 opacity-70"
          />
        </div>
      </motion.div>
    </>
  );
};

export default InfoAllCard;