import { useNavigate } from "react-router-dom";

const AttendingAssesmentHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="h-[70px] bg-white border-b border-[#E0E0E0] px-6 flex items-center justify-between sticky top-0 z-10 font-[Inter]">
      {/* Left: Logo/Title */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-[#514CF1] rounded-full flex items-center justify-center text-white font-bold text-xl">
          R
        </div>
        <div>
          <h1 className="text-[#514CF1] font-bold text-lg leading-tight">
            Advance Mathematics: Calculus I
          </h1>
          <p className="text-[#888888] text-xs">
            Mid -Term Assessment <span className="mx-1">&rarr;</span> Section B
          </p>
        </div>
      </div>

      {/* Center: Timer */}
      <div className="bg-[#514CF11A] px-4 py-2 rounded-full flex items-center gap-2">
        <span className="material-symbols-outlined text-[#514CF1] text-lg">
          timer
        </span>
        <span className="text-[#514CF1] font-bold text-sm">
          00<span className="text-xs font-normal">hr</span> : 45
          <span className="text-xs font-normal">min</span> : 23
          <span className="text-xs font-normal">sec</span>
        </span>
      </div>

      {/* Right: Status & Submit */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-[#4CAF501A] px-3 py-1.5 rounded-full">
          <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse" />
          <span className="text-[#4CAF50] text-xs font-semibold">
            Attempt in Progress
          </span>
        </div>
        <button className="bg-[#514CF1] hover:bg-[#403BC0] text-white px-6 py-2 rounded-full font-semibold text-sm transition-colors cursor-pointer" onClick={() => navigate(-1)}>
            Submit Test
        </button>
      </div>
    </header>
  );
};

export default AttendingAssesmentHeader;
