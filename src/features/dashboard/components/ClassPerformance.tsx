import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";

import type { PerformanceData } from "../types/classPerformance";
import { useTheme } from "@rankup/shared-ui";

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
  const { theme } = useTheme();
  return (
    <div className="flex h-[280px] flex-col rounded-3xl p-4"
    style={{ backgroundColor: theme.colors.bg.card }}>
      <h3 className="mb-2 text-sm font-bold"
       style={{ color: theme.colors.text.default }}>
        Class Performance
      </h3>

      <div className="w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={35}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A0AEC0", fontSize: 10 }}
             padding={{ left: 10 }}
            />
            {/* Domain fixed to 0-100 for percentage-like visuals */}
            <YAxis
              domain={[0, 100]}
              tickFormatter={(value: number) => `${value}%`}
              axisLine={{ stroke: "#514CF1" }}
              tickLine={{ stroke: "#514CF1", width: 3 }}
              tick={{ fill: "#A1AEF2", fontSize: 10 }}
              width={25}
             
            />

            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
              cursor={{ fill: "transparent" }}
            />

            <Bar dataKey="value" radius={[10, 10, 0, 0]}>
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