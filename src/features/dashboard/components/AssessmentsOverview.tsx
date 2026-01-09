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
    <div className="flex w-[600px] h-auto flex-col rounded-2xl p-4 md:h-58"
      style={{ backgroundColor: theme.colors.bg.surface.primary }}>
      <h3 className="mb-6 text-sm font-bold"
        style={{color: theme.colors.text.primary}}>
        Assessments Overview
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="text-sm font-medium uppercase tracking-wider"
              style={{color: theme.colors.text.primary}}>
              <th className="pb-2 font-medium">Assessment title</th>
              <th className="pb-2 font-medium">Class</th>
              <th className="pb-2 font-medium">Status</th>
              <th className="pb-2 text-center font-medium">Attempts</th>
              <th className="pb-2 text-right font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm font-medium rounded-2xl"
            style={{color: theme.colors.text.primary}}>
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
                <td className="text-center">
                  {item.attempts}
                </td>
                <td className="flex justify-end py-2">
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