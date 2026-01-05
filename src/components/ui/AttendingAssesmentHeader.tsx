import { useNavigate } from "react-router-dom";
import RVector from "@/assets/R-Vector.svg";

const AttendingAssesmentHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="h-[80px] bg-white px-8 flex items-center justify-between sticky top-0 z-10 font-sans shadow-sm">
      {/* Left: Logo/Title */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center">
            <img src={RVector} alt="Rank Up Logo" className="h-full w-full object-contain" />
        </div>
        <div>
          <h1 className="text-[#514CF1] font-bold text-xl leading-tight">
            Advance Mathematics: Calculus I
          </h1>
          <p className="text-[#A0A0A0] text-sm mt-0.5 font-medium">
            Mid -Term Assessment <span className="mx-1 text-[#A0A0A0]">&rarr;</span> Section B
          </p>
        </div>
      </div>

      {/* Center: Timer */}
      <div className="bg-[#514CF10D] px-5 py-2.5 rounded-full flex items-center gap-3">
        <span className="material-symbols-outlined text-[#514CF1] text-xl">
          timer
        </span>
        <div className="text-[#514CF1] font-bold text-base flex items-baseline gap-1">
          00<span className="text-xs font-medium opacity-80">hr :</span>
          45<span className="text-xs font-medium opacity-80">min :</span>
          23<span className="text-xs font-medium opacity-80">sec</span>
        </div>
      </div>

      {/* Right: Status & Submit */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-[#4CAF501A] px-4 py-2 rounded-full">
          <div className="w-2 h-2 bg-[#4CAF50] rounded-full" />
          <span className="text-[#4CAF50] text-sm font-semibold">
            Attempt in Progress
          </span>
        </div>
        <button 
            className="bg-[#514CF1] hover:bg-[#403BC0] text-white px-8 py-2.5 rounded-full font-semibold text-sm transition-all shadow-[0_4px_14px_0_rgba(81,76,241,0.39)] cursor-pointer"
            onClick={() => navigate(-1)}
        >
            Submit Test
        </button>
      </div>
    </header>
  );
};

export default AttendingAssesmentHeader;
