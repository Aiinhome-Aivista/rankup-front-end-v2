import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/features/auth/hooks/useAuth'; // Assuming you have this hook
import AppLayout from '@/components/layout/AppLayout'; // Adjusted import path

// ----------------------------------------------------------------------
// 1. LAZY LOADING (Code Splitting)
// ----------------------------------------------------------------------
// We lazy load pages so the user doesn't download the entire app at once.

// Common Pages
const Homepage = lazy(() => import('@/features/common/pages/Homepage'));
const Login = lazy(() => import('@/features/auth/pages/Login'));
const Registration = lazy(() => import('@/features/auth/pages/Registration'));

// Teacher Pages
const TeacherDashboard = lazy(() => import('@/features/dashboard/pages/TeacherDashboard'));
const CreateAssessment = lazy(() => import('@/features/assessment/pages/CreateAssessment'));

// Student Pages
const SelfAssessment = lazy(() => import('@/features/assessment/pages/SelfAssessment'));

// ----------------------------------------------------------------------
// 2. LOADING COMPONENT
// ----------------------------------------------------------------------
// A simple spinner to show while the chunk is loading
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
  </div>
);

// ----------------------------------------------------------------------
// 3. ROUTE GUARDS (Reused your logic)
// ----------------------------------------------------------------------

const PrivateRoute = () => {
  const { isLoggedIn } = useAuth(); // Use the hook instead of raw Context
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

const PublicRoute = () => {
  const { isLoggedIn } = useAuth();
  // Safe access to localStorage with a fallback
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const role = user?.role || "teacher";

  return !isLoggedIn ? <Outlet /> : <Navigate to={`/${role}/dashboard`} replace />;
};

// ----------------------------------------------------------------------
// 4. MAIN ROUTER
// ----------------------------------------------------------------------

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        
        {/* --- PUBLIC ROUTES --- */}
        <Route element={<PublicRoute />}>
          
          {/* Layout for Public Pages (Homepage) */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<Homepage />} />
          </Route>

          {/* Auth Pages (No AppLayout usually, or minimal layout) */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
        </Route>


        {/* --- PROTECTED ROUTES --- */}
        <Route element={<PrivateRoute />}>
          
          {/* NESTED LAYOUT: Applies AppLayout to all routes inside */}
          <Route element={<AppLayout />}>
            
            {/* Teacher Feature Routes */}
            <Route path="teacher">
              <Route path="dashboard" element={<TeacherDashboard />} />
              {/* Dynamic Route Capability Example: /teacher/assessment/:id */}
              <Route path="dashboard/create-assessment" element={<CreateAssessment />} />
            </Route>

            {/* Student Feature Routes */}
            <Route path="student">
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