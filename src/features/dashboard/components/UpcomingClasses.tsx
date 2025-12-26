import { useState } from "react";
import { ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react";

// --- Types ---
interface ClassSession {
  id: string;
  time: string;
  subject: string;
  active: boolean;
}

const UpcomingClasses = () => {
  const [startIndex, setStartIndex] = useState<number>(0);

  const classes: ClassSession[] = [
    { id: "7A", time: "10:00", subject: "Mathematics", active: true },
    { id: "8B", time: "12:30", subject: "Science", active: false },
    { id: "6C", time: "14:00", subject: "Physics", active: false },
    { id: "1C", time: "16:00", subject: "Biology", active: false },
    { id: "9C", time: "16:00", subject: "Computer Science", active: false },
  ];

  const visibleClasses = classes.slice(startIndex, startIndex + 3);
  const activeClass = classes.find((cls) => cls.active);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + 3 < classes.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="relative flex h-36 w-full flex-col justify-between overflow-hidden rounded-3xl bg-[#514CF1] p-4 text-white md:h-40 lg:h-44">
      {/* Header */}
      <div className="z-10 flex items-center justify-between">
        <h3 className="text-sm font-bold">Upcoming Classes | Today</h3>
        <div className="flex gap-2 text-[#A1AEF2]">
          <ChevronLeft
            size={20}
            className={`cursor-pointer transition-opacity ${
              startIndex === 0
                ? "cursor-not-allowed opacity-40"
                : "opacity-80 hover:opacity-90"
            }`}
            onClick={handlePrev}
          />
          <ChevronRight
            size={20}
            className={`cursor-pointer transition-opacity ${
              startIndex + 3 >= classes.length
                ? "cursor-not-allowed opacity-40"
                : "opacity-80 hover:opacity-90"
            }`}
            onClick={handleNext}
          />
        </div>
      </div>

      {/* Content - Timeline */}
      <div className="z-10 flex flex-1 items-center justify-between px-2">
        <Sun className="opacity-50" size={25} fill="currentColor" />

        {visibleClasses.map((cls) => (
          <div
            key={cls.id}
            className="flex flex-col items-center gap-2 transition-all duration-300"
          >
            <div
              className={`flex h-18 w-18 flex-col items-center justify-center rounded-2xl backdrop-blur-sm ${
                cls.active
                  ? "bg-[#A1AEF2B2] text-[#FFFFFF]"
                  : "bg-[#FFFFFF0D] text-[#FFFFFF80]"
              }`}
            >
              <span className="pb-1 text-xs font-bold">{cls.id}</span>
              <span className="text-[0.5rem] font-bold">{cls.time}</span>
              <span className="w-full truncate px-1 text-center text-[0.5rem] font-bold">
                {cls.subject}
              </span>
            </div>
          </div>
        ))}

        <Moon
          className="text-[#A1AEF2] opacity-50"
          size={25}
          fill="currentColor"
        />
      </div>

      {/* Bottom Progress/Time indicator */}
      <div className="z-10 flex items-center justify-center">
        <div className="opacity-0">blank</div>
      </div>

      {/* Note: translate-x-7.5 requires a custom tailwind config or arbitrary value.
         If this looks off, change to translate-x-[30px] 
      */}
      <div className="absolute bottom-0 z-10 w-24 translate-x-8 rounded-t-2xl bg-[#A1AEF2B2] py-1 text-center text-xs text-white">
        {activeClass ? activeClass.time : "--:--"}
      </div>
    </div>
  );
};

export default UpcomingClasses;
