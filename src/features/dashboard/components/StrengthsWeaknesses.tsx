import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import type { RadialProgressProps, ChartData } from "../types/strengthsWeaknesses";
import { useTheme } from "@rankup/shared-ui";

// --- Helper Component ---
const RadialProgress = ({
  value,
  label,
  color,
  remainingColor,
}: RadialProgressProps) => {
  const data: ChartData[] = [
    { name: "Completed", value: value },
    { name: "Remaining", value: 100 - value },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-12 w-12">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={14}
              outerRadius={20}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
              cornerRadius={8}
            >
              <Cell key="completed" fill={color} />
              <Cell key="remaining" fill={remainingColor} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <span className="text-xs font-medium text-[#514BF2]">{label}</span>
    </div>
  );
};

// --- Main Component ---
const StrengthsWeaknesses = () => {
  const { theme } = useTheme();
  return (
    <div className="flex h-36 flex-col justify-between rounded-2xl p-4 md:h-40 lg:h-44"
      style={{ backgroundColor: theme.colors.bg.surface.primary , color: theme.colors.text.primary}}>
      <h3 className="text-sm font-bold">Strengths & Weaknesses Heatmap</h3>

      <div className="flex items-center justify-between px-6">
        {/* Low - Gray/Light */}
        <RadialProgress
          value={20}
          label="Algebra"
          color="#D9D9D9"
          remainingColor="#D9D9D980"
        />

        {/* Medium - Light Blue */}
        <RadialProgress
          value={70}
          label="Fractions"
          color="#A1AEF2"
          remainingColor="#A1AEF226"
        />

        {/* High - Dark Blue */}
        <RadialProgress
          value={85}
          label="Force & Motion"
          color="#514CF1"
          remainingColor="#DFE0FC"
        />
      </div>

      <div className="flex justify-center gap-4 text-xs text-[#514BF2]">
        <div className="flex items-center gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-[#D9D9D9]"></div> Low
        </div>
        <div className="flex items-center gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-[#A1AEF2]"></div> Medium
        </div>
        <div className="flex items-center gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-[#514CF1]"></div> High
        </div>
      </div>
    </div>
  );
};

export default StrengthsWeaknesses;