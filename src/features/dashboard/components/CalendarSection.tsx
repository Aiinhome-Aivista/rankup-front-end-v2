import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Types ---
interface CalendarDate {
  day: number;
  type: "selected-blue" | "active-red" | ""; // Restrict to known style types
}

// --- Data ---
// December 2025 Layout (Approximate based on previous code)
const days: string[] = ["M", "T", "W", "T", "F", "S", "S"];

const dates: CalendarDate[] = [
  { day: 1, type: "" },
  { day: 2, type: "" },
  { day: 3, type: "" },
  { day: 4, type: "" },
  { day: 5, type: "" },
  { day: 6, type: "" },
  { day: 7, type: "active-red" },
  { day: 8, type: "" },
  { day: 9, type: "" },
  { day: 10, type: "" },
  { day: 11, type: "selected-blue" },
  { day: 12, type: "" },
  { day: 13, type: "" },
  { day: 14, type: "active-red" },
  { day: 15, type: "" },
  { day: 16, type: "" },
  { day: 17, type: "" },
  { day: 18, type: "" },
  { day: 19, type: "" },
  { day: 20, type: "" },
  { day: 21, type: "active-red" },
  { day: 22, type: "" },
  { day: 23, type: "" },
  { day: 24, type: "" },
  { day: 25, type: "" },
  { day: 26, type: "" },
  { day: 27, type: "" },
  { day: 28, type: "active-red" },
  { day: 29, type: "" },
  { day: 30, type: "" },
  { day: 31, type: "" },
];

const CalendarSection = () => {
  return (
    <div className="flex h-full flex-col rounded-3xl p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#514BF2]">December 2025</h3>
        <div className="flex gap-2">
          <ChevronLeft
            size={16}
            className="cursor-pointer text-[#A2AEF2] hover:text-[#514BF2]"
          />
          <ChevronRight
            size={16}
            className="cursor-pointer text-[#A2AEF2] hover:text-[#514BF2]"
          />
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-y-4 text-center">
        {/* Days Header (M, T, W...) */}
        {days.map((d, i) => (
          <div
            key={i}
            className={`text-xs font-semibold ${
              i === 6 ? "text-red-400" : "text-[#A2AEF2]"
            }`}
          >
            {d}
          </div>
        ))}

        {/* Dates */}
        {dates.map((date, i) => (
          <div key={i} className="flex h-8 items-center justify-center">
            <div
              className={`
                flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-xs font-medium transition-colors
                ${
                  date.type === "selected-blue"
                    ? "bg-[#514BF2] text-white shadow-md"
                    : ""
                }
                ${
                  date.type === "active-red"
                    ? "bg-red-50 text-red-500"
                    : ""
                }
                ${
                  !date.type ? "text-[#A2AEF2] hover:bg-gray-50" : ""
                }
              `}
            >
              {date.day}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarSection;