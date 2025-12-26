import mainLogo from "@/assets/R-Vector.svg";
import "./PageLoader.css";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#eef2ff]/80 backdrop-blur-md transition-all duration-500">
      <div className="relative flex flex-col items-center z-10">
        {/* Pulsing Logo */}
        <div className="relative mb-8">
          <div className="absolute inset-0 animate-pulse rounded-full bg-[#514CF1] opacity-20 blur-xl"></div>
          <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 animate-float">
            <img
              src={mainLogo}
              alt="Loading..."
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Simple Loading Dots */}
        <div className="flex items-center gap-2">
           <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#514CF1]"></div>
           <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#514CF1] animation-delay-200"></div>
           <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#514CF1] animation-delay-400"></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
