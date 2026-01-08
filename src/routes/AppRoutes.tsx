import { Suspense, lazy } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";
import AppLayout from "@/components/layout/AppLayout";
import PageLoader from "@/components/feedback/PageLoader";


// Common Pages
const Homepage = lazy(() => import("@/features/common/pages/Homepage"));
const Login = lazy(() => import("@/features/auth/pages/Login"));
const Registration = lazy(() => import("@/features/auth/pages/Registration"));

// Teacher Pages
const TeacherDashboard = lazy(
  () => import("@/features/dashboard/pages/TeacherDashboard")
);
const CreateAssessment = lazy(
  () => import("@/features/assessment/pages/CreateAssesment")
);
const ReviewAssessment = lazy(
  () => import("@/features/assessment/pages/ReviewAssesment")
);

// Student Pages
const StudentDashboard = lazy(
  () => import("@/features/dashboard/pages/StudentDashboard")
);
const SelfAssessment = lazy(
  () => import("@/features/assessment/pages/SelfAssessment")
);
const AttendingAssesment = lazy(
  () => import("@/features/assessment/pages/AttendingAssesment")
);

// parent pages
const ParentDashboard = lazy(
  () => import("@/features/dashboard/pages/ParentDashboard")
);

// institute pages
const InstituteDashboard = lazy(
  () => import("@/features/dashboard/pages/InstituteDashboard")
);

const AddChild = lazy(
  () => import("@/features/children/pages/AddChild")
);



//ROUTE GUARDS
const PrivateRoute = () => {
  const { isLoggedIn, isLoading } = useAuth();
  
  if (isLoading) {
    return <PageLoader />;
  }
  
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

const PublicRoute = () => {
  const { isLoggedIn, user, isLoading } = useAuth();
  
  if (isLoading) {
    return <PageLoader />;
  }

  const role = (user?.role || "teacher").toLowerCase();

  return !isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={`/${role}/dashboard`} replace />
  );
};

//MAIN ROUTER
const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* --- PUBLIC ROUTES --- */}
        <Route element={<PublicRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Homepage />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
        </Route>

        {/* --- PROTECTED ROUTES --- */}
        <Route element={<PrivateRoute />}>
          <Route element={<AppLayout />}>
            {/* Teacher Feature Routes */}
            <Route path="teacher">
              <Route path="dashboard" element={<TeacherDashboard />} />
              {/* Dynamic Route Capability Example: /teacher/assessment/:id */}
              <Route
                path="dashboard/create-assessment"
                element={<CreateAssessment />}
              />
              <Route
                path="dashboard/review-assessment"
                element={<ReviewAssessment />}
              />
            </Route>

            {/* Student Feature Routes */}
            <Route path="student">
              <Route path="dashboard" element={<StudentDashboard />} />
              <Route path="institute-dashboard" element={<InstituteDashboard />} />
              <Route path="self-assessment" element={<SelfAssessment />} />
            </Route>

            {/* Parent Feature Routes */}
            <Route path="parent">
              <Route path="dashboard" element={<ParentDashboard />} />
              <Route path="dashboard/add-child" element={<AddChild />} />
            </Route>


            {/* Dynamic Route Placeholder (Phase 3 Requirement) */}
            {/* <Route path="course/:courseId" element={<CourseDetail />} /> */}
          </Route>

          {/* Assessment Route (Full Screen) */}
          <Route
            path="student/attend-assessment/:id"
            element={<AttendingAssesment />}
          />
        </Route>


        {/* --- 404 CATCH-ALL --- */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
