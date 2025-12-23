import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Types ---
interface CustomIconProps {
  className?: string;
  size?: number;
}

interface ClassSession {
  id: string;
  time: string;
  subject: string;
  active: boolean;
}

// --- Icons (Custom SVGs preserved for exact design) ---
const SunIcon = ({ className, size = 16 }: CustomIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.41-1.41zm1.41-12.37c-.39-.39-1.02-.39-1.41 0l-1.41 1.41c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.41-1.41c.39-.39.39-1.02 0-1.41z" />
  </svg>
);

const MoonIcon = ({ className, size = 16 }: CustomIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
  </svg>
);

// --- Main Component ---
const UpcomingClasses = () => {
  const classes: ClassSession[] = [
    { id: "7A", time: "10:00", subject: "Mathematics", active: true },
    { id: "8B", time: "12:30", subject: "Science", active: false },
    { id: "6C", time: "14:00", subject: "Physics", active: false },
  ];

  return (
    <div className="relative flex h-36 w-full flex-col justify-between overflow-hidden rounded-2xl bg-[#514CF1] p-4 text-white md:h-40 lg:h-44">
      {/* Header */}
      <div className="z-10 flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold">Upcoming Classes | Today</h3>
        <div className="flex gap-2">
          <ChevronLeft
            size={20}
            className="cursor-pointer opacity-80 hover:opacity-90"
          />
          <ChevronRight
            size={20}
            className="cursor-pointer opacity-80 hover:opacity-90"
          />
        </div>
      </div>

      {/* Content - Timeline */}
      <div className="z-10 flex flex-1 items-center justify-between px-2">
        <SunIcon className="opacity-50" size={16} />

        {classes.map((cls, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-2 transition-all duration-300 ${
              cls.active ? "scale-110" : "opacity-60 scale-90"
            }`}
          >
            <div
              className={`flex h-12 w-12 flex-col items-center justify-center rounded-2xl backdrop-blur-sm ${
                cls.active
                  ? "border-2 border-white/30 bg-white/20 shadow-lg"
                  : "border border-white/10 bg-white/5"
              }`}
            >
              <span className="text-base font-bold">{cls.id}</span>
              <span className="text-[8px] font-medium">{cls.time}</span>
              <span className="text-[7px] uppercase tracking-wide opacity-80">
                {cls.subject}
              </span>
            </div>
          </div>
        ))}

        <MoonIcon className="opacity-50" size={16} />
      </div>

      {/* Bottom Progress/Time indicator */}
      <div className="z-10 mt-4 flex items-center justify-center">
        <div className="rounded-full border border-white/10 bg-white/20 px-2 py-0.5 text-xs font-medium backdrop-blur-md">
          10:00
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-purple-500 opacity-50 blur-[30px]"></div>
      <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-blue-400 opacity-30 blur-[30px]"></div>
    </div>
  );
};

export default UpcomingClasses;