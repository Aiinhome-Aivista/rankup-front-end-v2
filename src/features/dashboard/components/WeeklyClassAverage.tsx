import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// --- Types ---
interface AverageData {
  name: string;
  value: number;
}

// --- Data ---
const data: AverageData[] = [
  { name: "M", value: 40 },
  { name: "T", value: 65 },
  { name: "W", value: 35 },
  { name: "T", value: 55 },
  { name: "F", value: 45 },
  { name: "S", value: 75 },
];

const WeeklyClassAverage = () => {
  return (
    <div className="flex h-36 flex-col justify-between rounded-3xl bg-[#514CF105] p-4 text-[#514BF2] md:h-40 lg:h-44">
      <h3 className="text-sm font-bold">Weekly Class Average</h3>

      <div className="h-full w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#514CF1" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#514CF1" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A1AEF2", fontSize: 10 }}
              dy={10}
            />
            <YAxis
              domain={[0, 100]}
              ticks={[0, 50, 100]}
              tickFormatter={(value: number) => `${value}%`}
              axisLine={{ stroke: "#514CF1" }}
              tickLine={{ stroke: "#514CF1", width: 4 }}
              tick={{ fill: "#A1AEF2", fontSize: 10 }}
              width={30}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
              cursor={{
                stroke: "#514CF1",
                strokeWidth: 1,
                strokeDasharray: "3 3",
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#514BF2"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyClassAverage;