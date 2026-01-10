import { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  Dot,
} from "recharts";

const data = [
  { quarter: "Q1", performance: 60, average: 25 },
  { quarter: "", performance: 65, average: 28 },
  { quarter: "", performance: 45, average: 30 },
  { quarter: "", performance: 50, average: 32 },
  { quarter: "", performance: 75, average: 35 },
  { quarter: "", performance: 78, average: 30 },
  { quarter: "Q3", performance: 88.5, average: 25 },
  { quarter: "", performance: 70, average: 20 },
  { quarter: "", performance: 10, average: 18 },
  { quarter: "", performance: 15, average: 20 },
  { quarter: "Q4", performance: 20, average: 22 },
  { quarter: "", performance: 18, average: 15 },
  { quarter: "", performance: 12, average: 10 },
  { quarter: "", performance: 8, average: 8 },
  { quarter: "", performance: 35, average: 12 },
  { quarter: "", performance: 45, average: 18 },
  { quarter: "", performance: 75, average: 35 },
  { quarter: "", performance: 78, average: 42 },
  { quarter: "Q6", performance: 85, average: 50 },
];

const StudentPerformanceChart = () => {
  const [timeframe, setTimeframe] = useState<"daily" | "monthly" | "yearly">(
    "monthly"
  );

  // Custom dot component for the peak indicator
  const CustomDot = (props: any) => {
    const { cx, cy, payload } = props;
    if (payload.quarter === "Q3") {
      return (
        <>
          <circle
            cx={cx}
            cy={cy}
            r={6}
            fill="#514BF2"
            stroke="white"
            strokeWidth={2}
          />
          <foreignObject x={cx - 40} y={cy - 60} width={80} height={50}>
            <div className="flex flex-col items-center">
              <div className="bg-white px-3 py-1.5 rounded-lg shadow-md border border-gray-100">
                <p className="text-lg font-bold text-[#514BF2] leading-none">
                  88.5%
                </p>
                <p className="text-[10px] text-gray-600 leading-none mt-0.5">
                  Average
                </p>
              </div>
            </div>
          </foreignObject>
        </>
      );
    }
    return null;
  };

  return (
    <div className="rounded-3xl p-6 bg-[#514CF105] border border-[#514CF10D]">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-base font-semibold text-[#514BF2]">
            Student Performance Analytics
          </h3>
          <p className="text-xs text-gray-500">
            Track academic progress and average score trends
          </p>
        </div>

        <div
          className="flex bg-gray-50 rounded-lg"
          style={{ boxShadow: "0px 4px 4px 0px #00000005" }}
        >
          <button
            onClick={() => setTimeframe("daily")}
            className={`px-6 py-2 text-sm cursor-pointer transition-all ${
              timeframe === "daily"
                ? "text-[#514BF2] font-semibold"
                : "text-gray-300 font-normal hover:text-gray-400 bg-white"
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setTimeframe("monthly")}
            className={`px-6 py-2 text-sm cursor-pointer transition-all ${
              timeframe === "monthly"
                ? "text-[#514BF2] font-semibold "
                : "text-gray-300 font-normal hover:text-gray-400 bg-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setTimeframe("yearly")}
            className={`px-6 py-2 text-sm cursor-pointer transition-all ${
              timeframe === "yearly"
                ? "text-[#514BF2] font-semibold"
                : "text-gray-300 font-normal hover:text-gray-400 bg-white"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="h-90 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 60, right: 30, left: 10, bottom: 10 }}
          >
            <defs>
              <linearGradient id="colorPerformance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#514BF2" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#514BF2" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="colorAverage" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#B8C1F5" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#B8C1F5" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="0" stroke="transparent" />
            <XAxis
              dataKey="quarter"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#1F2937", fontSize: 13, fontWeight: 500 }}
              dy={10}
            />
            <YAxis
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              axisLine={{ stroke: "#514BF2", strokeWidth: 3 }}
              tickLine={{ stroke: "#514BF2", strokeWidth: 2 }}
              tick={{ fill: "#9CA3AF", fontSize: 11 }}
              tickFormatter={(value) => `${value}%`}
              width={45}
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
              type="natural"
              dataKey="average"
              stroke="#B8C1F5"
              strokeWidth={2.5}
              fill="url(#colorAverage)"
              dot={false}
            />
            <Area
              type="natural"
              dataKey="performance"
              stroke="#514BF2"
              strokeWidth={3}
              fill="url(#colorPerformance)"
              dot={<CustomDot />}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StudentPerformanceChart;
