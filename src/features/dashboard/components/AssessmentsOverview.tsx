import { Eye, Edit2, Share2 } from "lucide-react";

import type { Assessment, AssessmentStatus } from "../types/assessments";
import { useTheme } from "@rankup/shared-ui";
import { useNavigate } from "react-router-dom";



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
    attempts: "--",
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


const AssessmentsOverview = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <div className="flex flex-1 flex-col rounded-3xl p-6"
      style={{ backgroundColor: theme.colors.bg.card }}>
      <h3 className="mb-6 text-sm font-bold"
        style={{ color: theme.colors.text.default }}>
        Assessments Overview
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="text-sm font-medium uppercase tracking-wider"
              style={{ color: theme.colors.text.default }}>
              <th className="pb-4 font-medium">Aessesment title</th>
              <th className="pb-4 font-medium">Class</th>
              <th className="pb-4 font-medium">Status</th>
              <th className="pb-4 text-center font-medium">Attempts</th>
              <th className="pb-4 text-right font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm font-medium"
            style={{ color: theme.colors.text.default }}>
            {assessments.map((item, index) => (
              <tr
                key={index}

              >
                <td>
                  {item.title}
                </td>
                <td>{item.class}</td>
                <td>
                  {item.status}

                </td>
                <td className="py-4 text-center">
                  {item.attempts}
                </td>
                <td className="flex justify-end py-4">
                  <button className="rounded-lg p-1.5 transition-colors hover:bg-[#F3F4FF] cursor-pointer"
                  >
                    {item.action === "view" && <Eye size={16} onClick={() => navigate("/teacher/dashboard/review-assessment")} />}
                    {item.action === "edit" && <Edit2 size={16} onClick={() => navigate("/student/attend-assessment/id")} />}
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