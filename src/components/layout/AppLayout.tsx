import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Navbar from "./Navbar";
import { color } from "framer-motion";
import {useTheme} from "@rankup/shared-ui";


const AppLayout = () => {
  const { isLoggedIn } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const{theme}=useTheme();


  // ------------------------------------------------------------------
  // CASE 1: PUBLIC USER (Not Logged In)
  // Shows: Navbar -> Page Content
  // ------------------------------------------------------------------
  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen flex-col"
      style={{color:theme.colors.bg.default}}>
        {/* Public Navigation */}
        <Navbar />
        
        {/* The Page Content (Homepage, Login, Register) */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    );
  }

  // ------------------------------------------------------------------
  // CASE 2: LOGGED IN USER (Teacher/Student)
  // Shows: Sidebar (Left) + Header (Top) + Page Content
  // ------------------------------------------------------------------
  return (
    <div className="flex h-screen overflow-hidden"
      style={{color:theme.colors.bg.default}}>
      {/* Sidebar - Controlled by state for mobile responsiveness */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content Area (Right side of Sidebar) */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        
        {/* Dashboard Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Dashboard Page Content */}
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;