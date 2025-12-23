const StudentPerformance = () => {
  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#514BF2] text-white">
          <span className="text-sm">🤖</span>
        </div>
        <h3 className="text-sm font-semibold text-[#514BF2]">
          Student Performance
        </h3>
      </div>

      {/* Big Score Stats */}
      <div>
        <div className="text-4xl font-bold text-[#514BF2]">76%</div>
        <div className="text-xs font-medium text-[#514BF2]">Average Score</div>
        <div className="text-[10px] text-gray-400">This Week</div>
      </div>

      {/* Details List */}
      <div className="space-y-4">
        <div>
          <span className="mb-1 block text-sm font-semibold text-[#514BF2]">
            Strength
          </span>
          <p className="text-sm text-gray-500">Algebra, Light</p>
        </div>
        <div>
          <span className="mb-1 block text-sm font-semibold text-[#514BF2]">
            Weak Areas
          </span>
          <p className="text-sm text-gray-500">Fractions</p>
        </div>
      </div>
    </div>
  );
};

export default StudentPerformance;