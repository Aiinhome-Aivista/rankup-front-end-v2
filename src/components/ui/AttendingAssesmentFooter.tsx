interface AttendingAssesmentFooterProps {
  stats: {
    answered: number;
    reviews: number;
    remaining: number;
    progress: number;
  };
  actions: {
    onClear: () => void;
    onMarkForReview: () => void;
    onSaveNext: () => void;
  };
}

const AttendingAssesmentFooter = ({
  stats,
  actions,
}: AttendingAssesmentFooterProps) => {
  return (
    <footer className="min-h-[70px] h-auto lg:h-[70px] bg-[#514CF1] text-white px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between fixed bottom-0 left-0 right-0 z-10 font-[Inter] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] py-4 lg:py-0 gap-4 lg:gap-0">
      {/* Left: Progress */}
      <div className="w-full lg:w-[32%] flex flex-col gap-1.5 lg:transform lg:translate-y-1 order-1 lg:order-none">
        <div className="flex justify-between items-end px-0.5">
          <span className="text-xs font-medium opacity-90">Progress</span>
          <span className="text-xs font-bold">
            {Math.round(stats.progress)}%
          </span>
        </div>
        <div className="w-full h-1.5 bg-[#FFFFFF33] rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300 ease-out"
            style={{ width: `${stats.progress}%` }}
          />
        </div>
      </div>

      {/* Center: Stats */}
      <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-8 w-full lg:w-auto ml-0 order-2 lg:order-none">
        <div className="flex items-center gap-2.5">
          <div className="w-3.5 h-3.5 bg-[#4CAF50] rounded-[2px]" />
          <span className="text-sm font-semibold">
            {stats.answered} Answered
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-3.5 h-3.5 bg-[#D97706] rounded-[2px]" />
          <span className="text-sm font-semibold">{stats.reviews} Reviews</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-3.5 h-3.5 bg-[#E5E7EB] rounded-[2px]" />
          <span className="text-sm font-semibold">
            {stats.remaining} Remaining
          </span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center justify-center lg:justify-end gap-2 lg:gap-4 w-full lg:w-auto flex-wrap order-3 lg:order-none">
        <button
          onClick={actions.onClear}
          className="h-10 px-6 bg-white text-[#514CF1] rounded-full text-sm font-bold hover:bg-white/90 transition-colors shadow-sm cursor-pointer flex-1 lg:flex-none"
        >
          Clear
        </button>
        <button
          onClick={actions.onMarkForReview}
          className="h-10 px-6 bg-[#FFFFFF] text-[#D97706] border border-[#D97706] rounded-full text-sm font-bold hover:bg-[#fff7ed] transition-colors shadow-sm cursor-pointer flex-1 lg:flex-none"
        >
          Mark for Review
        </button>
        <button
          onClick={actions.onSaveNext}
          className="h-10 pl-6 pr-5 bg-white text-[#514CF1] rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-colors shadow-sm cursor-pointer flex-1 lg:flex-none"
        >
          Save & Next
          <span className="material-symbols-outlined text-[20px] font-bold">
            arrow_forward
          </span>
        </button>
      </div>
    </footer>
  );
};

export default AttendingAssesmentFooter;
