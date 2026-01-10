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
  const { theme } = useTheme();
  return (
    <div className="flex h-screen flex-col"
    >
      {/* Header logic is handled by parent (AppLayout), keeping this clean */}

      <div className="flex-1 overflow-y-auto pl-8">
        <div className="mx-auto flex w-full flex-col gap-2">

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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6">
              {/* Row 1: Student Performance, Assessments, Class Performance */}
              <div className="md:col-span-1 xl:col-span-3">
                <StudentPerformance />
              </div>

              <div className="md:col-span-2 xl:col-span-5">
                <AssessmentsOverview />
              </div>

              <div className="md:col-span-1 xl:col-span-4">
                <ClassPerformance />
              </div>

              {/* Row 2: Calendar (Spans 2 Rows for height), Rest of right side */}
              <div className="md:col-span-1 xl:col-span-3 xl:row-span-2 flex h-full flex-col rounded-2xl"
              >
                <CalendarSection />
              </div>

              {/* Blank Card 1 (Vertical - Middle Gap) */}
              <div
                className="md:col-span-1 xl:col-span-4 h-58 min-h-25 rounded-2xl"
                style={{ backgroundColor: theme.colors.bg.surface.primary }}
              ></div>

              <div className="md:col-span-1 xl:col-span-3 h-58 w-145">
                <AnnouncementSection />
              </div>

              {/* Blank Card 2 (Horizontal - Bottom Bar) */}
              <div
                className="md:col-span-2 xl:col-start-4 xl:col-span-9 min-h-15 rounded-2xl -mt-8"
                style={{ backgroundColor: theme.colors.bg.surface.primary }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;