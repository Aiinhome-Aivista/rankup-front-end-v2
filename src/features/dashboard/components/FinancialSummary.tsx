const FinancialSummary = () => {
  const collectedPercentage = 72;
  const outstandingAmount = "$12.k";

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100">
      <h3 className="text-base font-semibold text-[#514BF2] mb-4">
        Financial Summary
      </h3>

      <div className="mb-3">
        <p className="text-4xl font-bold text-[#514BF2] mb-1">
          {outstandingAmount}
        </p>
        <p className="text-sm text-[#514BF2] mb-3">Outstanding</p>

        {/* Progress Bar */}
        <div className="relative w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#514BF2] rounded-full transition-all duration-500"
            style={{ width: `${collectedPercentage}%` }}
          />
        </div>

        <div className="flex justify-end mt-2">
          <p className="text-sm font-medium text-[#514BF2]">
            {collectedPercentage}% Collected
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;
