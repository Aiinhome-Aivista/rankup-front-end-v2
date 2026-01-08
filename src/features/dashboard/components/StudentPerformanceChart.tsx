import { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { quarter: "Q1", performance: 45, average: 35 },
  { quarter: "Q2", performance: 65, average: 50 },
  { quarter: "Q3", performance: 88.5, average: 70 },
  { quarter: "Q4", performance: 55, average: 45 },
  { quarter: "Q5", performance: 75, average: 60 },
  { quarter: "Q6", performance: 70, average: 55 },
];

const StudentPerformanceChart = () => {
  const [timeframe, setTimeframe] = useState<"daily" | "monthly" | "yearly">(
    "monthly"
  );

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-[#514BF2]">
            Student Performance Analytics
          </h3>
          <p className="text-xs text-gray-500">
            Track academic progress and average class trends
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setTimeframe("daily")}
            className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
              timeframe === "daily"
                ? "bg-[#514BF2] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setTimeframe("monthly")}
            className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
              timeframe === "monthly"
                ? "bg-[#514BF2] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setTimeframe("yearly")}
            className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
              timeframe === "yearly"
                ? "bg-[#514BF2] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPerformance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#514BF2" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#514BF2" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="colorAverage" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#A1AEF2" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#A1AEF2" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="quarter"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
            />
            <YAxis
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Area
              type="monotone"
              dataKey="average"
              stroke="#A1AEF2"
              strokeWidth={2}
              fill="url(#colorAverage)"
            />
            <Area
              type="monotone"
              dataKey="performance"
              stroke="#514BF2"
              strokeWidth={3}
              fill="url(#colorPerformance)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Peak Indicator */}
      <div className="mt-4 flex items-center justify-center">
        <div className="bg-[#514CF105] px-4 py-2 rounded-lg">
          <p className="text-xs text-gray-600">Peak Performance</p>
          <p className="text-lg font-bold text-[#514BF2]">88.5% Average</p>
        </div>
      </div>
    </div>
  );
};

export default StudentPerformanceChart;
