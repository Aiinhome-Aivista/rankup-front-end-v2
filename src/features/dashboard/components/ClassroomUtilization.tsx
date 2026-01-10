import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Occupied", value: 30, color: "#4F46E5" },
  { name: "Maintenance", value: 55, color: "#3730A3" },
];

const legendData = [
  { name: "Occupied", color: "#4F46E5" },
  { name: "Vacant", color: "#A5B4FC" },
  { name: "Maintenance", color: "#D1D5DB" },
];

const ClassroomUtilization = () => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100">
      <h3 className="text-sm font-semibold text-[#514BF2] mb-1">
        Classroom Utilization
      </h3>
      <p className="text-xs text-gray-400 mb-6">
        Average academic performance comparison by class
      </p>

      <div className="flex items-center justify-center mb-8">
        <div className="relative w-48 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              {/* Background light purple circle */}
              <Pie
                data={[{ value: 100 }]}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={75}
                dataKey="value"
                stroke="none"
                fill="#A5B4FC"
              />
              {/* Actual data segments */}
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={75}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={450}
                stroke="none"
                cornerRadius={20}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke="none"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6">
        {legendData.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-xs text-gray-600">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassroomUtilization;
