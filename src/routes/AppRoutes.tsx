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

// Student Pages
const StudentDashboard = lazy(
  () => import("@/features/dashboard/pages/StudentDashboard")
);
const SelfAssessment = lazy(
  () => import("@/features/assessment/pages/SelfAssessment")
);

//ROUTE GUARDS
const PrivateRoute = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

const PublicRoute = () => {
  const { isLoggedIn } = useAuth();
  // Safe access to localStorage with a fallback
  const user = JSON.parse(localStorage.getItem("user") || "{}");
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
            </Route>

            {/* Student Feature Routes */}
            <Route path="student">
              <Route path="dashboard" element={<StudentDashboard />} />
              <Route path="self-assessment" element={<SelfAssessment />} />
            </Route>

            {/* Dynamic Route Placeholder (Phase 3 Requirement) */}
            {/* <Route path="course/:courseId" element={<CourseDetail />} /> */}
          </Route>
        </Route>

        {/* --- 404 CATCH-ALL --- */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
