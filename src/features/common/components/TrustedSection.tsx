import { useState, useEffect, type ReactNode, type CSSProperties } from "react";
import { Star, FastForward } from "@mui/icons-material";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import { motion, type Variants } from "framer-motion";

// --- Assets ---
import aboutOurTeamSvg from "@/assets/about-our-team.svg";

// --- Types ---
interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  videoColor: string;
}

interface VideoSlide {
  id: number;
  color: string;
  content: ReactNode;
}

interface TrustedSectionProps {
  fadeContent?: boolean;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Anna Vilerel",
    role: "ZEMS world Academy, DUBAI",
    quote: '"The game changer for me this year has been using the lockdown app".',
    videoColor: "bg-[#9FA9F6]",
  },
  {
    id: 2,
    name: "Mr. John Doe",
    role: "International School, London",
    quote: '"An incredible tool that has revolutionized our assessment process."',
    videoColor: "bg-[#F69F9F]",
  },
  {
    id: 3,
    name: "Ms. Sarah Smith",
    role: "Tech Academy, NY",
    quote: '"Highly recommended for all educators looking for efficiency."',
    videoColor: "bg-[#9FF6C5]",
  },
];

const videoSlides: VideoSlide[] = [
  {
    id: 1,
    color: "bg-[#9FA9F6]",
    content: (
      <div className="text-center">
        <FastForward sx={{ fontSize: 40, color: "#1C1B1F" }} />
      </div>
    ),
  },
  {
    id: 2,
    color: "bg-[#F69F9F]",
    content: (
      <div className="text-center">
        <FastForward sx={{ fontSize: 40, color: "#1C1B1F" }} />
      </div>
    ),
  },
  {
    id: 3,
    color: "bg-[#9FF6C5]",
    content: (
      <div className="text-center">
        <FastForward sx={{ fontSize: 40, color: "#1C1B1F" }} />
      </div>
    ),
  },
  {
    id: 4,
    color: "bg-[#F6ECB9]",
    content: (
      <div className="text-center">
        <FastForward sx={{ fontSize: 40, color: "#1C1B1F" }} />
      </div>
    ),
  },
];

const TrustedSection = ({ fadeContent = false }: TrustedSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [videoIndex, setVideoIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000); // Slower outer rotation
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((prevIndex) => (prevIndex + 1) % videoSlides.length);
    }, 4000); // Faster inner rotation
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

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
    <div className="flex w-full flex-col items-center justify-between gap-10 bg-white px-10 py-20 md:flex-row md:gap-20 md:px-28">
      <motion.div
        className="flex w-full flex-col items-center justify-between gap-10 md:flex-row md:gap-20"
        variants={contentVariants}
        initial="hidden"
        animate={fadeContent ? "visible" : "hidden"}
      >
        {/* Left Content: Testimonial Card */}
        <div className="flex flex-col items-center drop-shadow">
          <div className="relative rounded-[3.5rem] border border-[#1C1B1F] bg-white p-2 shadow-[6px_6px_0px_0px_#1C1B1F]">
            <div className="relative flex h-[500px] w-[320px] flex-col justify-between rounded-[3rem] border border-[#1C1B1F] bg-white p-6 transition-all duration-500 ease-in-out">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#1C1B1F]">
                  <Person2RoundedIcon sx={{ fontSize: 38 }} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-black">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-[10px] font-semibold text-gray-500">
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>

              {/* Video Carousel Placeholder */}
              <div className="relative mt-4 h-48 w-full overflow-hidden rounded-3xl bg-[#FFFFFF03]">
                {videoSlides.map((slide, vIndex) => {
                  // Calculate offset for inner carousel
                  let offset = vIndex - videoIndex;
                  if (offset < 0) offset += videoSlides.length;

                  let dist = vIndex - videoIndex;
                  // Handle wrap-around for infinite loop effect
                  if (dist < -1) dist += videoSlides.length;
                  if (dist > videoSlides.length - 2) dist -= videoSlides.length;

                  const isActive = dist === 0;
                  const isNext = dist > 0;

                  let style: CSSProperties = {};
                  const className =
                    "absolute top-0 w-full h-full rounded-3xl flex items-center justify-center transition-all duration-700 ease-in-out shadow-lg border border-white/20";

                  if (isActive) {
                    style = {
                      transform: "translateX(0) scale(1)",
                      zIndex: 20,
                      opacity: 1,
                    };
                  } else if (isNext) {
                    // Stack to the right
                    style = {
                      transform: `translateX(${dist * 15}%) scale(${
                        1 - dist * 0.1
                      })`,
                      zIndex: 20 - dist,
                      opacity: 1 - dist * 0.2,
                    };
                    // Hide if too far
                    if (dist > 2) style.opacity = 0;
                  } else {
                    // Exit to left
                    style = {
                      transform: "translateX(-120%) scale(0.9)",
                      zIndex: 20,
                      opacity: 0,
                    };
                  }

                  return (
                    <div
                      key={slide.id}
                      className={`${className} ${slide.color} ${
                        style.opacity === 0 ? "pointer-events-none" : ""
                      }`}
                      style={style}
                    >
                      {slide.content}
                    </div>
                  );
                })}
              </div>

              {/* Quote */}
              <div className="mt-4">
                <p className="min-h-12 text-xs font-medium leading-relaxed text-black">
                  {currentTestimonial.quote}
                </p>
              </div>

              {/* Rating */}
              <div className="mt-2 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} sx={{ fontSize: 16, color: "#1C1B1F" }} />
                ))}
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="mt-8 flex gap-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-3 rounded-full bg-[#1C1B1F] transition-all duration-300 ${
                  index === currentIndex ? "w-8" : "w-3"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Right Content: Text & Illustration */}
        <div className="flex max-w-lg flex-col items-end text-right">
          <div className="justify-end">
            <img
              src={aboutOurTeamSvg}
              alt="Team Illustration"
              className="h-auto w-32"
            />
          </div>

          <h2 className="mb-4 w-full text-4xl font-extrabold text-[#1C1B1F] md:text-5xl">
            Trusted by educators <br /> worldwide
          </h2>

          <p className="w-full text-sm text-[#1C1B1F] md:text-lg">
            Hear from passionate educators who are{" "}
            <br className="hidden md:block" /> shaping the future of assessments
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TrustedSection;