import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, User } from "lucide-react";
import mainLogo from "@/assets/icons/main-logo.svg";
import followTheSigns from "@/assets/icons/follow_the_signs.svg";
import { features } from "@/config/nav-items";

const Navbar = () => {
  const navigate = useNavigate();
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState<string>("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsFeaturesOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);



  return (
    <div className="fixed left-0 top-0 z-50 w-full pointer-events-none">
      <nav
        className={`
          pointer-events-auto
          absolute left-1/2 -translate-x-1/2
          bg-[#A2AEF2]/70 rounded-b-[2rem] rounded-t-none px-6 py-3 
          border-[5px] border-white border-t-0 shadow-lg shadow-[#514CF180]
          backdrop-blur-lg
          transition-all duration-500 ease-in-out overflow-hidden 
          ${isFeaturesOpen ? "max-h-[400px]" : "max-h-[65px]"}
          ${isVisible ? "top-0 opacity-100" : "-top-32 opacity-0"}
          w-[calc(100%-2rem)] max-w-5xl
          z-50
        `}
        onMouseLeave={() => setIsFeaturesOpen(false)}
      >
        {/* Top Bar */}
        <div className="flex h-10 items-center justify-between">
          {/* Left: Logo & Links */}
          <div className="flex items-center gap-8">
            <img
              src={mainLogo}
              alt="RankUp Logo"
              className="h-10 w-10 object-contain"
            />

            <div className="hidden items-center gap-6 text-sm font-medium text-[#5c6b9f] md:flex">
              <button
                onMouseEnter={() => setIsFeaturesOpen(true)}
                className="flex cursor-pointer items-center gap-1 text-[#514BF2] transition-colors outline-none"
              >
                Features
                {isFeaturesOpen ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>
              <button className="flex cursor-pointer items-center gap-1 text-[#514BF2] transition-colors">
                Curriculum <ChevronDown size={16} />
              </button>
              <button className="flex cursor-pointer items-center gap-1 text-[#514BF2] transition-colors">
                Resources <ChevronDown size={16} />
              </button>
              <button className="flex cursor-pointer items-center gap-1 text-[#514BF2] transition-colors">
                Company <ChevronDown size={16} />
              </button>
              <button className="flex cursor-pointer items-center gap-1 text-[#514BF2] transition-colors">
                Plans <ChevronDown size={16} />
              </button>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden cursor-pointer items-center gap-2 rounded-xl border border-transparent bg-gray-50 px-3 py-1.5 font-semibold text-[#4f46e5] shadow-md transition-all hover:bg-gray-200 hover:shadow-lg active:scale-95 md:flex">
              <img src={followTheSigns} alt="Tour" className="h-4 w-4" />
              Take a Tour
            </button>
            <button
              onClick={() => navigate("/login")}
              className="flex cursor-pointer items-center gap-2 rounded-xl bg-[#514BF2] px-3 py-1.5 font-semibold text-white shadow-md transition-all hover:bg-[#4338ca] hover:shadow-lg active:scale-95"
            >
              <User size={18} />
              Sign In
            </button>
          </div>
        </div>

        {/* Expanded Content: Features Grid */}
        <div
          className={`
          mt-4 grid grid-cols-1 gap-1 pb-2 md:grid-cols-2 lg:grid-cols-3
          transition-opacity delay-100 duration-500
          ${isFeaturesOpen ? "visible opacity-100" : "invisible opacity-0"}
        `}
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className="group relative flex cursor-pointer items-start gap-4 rounded-2xl p-2 transition-all duration-500"
            >
              <div
                className={`
                  absolute z-0 border border-[#514CF1] bg-[#514CF133] transition-all duration-500 ease-in-out
                  ${
                    activeFeature === feature.id
                      ? "left-0 top-0 h-full w-full rounded-2xl opacity-100"
                      : "left-2 top-2 h-[2.75rem] w-[2.75rem] rounded-xl opacity-100 group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:rounded-2xl"
                  }
                `}
              />

              <div
                className={`
                relative z-10 rounded-xl p-2.5 transition-all duration-500
                ${activeFeature === feature.id ? "text-[#514CF1]" : "text-[#4f46e5]"}
              `}
              >
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="h-6 w-6 object-contain"
                />
              </div>

              <div className="relative z-10 transition-colors duration-300">
                <h3
                  className={`
                  mb-0.5 text-sm font-bold transition-colors
                  ${
                    activeFeature === feature.id
                      ? "text-[#514CF1]"
                      : "text-[#1C1B1F] group-hover:text-[#4f46e5]"
                  }
                `}
                >
                  {feature.title}
                </h3>
                <p
                  className={`
                  text-xs font-medium transition-colors
                  ${
                    activeFeature === feature.id
                      ? "text-[#514CF1]"
                      : "text-[#1C1B1F] group-hover:text-[#4f46e5]"
                  }
                `}
                >
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;