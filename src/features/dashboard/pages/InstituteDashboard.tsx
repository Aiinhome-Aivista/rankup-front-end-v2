import { useState } from "react";
import GreetingSection from "../components/GreetingSection";
import InstituteStats from "../components/InstituteStats";
import StudentPerformanceChart from "../components/StudentPerformanceChart";
import ClassPerformanceChart from "../components/ClassPerformanceChart";
import ParentEngagement from "../components/ParentEngagement";
import FinancialSummary from "../components/FinancialSummary";
import SchoolCalendarEvents from "../components/SchoolCalendarEvents";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import restartIcon from "@/assets/icons/restart_alt.svg";
import TeacherInfo from "../components/TeacherInfo";
import ClassroomUtilization from "../components/ClassroomUtilization";

const InstituteDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [teacherStatus, setTeacherStatus] = useState<string | null>(null);
  const [studentStatus, setStudentStatus] = useState<string | null>(null);
  const [classStatus, setClassStatus] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);
  const [grade, setGrade] = useState<string | null>(null);

  // Dynamic options for dropdowns
  const teacherStatusOptions = [
    { label: "Active", value: "active" },
    { label: "On Leave", value: "on_leave" },
    { label: "Inactive", value: "inactive" },
  ];

  const studentStatusOptions = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
    { label: "Suspended", value: "suspended" },
  ];

  const classStatusOptions = [
    { label: "Ongoing", value: "ongoing" },
    { label: "Completed", value: "completed" },
    { label: "Scheduled", value: "scheduled" },
  ];

  const subjectOptions = [
    { label: "Mathematics", value: "math" },
    { label: "Science", value: "science" },
    { label: "English", value: "english" },
    { label: "History", value: "history" },
    { label: "Geography", value: "geography" },
  ];

  const gradeOptions = [
    { label: "Grade 1-5", value: "1-5" },
    { label: "Grade 6-10", value: "6-10" },
    { label: "Grade 11-12", value: "11-12" },
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Greeting Section */}
      <div className="mb-8">
        <GreetingSection />
      </div>

      {/* Search Bar and Filter Dropdowns */}
      <div
        className="mb-6 rounded-2xl p-4"
        style={{ background: "#514CF105", border: "1px solid #514CF10D" }}
      >
        <div className="flex items-center gap-4">
          {/* Search Bar - Left Side */}
          <div
            className="flex-1 flex items-center gap-3 rounded-xl px-4 py-3"
            style={{ background: "#FFFFFF", border: "1px solid #514CF11A" }}
          >
            <SearchIcon className="text-gray-400" />
            <input
              type="text"
              placeholder="Search teachers, students, or classes by name/ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Filter Dropdowns - Right Side */}
          <div className="flex items-center gap-3">
            <Dropdown
              value={teacherStatus}
              onChange={(e) => setTeacherStatus(e.value)}
              options={teacherStatusOptions}
              placeholder="Teacher Status"
              className="custom-dropdown"
              style={{ minWidth: "140px" }}
            />

            <Dropdown
              value={studentStatus}
              onChange={(e) => setStudentStatus(e.value)}
              options={studentStatusOptions}
              placeholder="Student Status"
              className="custom-dropdown"
              style={{ minWidth: "140px" }}
            />

            <Dropdown
              value={classStatus}
              onChange={(e) => setClassStatus(e.value)}
              options={classStatusOptions}
              placeholder="Class Status"
              className="custom-dropdown"
              style={{ minWidth: "130px" }}
            />

            <Dropdown
              value={subject}
              onChange={(e) => setSubject(e.value)}
              options={subjectOptions}
              placeholder="Subject"
              className="custom-dropdown"
              style={{ minWidth: "110px" }}
            />

            <Dropdown
              value={grade}
              onChange={(e) => setGrade(e.value)}
              options={gradeOptions}
              placeholder="Grade"
              className="custom-dropdown"
              style={{ minWidth: "110px" }}
            />

            <button
              className="p-3 rounded-xl bg-white hover:bg-gray-50 transition-colors cursor-pointer"
              style={{ border: "1px solid #514CF11A" }}
            >
              <img src={restartIcon} alt="Restart" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .custom-dropdown .p-dropdown {
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          background: white;
          box-shadow: none;
          height: 40px;
        }

        .custom-dropdown .p-dropdown:not(.p-disabled):hover {
          border-color: #514BF2;
        }

        .custom-dropdown .p-dropdown:not(.p-disabled).p-focus {
          outline: 0 none;
          outline-offset: 0;
          box-shadow: 0 0 0 0.2rem rgba(81, 75, 242, 0.2);
          border-color: #514BF2;
        }

        .custom-dropdown .p-dropdown-label {
          color: #514BF2;
          font-size: 14px;
          font-weight: 500;
          padding: 0.5rem 1rem;
        }

        .custom-dropdown .p-dropdown-label.p-placeholder {
          color: #514BF2;
        }

        .custom-dropdown .p-dropdown-trigger {
          color: #514BF2;
          width: 2.5rem;
        }

        .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
          color: #374151;
          padding: 0.5rem 1rem;
          font-size: 14px;
        }

        .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
          background: #F3F4F6;
          color: #514BF2;
        }

        .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
          background: #514BF2;
          color: white;
        }
      `}</style>

      {/* Statistics Cards */}
      <InstituteStats />

      {/* Charts Section - Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 mb-6">
        <StudentPerformanceChart />
        <ClassPerformanceChart />
      </div>

      {/* Bottom Section - Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.29fr] gap-6">
        <ClassroomUtilization occupied={50} vacant={25} maintenance={25} />

        <div className="space-y-4 flex flex-col">
          <ParentEngagement />
          <FinancialSummary />
        </div>

        <div className="space-y-6 flex flex-col">
          <SchoolCalendarEvents />
          <TeacherInfo />
        </div>
      </div>
    </div>
  );
};

export default InstituteDashboard;
