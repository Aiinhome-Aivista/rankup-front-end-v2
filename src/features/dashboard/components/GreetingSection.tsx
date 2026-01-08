import { useState, useEffect } from "react";
import { useAuth } from "@/features/auth/hooks/useAuth"; // To get the real user name

import type { GreetingStats } from "../types/greeting";

// Asset Imports (Ensure these exist in src/assets)
import yogaBg from "@/assets/yoga-bg.svg";
import yoga from "@/assets/yoga.svg";

const GreetingSection = () => {
  const { user } = useAuth(); // Get dynamic user data
  const [currentTime, setCurrentTime] = useState(new Date());

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Helper functions typed for Date object
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  // Determine greeting based on time of day
  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const stats: GreetingStats = {
    classes: 3,
    reviews: 12
  };

  return (
    <div className="flex items-end justify-between">
      {/* ... (left side remains same) */}
      <div className="flex items-center">

        {/* Illustration Container */}
        <div className="relative flex h-32 w-32 items-center justify-center">
          {/* Background Cloud */}
          <img
            src={yogaBg}
            alt="Background Pattern"
            className="absolute inset-0 h-full w-full scale-110 object-contain"
          />

          {/* Foreground Character */}
          <img
            src={yoga}
            alt="Yoga Character"
            className="z-10 absolute inset-0 h-full w-full -translate-x-2 translate-y-1 scale-50 object-contain"
          />
        </div>

        {/* Text Area */}
        <div className="-translate-x-2 flex flex-col gap-1 text-start">
          <h2 className="text-lg font-bold text-[#A1AEF2B2]">
            Hi, {user?.full_name || "Dr. Anna"}
          </h2>
          <h1 className="text-5xl font-bold tracking-tight text-[#A1AEF2B2]">
            {getGreeting()}
          </h1>
        </div>
      </div>

      {/* --- Right: Date & Time & Stats --- */}
      <div className="flex items-center gap-2">
        {/* Time Widget */}
        <div className="rounded-2xl bg-[#514CF105] px-2 py-1 text-start">
          <p className="mb-0 text-lg font-medium text-[#A2AEF2]">
            {formatDate(currentTime)}
          </p>
          <p className="text-5xl font-bold leading-none text-[#A2AEF2]">
            {formatTime(currentTime)}
          </p>
        </div>

        {/* Mini Stats (Classes/Review) */}
        <div className="flex gap-8">
          <div className="items-between flex flex-col gap-1 rounded-2xl bg-[#514CF105] px-4 py-1 text-center">
            <p className="text-4xl font-bold text-[#514BF2]">{stats.classes.toString().padStart(2, '0')}</p>
            <p className="text-sm font-medium text-[#514BF2]">Classes</p>
          </div>
          <div className="items-between flex flex-col gap-1 rounded-2xl bg-[#514CF105] px-4 py-1 text-center">
            <p className="text-4xl font-bold text-[#514BF2]">{stats.reviews.toString().padStart(2, '0')}</p>
            <p className="text-sm font-medium text-[#514BF2]">Review</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingSection;