const FinancialSummary = () => {
  const collectedPercentage = 72;
  const outstandingAmount = "$12k";

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100">
      <h3 className="text-sm font-semibold text-[#514BF2] mb-6">
        Financial Summary
      </h3>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-2xl font-bold text-[#514BF2]">
            {outstandingAmount}
          </p>
          <p className="text-sm font-medium text-gray-600">
            {collectedPercentage}% Collected
          </p>
        </div>
        <p className="text-xs text-gray-500 mb-3">Outstanding</p>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-[#514BF2] to-[#7B77F5] rounded-full transition-all duration-500"
            style={{ width: `${collectedPercentage}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-[#514CF105] rounded-lg p-3">
          <p className="text-xs text-gray-600 mb-1">Total Revenue</p>
          <p className="text-lg font-bold text-[#514BF2]">$42k</p>
        </div>
        <div className="bg-[#514CF105] rounded-lg p-3">
          <p className="text-xs text-gray-600 mb-1">Pending</p>
          <p className="text-lg font-bold text-orange-500">$12k</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;
