import { useNavigate } from "react-router-dom";
import RVector from "@/assets/R-Vector.svg";

const AttendingAssesmentHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="h-[70px] bg-white px-8 flex items-center justify-between sticky top-0 z-10">
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
          <h1 className="text-[#514CF1] font-bold text-xl leading-tight">
            Advance Mathematics: Calculus I
          </h1>
          <p className="text-[#A0A0A0] text-sm pt-0.5">
            Mid -Term Assessment{" "}
            <span className="mx-1 text-[#A0A0A0]">&rarr;</span> Section B
          </p>
        </div>
      </div>

      {/* Center: Timer */}
      <div className="bg-[#514CF10D] p-2.5 rounded-full flex items-center gap-1">
        <span className="material-symbols-outlined text-[#514CF1] text-xl">
          timer
        </span>
        <div className="text-[#514CF1] font-bold text-base flex items-baseline">
          00
          <span className="text-sm font-medium">
            hr<span className="px-1">:</span>
          </span>
          45
          <span className="text-sm font-medium">
            min<span className="px-1">:</span>
          </span>
          23
          <span className="text-sm font-medium">sec</span>
        </div>
      </div>

      {/* Right: Status & Submit */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-[#4CAF501A] px-3 py-2.5 rounded-full">
          <div className="w-2 h-2 bg-[#4CAF50] rounded-full" />
          <span className="text-[#4CAF50] text-sm font-bold">
            Attempt in Progress
          </span>
        </div>
        <button
          className="bg-[#514CF1] hover:bg-[#403BC0] text-white px-3 py-2.5 rounded-full font-bold text-sm cursor-pointer"
          onClick={() => navigate(-1)}
        >
          Submit Test
        </button>
      </div>
    </header>
  );
};

export default AttendingAssesmentHeader;
