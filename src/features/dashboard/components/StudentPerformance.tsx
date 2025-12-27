import type { StudentPerformanceStats } from "../types/studentPerformance";
import { Face, useTheme} from "@rankup/shared-ui";



const stats: StudentPerformanceStats = {
  averageScore: "76%",
  period: "This Week",
  strengths: "Algebra, Light",
  weaknesses: "Fractions",
};

const StudentPerformance = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col rounded-3xl p-6"
      style={{ backgroundColor: theme.colors.bg.card }}>
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex">
          <Face
            width={23}
            height={23}
            
          />
        </div>
        <h3 className="text-sm font-bold"
        style={{ color: theme.colors.text.default }}>
          Student Performance
        </h3>
      </div>

      {/* Big Score Stats */}
      <div style={{ color: theme.colors.text.default }}>
        <div className="text-xl font-light mt-3">{stats.averageScore}</div>
        <div className="text-sm font-bold">Average Score</div>
        <div className="text-xs">{stats.period}</div>
      </div>

      {/* Details List */}
      <div className="mt-8 grid grid-cols-[auto_1fr] items-center gap-x-8 gap-y-6"
      style={{ color: theme.colors.text.default }}>
        <span className="text-sm font-bold">
          Strength
        </span>
        <p className="text-xl font-light">{stats.strengths}</p>
        <span className="text-sm font-bold"
        >
          Weak Areas
        </span>
        <p className="text-xl font-light">{stats.weaknesses}</p>
      </div>
    </div>
  );
};

export default StudentPerformance;