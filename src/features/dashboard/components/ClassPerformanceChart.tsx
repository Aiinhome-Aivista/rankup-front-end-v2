import { useState } from "react";

const data = [
  { class: "9-A", performance: 90 },
  { class: "9-B", performance: 80 },
  { class: "9-C", performance: 78 },
  { class: "10-A", performance: 82 },
  { class: "10-B", performance: 65 },
  { class: "10-C", performance: 78 },
];

const ClassPerformanceChart = () => {
  const [classStatus, setClassStatus] = useState("all");
  const [subject, setSubject] = useState("all");

  return (
    <div className="rounded-3xl p-6 bg-[#514CF105] border border-[#514CF10D]">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-base font-semibold text-[#514BF2]">
            Class Performance Benchmarking
          </h3>
          <p className="text-xs text-gray-500">
            Average academic performance comparison by class
          </p>
        </div>

        <div className="flex gap-3">
          <select
            value={classStatus}
            onChange={(e) => setClassStatus(e.target.value)}
            className="px-3 py-1.5 text-sm font-medium border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#514BF2] cursor-pointer"
          >
            <option value="all">Class Status</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>

          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="px-3 py-1.5 text-sm font-medium border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#514BF2] cursor-pointer"
          >
            <option value="all">Subject</option>
            <option value="math">Mathematics</option>
            <option value="science">Science</option>
            <option value="english">English</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-12 mb-8">
        <div className="text-left">
          <p className="text-4xl font-bold text-[#514BF2]">142</p>
          <p className="text-sm text-gray-600">Class 10</p>
        </div>
        <div className="text-left">
          <p className="text-4xl font-bold text-[#514BF2]">102</p>
          <p className="text-sm text-gray-600">Class 9</p>
        </div>
      </div>

      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.class} className="flex items-center gap-4">
            <div className="w-12 text-sm font-medium text-[#514BF2]">
              {item.class}
            </div>
            <div className="flex-1 bg-gray-100 rounded-lg h-8 relative overflow-hidden">
              <div
                className="h-full bg-[#514BF2] rounded-lg transition-all duration-500 ease-out"
                style={{ width: `${item.performance}%` }}
              />
            </div>
            <div className="w-12 text-right text-sm font-semibold text-[#514BF2]">
              {item.performance}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassPerformanceChart;
