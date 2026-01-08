import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Occupied", value: 60, color: "#514BF2" },
  { name: "Vacant", value: 30, color: "#A1AEF2" },
  { name: "Maintenance", value: 10, color: "#E5E7EB" },
];

const ClassroomUtilization = () => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100">
      <h3 className="text-sm font-semibold text-[#514BF2] mb-2">
        Classroom Utilization
      </h3>
      <p className="text-xs text-gray-500 mb-6">
        Average students performance compared by class
      </p>

      <div className="flex items-center justify-center mb-6">
        <div className="relative w-48 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#514BF2]">75%</p>
              <p className="text-xs text-gray-500">In Use</p>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-700">{item.name}</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassroomUtilization;
