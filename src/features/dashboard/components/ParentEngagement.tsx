const ParentEngagement = () => {
  const engagementPercentage = 75;

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100">
      <h3 className="text-sm font-semibold text-[#514BF2] mb-6">
        Parent Engagement
      </h3>

      <div className="flex items-center justify-center mb-4">
        <div className="relative w-32 h-32">
          {/* Background Circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#E5E7EB"
              strokeWidth="12"
              fill="none"
            />
            {/* Progress Circle */}
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#514BF2"
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 56}`}
              strokeDashoffset={`${
                2 * Math.PI * 56 * (1 - engagementPercentage / 100)
              }`}
              strokeLinecap="round"
            />
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#514BF2]">
                {engagementPercentage}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm font-semibold text-[#514BF2]">High Engagement</p>
        <p className="text-xs text-gray-500">This year till now</p>
      </div>
    </div>
  );
};

export default ParentEngagement;
