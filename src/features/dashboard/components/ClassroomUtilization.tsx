import React from "react";

const SIZE = 220;
const STROKE = 32;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ClassroomUtilization({
  occupied = 55,
  vacant = 25,
  maintenance = 20,
}) {
  const total = occupied + vacant + maintenance;

  const occupiedOffset = 0;
  const vacantOffset = (occupied / total) * CIRCUMFERENCE;
  const maintenanceOffset = ((occupied + vacant) / total) * CIRCUMFERENCE;

  return (
    <div className="p-6 rounded-3xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)] flex flex-col items-center">
      <div className="text-left w-full mb-4">
        <h3 className="text-lg font-semibold text-indigo-600 m-0">
          Classroom Utilization
        </h3>
        <p className="text-[13px] text-gray-500 mt-1">
          Average academic performance comparison by class
        </p>
      </div>
      <svg width={SIZE} height={SIZE} className="my-3 mx-0">
        <g transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}>
          {/* Background ring */}
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke="#E5E7EB"
            strokeWidth={STROKE}
            fill="none"
          />

          {/* Occupied */}
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke="#4F46E5"
            strokeWidth={STROKE}
            fill="none"
            strokeDasharray={`${
              (occupied / total) * CIRCUMFERENCE
            } ${CIRCUMFERENCE}`}
            strokeDashoffset={-occupiedOffset}
            strokeLinecap="round"
            className="transition-[stroke-dasharray] duration-800 ease-in-out"
          />

          {/* Vacant */}
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke="#A5B4FC"
            strokeWidth={STROKE}
            fill="none"
            strokeDasharray={`${
              (vacant / total) * CIRCUMFERENCE
            } ${CIRCUMFERENCE}`}
            strokeDashoffset={-vacantOffset}
            strokeLinecap="round"
            className="transition-[stroke-dasharray] duration-800 ease-in-out"
          />

          {/* Maintenance */}
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke="#D1D5DB"
            strokeWidth={STROKE}
            fill="none"
            strokeDasharray={`${
              (maintenance / total) * CIRCUMFERENCE
            } ${CIRCUMFERENCE}`}
            strokeDashoffset={-maintenanceOffset}
            strokeLinecap="round"
            className="transition-[stroke-dasharray] duration-800 ease-in-out"
          />
        </g>
      </svg>
      <div className="flex justify-center gap-6">
        <LegendItem color="#4F46E5" label="Occupied" />
        <LegendItem color="#A5B4FC" label="Vacant" />
        <LegendItem color="#D1D5DB" label="Maintenance" />
      </div>
    </div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center text-[13px] text-gray-600">
      <span
        className="w-3 h-3 rounded-full mr-1.5"
        style={{ backgroundColor: color }}
      />
      <span>{label}</span>
    </div>
  );
}
