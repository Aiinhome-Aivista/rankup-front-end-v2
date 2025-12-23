import GreetingSection from "../components/GreetingSection";
import UpcomingClasses from "../components/UpcomingClasses";
import WeeklyClassAverage from "../components/WeeklyClassAverage";
import StrengthsWeaknesses from "../components/StrengthsWeaknesses";
import UpcomingTest from "../components/UpcomingTest";
import StudentPerformance from "../components/StudentPerformance";
import AssessmentsOverview from "../components/AssessmentsOverview";
import ClassPerformance from "../components/ClassPerformance";
import CalendarSection from "../components/CalendarSection";
import AnnouncementSection from "../components/AnnouncementSection";
import { useTheme } from "@rankup/shared-ui";


const TeacherDashboard = () => {
  const{theme} = useTheme();
  return (
    <div className="flex h-screen flex-col">
      {/* Header logic is handled by parent (AppLayout), keeping this clean */}
      
      <div className="flex-1 overflow-y-auto pl-14 pr-8">
        <div className="mx-auto flex max-w-400 flex-col gap-2">
          
          {/* 1. Greeting & Welcome */}
          <GreetingSection />

          {/* 2. Main Grid Layout */}
          <div className="flex flex-col gap-6">
            
            {/* Top Row Stats (three large panels + one small panel) */}
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

            {/* Bottom Section */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              
              {/* Left Column (Sidebar-ish) */}
              <div className="flex flex-col gap-6 lg:col-span-3">
                <StudentPerformance />
                <div className="flex-1 rounded-3xl p-1">
                  <CalendarSection />
                </div>
              </div>

              {/* Right Main Column */}
              <div className="flex flex-col gap-6 lg:col-span-9">
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
                  <div className="flex xl:col-span-2">
                    <AssessmentsOverview />
                  </div>
                  <div className="xl:col-span-1">
                    <ClassPerformance />
                  </div>
                </div>

                <div className="rounded-3xl border p-6"
               style={{color:theme.colors.border.default, backgroundColor:theme.colors.bg.card}} >
                  <AnnouncementSection />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;