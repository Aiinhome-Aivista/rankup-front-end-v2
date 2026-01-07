import UpcomingClasses from "../components/UpcomingClasses";
import WeeklyClassAverage from "../components/WeeklyClassAverage";
import StrengthsWeaknesses from "../components/StrengthsWeaknesses";
import UpcomingTest from "../components/UpcomingTest";
import GreetingSection from "../components/GreetingSection";
import ManageChildren from "../components/ManageChildren";
import Updates from "../components/Updates";
import SchoolCalender from "../components/SchoolCalender";
import ClassPerformance from "../components/ClassPerformance";
import AnnouncementSection from "../components/AnnouncementSection";
import TeacherContactInfo from "../components/TeacherContactInfo";
import { useTheme } from "@rankup/shared-ui";

const ParentDashboard = () => {
  // const { theme } = useTheme();
  return (
    <div className="flex h-screen flex-col">
      {/* Header logic is handled by parent (AppLayout) */}

      <div className="flex-1 overflow-y-auto pl-6 pr-6 pb-6 lg:pl-10 lg:pr-10">
        <div className="mx-auto flex max-w-400 flex-col gap-8">

          {/* 1. Greeting & Welcome */}
          <GreetingSection />

          {/* 2. Top Row Stats (Restored) */}
          <div className="flex flex-col items-start gap-6 lg:flex-row">
            <div className="max-h-64 flex-1 overflow-y-auto">
              <UpcomingClasses />
            </div>
            <div className="flex-1">
              <WeeklyClassAverage />
            </div>
            <div className="flex-1">
              <StrengthsWeaknesses />
            </div>
            <div className="w-full lg:w-44 xl:w-48">
              <UpcomingTest />
            </div>
          </div>

          {/* 3. Main Design Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

            {/* Left Column: My Children */}
            <div className="xl:col-span-1 xl:row-span-2 h-full">
              <ManageChildren />
            </div>

            {/* Row 1 Middle: Updates */}
            <div className="xl:col-span-1">
              <Updates />
            </div>

            {/* Row 1 Right: Class Performance */}
            <div className="xl:col-span-1">
              <ClassPerformance />
            </div>

            {/* Row 2 Middle: School Calendar */}
            <div className="xl:col-span-1">
              <SchoolCalender />
            </div>

            {/* Row 2 Right: Announcement */}
            <div className="xl:col-span-1">
              <AnnouncementSection />
            </div>

            {/* Row 3: Teacher Contact Info (Aligned with School Calendar - Col 2&3) */}
            <div className="xl:col-start-2 xl:col-span-2 overflow-hidden">
              <TeacherContactInfo />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;