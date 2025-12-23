import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";

// --- Types ---
interface PerformanceData {
  name: string;
  value: number;
  active?: boolean;
}

// --- Data ---
const data: PerformanceData[] = [
  { name: "M", value: 40 },
  { name: "T", value: 55 },
  { name: "W", value: 15 },
  { name: "T", value: 65, active: true },
  { name: "F", value: 35 },
  { name: "S", value: 50 },
  { name: "S", value: 80 },
];

const ClassPerformance = () => {
  return (
    <div className="flex h-[280px] flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      <h3 className="mb-2 text-sm font-semibold text-[#514BF2]">
        Class Performance
      </h3>

      <div className="-ml-4 h-full w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={32}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A0AEC0", fontSize: 10 }}
              dy={10}
            />
            {/* Domain fixed to 0-100 for percentage-like visuals */}
            <YAxis hide domain={[0, 100]} />
            
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
              cursor={{ fill: "transparent" }}
            />
            
            <Bar dataKey="value" radius={[20, 20, 20, 20]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.active ? "#514BF2" : "#F3F4F6"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ClassPerformance;