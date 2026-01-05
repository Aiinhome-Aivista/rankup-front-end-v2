

const AttendingAssesmentFooter = () => {
  return (
    <footer className="h-[70px] bg-[#514CF1] text-white px-6 flex items-center justify-between fixed bottom-0 left-0 right-0 z-10 font-[Inter]">
      {/* Left: Progress */}
      <div className="w-1/3 flex items-center gap-4">
        <span className="text-sm font-medium">Progress</span>
        <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full w-[16%] bg-white rounded-full" />
        </div>
        <span className="text-sm font-bold">16%</span>
      </div>

      {/* Center: Stats */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#4CAF50] rounded-sm" />
          <span className="text-sm font-medium">4 Answered</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#FFC107] rounded-sm" />
          <span className="text-sm font-medium">1 Reviews</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#E0E0E0] rounded-sm" />
          <span className="text-sm font-medium">9 Remaining</span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        <button className="px-5 py-2 bg-white text-[#514CF1] rounded-full text-sm font-bold hover:bg-gray-100 transition-colors cursor-pointer">
          Clear
        </button>
        <button className="px-5 py-2 bg-[#FFF4E5] text-[#FF9800] border border-[#FF9800] rounded-full text-sm font-bold hover:bg-[#ffeccf] transition-colors cursor-pointer">
          Mark for Review
        </button>
        <button className="px-5 py-2 bg-white text-[#514CF1] rounded-full text-sm font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer">
          Save & Next
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </button>
      </div>
    </footer>
  );
};

export default AttendingAssesmentFooter;
