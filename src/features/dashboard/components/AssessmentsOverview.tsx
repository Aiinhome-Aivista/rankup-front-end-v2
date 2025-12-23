import { Eye, Edit2, Share2 } from "lucide-react";

// --- Types ---
type AssessmentStatus = "Ongoing" | "Draft" | "Completed";
type AssessmentAction = "view" | "edit" | "share";

interface Assessment {
  title: string;
  class: string;
  status: AssessmentStatus;
  attempts: string;
  action: AssessmentAction;
}

// --- Data ---
const assessments: Assessment[] = [
  {
    title: "Mid Term Maths",
    class: "7A",
    status: "Ongoing",
    attempts: "28/35",
    action: "view",
  },
  {
    title: "Chapter 5 test",
    class: "8B",
    status: "Draft",
    attempts: "—",
    action: "edit",
  },
  {
    title: "Science Quiz",
    class: "6C",
    status: "Completed",
    attempts: "30/30",
    action: "share",
  },
];

// --- Helper for Status Styles ---
const getStatusStyles = (status: AssessmentStatus) => {
  switch (status) {
    case "Ongoing":
      return "bg-blue-50 text-blue-500";
    case "Draft":
      return "bg-gray-100 text-gray-400";
    case "Completed":
      return "bg-green-50 text-green-500";
    default:
      return "";
  }
};

const AssessmentsOverview = () => {
  return (
    <div className="flex flex-1 flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-sm font-semibold text-[#514BF2]">
        Assessments Overview
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="text-[10px] font-semibold uppercase tracking-wider text-[#A2AEF2]">
              <th className="pb-4 font-medium">Assessment Title</th>
              <th className="pb-4 font-medium">Class</th>
              <th className="pb-4 font-medium">Status</th>
              <th className="pb-4 text-center font-medium">Attempts</th>
              <th className="pb-4 text-right font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {assessments.map((item, index) => (
              <tr
                key={index}
                className="group border-b border-gray-50 transition-colors hover:bg-gray-50/50 last:border-none"
              >
                <td className="py-4 font-medium text-[#514BF2]">
                  {item.title}
                </td>
                <td className="py-4 text-gray-500">{item.class}</td>
                <td className="py-4">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusStyles(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-4 text-center text-gray-500">
                  {item.attempts}
                </td>
                <td className="flex justify-end py-4">
                  <button className="rounded-lg p-1.5 text-[#514BF2] transition-colors hover:bg-[#F3F4FF]">
                    {item.action === "view" && <Eye size={16} />}
                    {item.action === "edit" && <Edit2 size={16} />}
                    {item.action === "share" && <Share2 size={16} />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssessmentsOverview;