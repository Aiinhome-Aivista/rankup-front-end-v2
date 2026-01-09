import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import RVector from "@/assets/R-Vector.svg";
import { useTheme } from "@rankup/shared-ui";

const AttendingAssesmentHeader = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  // Initial time: 45 minutes and 23 seconds = 2723 seconds
  // Ideally this should come from props or context if it needs to persist or sync with server
  const [timeLeft, setTimeLeft] = useState(45 * 60 + 23);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return {
      hours: hrs.toString().padStart(2, "0"),
      minutes: mins.toString().padStart(2, "0"),
      seconds: secs.toString().padStart(2, "0"),
    };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <header className="h-[70px] px-8 flex items-center justify-between sticky top-0 z-10">
      {/* Left: Logo/Title */}
      <div className="flex items-center gap-2">
        <div className="w-13 h-13 flex items-center justify-center">
          <img
            src={RVector}
            alt="Rank Up Logo"
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <h1
            style={{ color: theme.colors.text.primary }}
            className="font-bold text-xl leading-tight"
          >
            Advance Mathematics: Calculus I
          </h1>
          <p
            style={{ color: theme.colors.text.subtle }}
            className="text-sm pt-0.5"
          >
            Mid -Term Assessment <span className="mx-1">&rarr;</span> Section B
          </p>
        </div>
      </div>

      {/* Center: Timer */}
      <div
        style={{
          backgroundColor: theme.colors.bg.surface.brandSecondary,
          color: theme.colors.text.primary,
        }}
        className="p-2.5 rounded-full flex items-center gap-1"
      >
        <span
          style={{ color: theme.colors.text.primary }}
          className="material-symbols-outlined text-xl"
        >
          timer
        </span>
        <div className="font-bold text-base flex items-baseline">
          {hours}
          <span className="text-sm font-medium">
            hr<span className="px-1">:</span>
          </span>
          {minutes}
          <span className="text-sm font-medium">
            min<span className="px-1">:</span>
          </span>
          {seconds}
          <span className="text-sm font-medium">sec</span>
        </div>
      </div>

      {/* Right: Status & Submit */}
      <div className="flex items-center gap-6">
        <div
          style={{ backgroundColor: theme.colors.bg?.button?.secondary }}
          className="flex items-center gap-2 bg-[#4CAF501A] px-3 py-2.5 rounded-full"
        >
          <div
            style={{ backgroundColor: theme.colors.text?.tertiary }}
            className="w-2 h-2 rounded-full"
          />
          <span
            style={{ color: theme.colors.text?.tertiary }}
            className="text-sm font-bold"
          >
            Attempt in Progress
          </span>
        </div>
        <button
          style={{
            color: theme.colors.text?.onPrimary,
            backgroundColor: theme.colors.bg?.sidebar,
          }}
          className="bg-[#514CF1] text-white px-3 py-2.5 rounded-full font-bold text-sm cursor-pointer"
          onClick={() => navigate(-1)}
        >
          Submit Test
        </button>
      </div>
    </header>
  );
};

export default AttendingAssesmentHeader;
