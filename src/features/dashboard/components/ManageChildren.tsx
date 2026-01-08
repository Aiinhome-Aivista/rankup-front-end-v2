import { useTheme } from "@rankup/shared-ui";
import { ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";
import Child1 from "../../../assets/Child1.svg";
import Child2 from "../../../assets/Child2.svg";
import type { Child } from "../types/manageChildren";


// Mock Data
const childrenData: Child[] = [
  {
    id: 1,
    name: "Emma Trepsoria",
    grade: "10th Grade",
    room: "Room 3B",
    avatar: Child1,
    stats: {
      gpa: { value: "3.8", sub: "+0.2 this term", status: "good" },
      attendance: { value: "98%", sub: "1 absence" },
      assignments: { value: "9/10", sub: "Completed" },
    },
    notification: {
      type: "warning",
      title: "Upcoming: History Mid-term",
      date: "Friday, Oct 25 | 3 days left",
      highlight: true
    }
  },
  {
    id: 2,
    name: "Rohan Trepsoria",
    grade: "6th Grade",
    room: "Room 2A",
    avatar: Child2,
    stats: {
      gpa: { value: "3.5", sub: "Stable", status: "neutral" },
      attendance: { value: "92%", sub: "3 absence" },
      assignments: { value: "12/12", sub: "On track" },
    },
    notification: {
      type: "success",
      title: "Science Project Submitted",
      date: "Yesterday | Grade Pending",
      highlight: false
    }
  }
];

const ManageChildren = () => {
  const { theme } = useTheme();

  return (
    <div className="h-full flex flex-col rounded-2xl">
      <div className="flex justify-between items-center mb-4 px-6">
        <h3 className="text-sm font-bold" style={{ color: theme.colors.text.default }}>
          My Children
        </h3>
      </div>
      <div className="flex flex-col gap-6 flex-1 overflow-y-auto scrollbar-hide min-h-0">
        {childrenData.map((child: Child) => (
          <div
            key={child.id}
            className="rounded-2xl p-6 relative overflow-hidden shrink-0"
            style={{
              backgroundColor: theme.colors.bg.card,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.02)"
            }}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4 items-center">
                <img src={child.avatar} alt={child.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-base" style={{ color: theme.colors.text.default }}>{child.name}</h4>
                  <p className="text-xs" style={{ color: theme.colors.text.default }}>{child.grade} | {child.room}</p>
                </div>
              </div>
              <button className="text-[#514BF2]">
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-between mb-6 px-2">
              <div className="flex flex-col">
                <span className="text-2xl font-light text-[#514BF2]">{child.stats.gpa.value}</span>
                <span className="text-base font-bold text-[#514BF2]">GPA</span>
                <span className="text-[10px] " style={{ color: theme.colors.text.sidebaricontext }}>{child.stats.gpa.sub}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-light text-[#514BF2]">{child.stats.attendance.value}</span>
                <span className="text-base font-bold text-[#514BF2]">Attendance</span>
                <span className="text-[10px]" style={{ color: theme.colors.text.sidebaricontext }}>{child.stats.attendance.sub}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-light text-[#514BF2]">{child.stats.assignments.value}</span>
                <span className="text-base font-bold text-[#514BF2]">Assignments</span>
                <span className="text-[10px]" style={{ color: theme.colors.text.sidebaricontext }}>{child.stats.assignments.sub}</span>
              </div>
            </div>

            {/* Notification */}
            <div className={`rounded-xl p-3 flex gap-3 items-center ${child.notification.type === 'warning' ? 'bg-[#514CF10D]' : 'bg-[#514CF10D]'}`}>
              {child.notification.type === 'warning' ? (
                <AlertTriangle size={18} className="text-orange-500" />
              ) : (
                <CheckCircle size={18} className="text-green-500" />
              )}
              <div>
                <p className={`text-xs font-medium ${child.notification.type === 'warning' ? 'text-[#514BF2]' : 'text-[#514BF2]'}`}>
                  {child.notification.title}
                </p>
                <p className={`text-[10px] ${child.notification.type === 'warning' ? 'text-[#514CF199]' : 'text-[#514CF199]'}`}>
                  {child.notification.date}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageChildren;