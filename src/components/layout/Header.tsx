import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Bell, ChevronRight, User, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/features/auth/hooks/useAuth";
import RVector from "@/assets/R-Vector.svg"; // Ensure this image is in src/assets

// Define the props required by AppLayout
interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Use the hook instead of raw Context
  const [isNotificationsExpanded, setIsNotificationsExpanded] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  const handleLogout = () => {
    logout(); // The hook handles localStorage clearing & navigation
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 flex h-20 w-full items-center justify-between bg-white px-4 py-3 md:px-8">
      {/* --- LEFT SECTION: Hamburger (Mobile) + Logo --- */}
      <div className="flex items-center gap-4">
        {/* Hamburger Menu (Visible on Mobile Only) */}
        <button
          aria-controls="sidebar"
          onClick={(e) => {
            e.stopPropagation();
            setSidebarOpen(!sidebarOpen);
          }}
          className="block lg:hidden rounded-sm border border-gray-200 bg-white p-1.5 shadow-sm"
        >
          <Menu className="h-5 w-5 text-gray-600" />
        </button>

        {/* Your Logo & Title */}
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full">
            <img
              src={RVector}
              alt="Rank Up Logo"
              className="h-full w-full object-contain"
            />
          </div>
          {/* Hide text on very small screens if needed */}
          <h1
            className="hidden text-2xl font-medium text-gray-800 sm:block"
            style={{ fontFamily: '"Patrick Hand", cursive' }}
          >
            Rank Up Academy
          </h1>
        </div>
      </div>

      {/* --- RIGHT SECTION: Actions --- */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Create Assessment Button */}
        <button
          onClick={() => navigate("/teacher/dashboard/create-assessment")}
          className="hidden md:flex items-center gap-2 rounded-full bg-[#514CF1] px-4 py-2 font-semibold text-white ring-4 ring-[#D9D9D9] transition-colors hover:bg-[#403BC0]"
        >
          <Plus
            size={20}
            className="rounded-full border border-white font-semibold"
          />
          <span className="text-sm font-medium">Create Assessment</span>
        </button>

        {/* Notifications */}
        <div
          className="flex h-12 cursor-pointer items-center gap-3 rounded-full bg-[#D9D9D9] px-4 py-3 transition-colors hover:bg-gray-300"
          onClick={() => setIsNotificationsExpanded(!isNotificationsExpanded)}
        >
          <Bell size={20} className="text-gray-600" />

          <AnimatePresence mode="wait">
            {isNotificationsExpanded && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="ml-1 flex items-center gap-1.5 border-l border-gray-300 px-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                    05
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-[10px] font-bold text-gray-800">
                    12
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white text-[10px] font-bold text-gray-600">
                    17
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <ChevronRight
            size={18}
            className={`text-gray-500 transition-transform duration-300 ${
              isNotificationsExpanded ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Profile Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsProfileHovered(true)}
          onMouseLeave={() => setIsProfileHovered(false)}
        >
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300">
            <User size={24} className="text-gray-600" />
          </div>

          <AnimatePresence>
            {isProfileHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-12 z-50 w-32 overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-lg"
              >
                <div
                  className="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-gray-50"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
