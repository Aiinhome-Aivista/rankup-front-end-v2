import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { class: "3-A", performance: 99, color: "#514BF2" },
  { class: "5-B", performance: 90, color: "#6B66F5" },
  { class: "7-A", performance: 87, color: "#8580F7" },
  { class: "10-A", performance: 93, color: "#514BF2" },
  { class: "10-B", performance: 85, color: "#9F9BF9" },
  { class: "10-C", performance: 78, color: "#B9B6FB" },
];

const ClassPerformanceChart = () => {
  const [classStatus, setClassStatus] = useState("all");
  const [subject, setSubject] = useState("all");

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-[#514BF2]">
            Class Performance Benchmarking
          </h3>
          <p className="text-xs text-gray-500">
            Average academic performance by class
          </p>
        </div>

        <div className="flex gap-2">
          <select
            value={classStatus}
            onChange={(e) => setClassStatus(e.target.value)}
            className="px-3 py-1 text-xs font-medium border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#514BF2]"
          >
            <option value="all">Class Status</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>

          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="px-3 py-1 text-xs font-medium border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#514BF2]"
          >
            <option value="all">Subject</option>
            <option value="math">Mathematics</option>
            <option value="science">Science</option>
            <option value="english">English</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="text-center">
          <p className="text-3xl font-bold text-[#514BF2]">142</p>
          <p className="text-xs text-gray-600">Class 10</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-[#514BF2]">102</p>
          <p className="text-xs text-gray-600">Class 9</p>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis
              type="category"
              dataKey="class"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12, fontWeight: 500 }}
              width={50}
            />
            <Bar dataKey="performance" radius={[0, 8, 8, 0]} barSize={24}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Performance Labels */}
      <div className="mt-4 space-y-2">
        {data.map((item) => (
          <div key={item.class} className="flex items-center justify-end">
            <span className="text-sm font-semibold text-[#514BF2]">
              {item.performance}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassPerformanceChart;
