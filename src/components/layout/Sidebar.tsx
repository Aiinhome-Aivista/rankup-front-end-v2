import { useState } from "react";
import { mainNavItems, collapsedNavItems } from "@/config/nav-items";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";

// --- TYPES ---
interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

// --- COMPONENT ---
const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const navigate = useNavigate;
  const { logout } = useAuth;
  const [activeItem, setActiveItem] = useState("dashboard");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {/* Container for both sidebars - slides together based on sidebarOpen prop */}
      <div
        className={`fixed left-0 top-0 h-screen z-100 transition-transform duration-300 ease-in-out flex ${
          sidebarOpen ? "translate-x-0" : "-translate-x-80"
        }`}
      >
        {/* Main Expanded Sidebar */}
        <div className="w-80 h-full bg-[#514CF133] backdrop-blur-2xl">
          <div className="h-full flex flex-col">
            {/* User Profile Section */}
            <div className="flex items-center gap-3 p-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[40px] rounded-full border-4 border-white">
                  account_circle
                </span>
              </div>
              <div>
                <h3 className="text-white font-extrabold">Dr. Anna Viteret</h3>
                <p className="text-white text-xs font-medium">
                  ZEMS world Academy, DUBAI
                </p>
              </div>
            </div>

            <div className="w-full border-t border-white" />

            {/* Navigation Grid */}
            <div className="flex flex-col gap-4 flex-1 p-6">
              {/* First Row - 2 cards */}
              <div className="grid grid-cols-2 gap-4">
                {mainNavItems.slice(0, 2).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`
                      relative overflow-hidden rounded-2xl p-5 flex flex-col items-center justify-center gap-2 transition-all duration-200 min-h-25 cursor-pointer 
                      ${
                        activeItem === item.id
                          ? "bg-[#514CF133] text-[#514CF1] border border-[#514CF1] shadow-[0_5px_10px_2px_rgba(81,76,241,0.2)]"
                          : "bg-[#514CF133] text-white hover:bg-[#514CF133] border border-[#514CF1]"
                      }
                    `}
                  >
                    <span className="material-symbols-outlined text-[36px]">
                      {item.icon}
                    </span>
                    <span className="font-semibold text-sm">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Second Row - 2 cards */}
              <div className="grid grid-cols-2 gap-4">
                {mainNavItems.slice(2, 4).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`
                      relative overflow-hidden rounded-2xl p-5 flex flex-col items-center justify-center gap-2 transition-all duration-200 min-h-25 cursor-pointer
                      ${
                        activeItem === item.id
                          ? "bg-[#514CF133] text-[#514CF1] drop-shadow-lg border border-[#514CF1]"
                          : "bg-[#514CF133] text-white hover:bg-[#514CF133] border border-[#514CF1]"
                      }   
                    `}
                  >
                    <span className="material-symbols-outlined text-[36px]">
                      {item.icon}
                    </span>
                    <span className="font-semibold text-sm">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Third Row - Single card */}
              <div className="grid grid-cols-2 gap-4">
                {mainNavItems.slice(4, 5).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`
                    relative overflow-hidden rounded-2xl p-5 flex flex-col items-center justify-center gap-2 transition-all duration-200 min-h-25
                    ${
                      activeItem === item.id
                        ? "bg-[#514CF133] text-[#514CF1] drop-shadow-lg border border-[#514CF1]"
                        : "bg-[#514CF133] text-white hover:bg-[#514CF133] border border-[#514CF1]"
                    }
                  `}
                  >
                    <span className="material-symbols-outlined text-[36px]">
                      {item.icon}
                    </span>
                    <span className="font-semibold text-sm">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
            {/* logout */}
            <div className="p-4 mt-auto border-t border-white">
              <button
                onClick={handleLogout}
                className="w-12 h-12 flex items-center justify-center rounded-2xl text-white hover:bg-[#D9D9D9] border border-[#514CF1] transition-colors shadow-sm cursor-pointer bg-[#514CF133]"
              >
                <span className="material-symbols-outlined text-[24px]">
                  logout
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Collapsed Sidebar - Attached  to right edge of expanded sidebar */}
        <div className="absolute -right-9 top-1/2 -translate-y-1/2 w-9">
          <div className="bg-[#514CF133] backdrop-blur-2xl rounded-r-4xl shadow-lg py-4">
            {/* Toggle Trigger (Keep invisible area clickable for toggle if needed) */}
            <button
              onClick={toggleSidebar}
              className="flex items-center justify-center w-full mb-2 h-8 cursor-pointer"
            />

            {/* Navigation Icons (Vertical Strip) */}
            <div className="flex flex-col gap-1.5">
              {collapsedNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveItem(item.id);
                    if (!sidebarOpen) setSidebarOpen(true);
                  }}
                  className="relative w-9 h-10 mx-auto flex items-center justify-center group"
                >
                  {/* LEFT PILL INDICATOR */}
                  {activeItem === item.id && (
                    <span className="absolute -left-2 w-6 h-1 bg-[#5046E5] rotate-90 rounded-br-[10px] rounded-tl-[10px] z-0" />
                  )}

                  {/* ICON */}
                  <span
                    className={`material-symbols-outlined text-[20px] relative z-10 transition-colors cursor-pointer ${
                      activeItem === item.id
                        ? "text-[#5046E5]"
                        : "text-[#7C7CFF] group-hover:text-[#5046E5]"
                    }`}
                  >
                    {item.icon}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-99 transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
