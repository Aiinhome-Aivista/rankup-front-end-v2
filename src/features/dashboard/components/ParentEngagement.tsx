const ParentEngagement = () => {
  const engagementPercentage = 78;

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100">
      <h3 className="text-base font-semibold text-[#514BF2] mb-2">
        Parent Engagement
      </h3>

      <div className="flex items-center gap-6">
        {/* Circular Progress */}
        <div className="relative w-20 h-20 shrink-0">
          {/* Background Circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="34"
              stroke="#E5E7EB"
              strokeWidth="10"
              fill="none"
            />
            {/* Progress Circle */}
            <circle
              cx="40"
              cy="40"
              r="34"
              stroke="#514BF2"
              strokeWidth="10"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 34}`}
              strokeDashoffset={`${
                2 * Math.PI * 34 * (1 - engagementPercentage / 100)
              }`}
              strokeLinecap="round"
            />
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xl font-bold text-[#514BF2]">
              {engagementPercentage}%
            </p>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold text-[#514BF2] mb-1">
            High Engagement
          </h4>
          <p className="text-sm text-[#514BF2]">+4% from last month</p>
        </div>
      </div>
    </div>
  );
};

export default ParentEngagement;
