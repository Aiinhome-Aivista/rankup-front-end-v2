import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";

// --- Components ---
// Ensure these are moved to features/auth/components/ui/ and are .tsx files
import IndividualRegistration from "../components/IndividualRegistration";
import InstituteRegistration from "../components/InstituteRegistration";

// --- Assets ---
import vector2 from "@/assets/Vector-2-login.svg";
import vector3 from "@/assets/Vector-3-login.svg";
import vector4 from "@/assets/Vector-4-login.svg";
import vector5 from "@/assets/Vector-5-login.svg";
import logo from "@/assets/icons/Aiinhome _ RU.svg";

// --- Types ---
type RegistrationTab = "individual" | "institute";

const Registration = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<RegistrationTab>("individual");

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#A1AEF2] font-sans">
      {/* Top Left Branding */}
      <div className="absolute left-8 top-6 z-20 tracking-wide">
        <img src={logo} alt="Aiinhome Logo" />
      </div>

      {/* Wave Background */}
      <div className="pointer-events-none absolute h-full w-full">
        <div className="z-5 absolute left-0 top-95 w-full overflow-hidden">
          <img src={vector5} alt="" className="h-auto w-full" />
        </div>
        <div className="z-3 absolute left-0 top-40 w-[120%]">
          <img src={vector3} alt="" className="h-auto w-full" />
        </div>
        <div className="z-2 absolute -left-1 top-30 w-full">
          <img src={vector2} alt="" className="h-auto w-full" />
        </div>
        <div className="z-4 absolute left-4 top-60 w-[110%]">
          <img src={vector4} alt="" className="h-auto w-full" />
        </div>
      </div>

      {/* Registration Card */}
      <div className="absolute left-1/2 top-1/2 z-10 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 px-4 py-8 lg:max-w-xl">
        <div className="rounded-3xl border-3 border-[#FFFFFF40] bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
          <div className="flex flex-col items-center text-center text-white">
            <h1 className="mb-2 text-3xl font-bold">Register</h1>
            <p className="mb-6 font-light opacity-90 md:text-base text-sm">
              Customize Every View. Empower Every Decision.
            </p>

            {/* Tab Switcher */}
            <div className="mb-8 flex rounded-lg bg-white/20 p-1">
              <button
                className={`flex cursor-pointer items-center gap-2 rounded-md px-6 py-2 transition-all duration-300 ${
                  activeTab === "individual"
                    ? "bg-white/80 text-indigo-900 shadow-sm"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setActiveTab("individual")}
              >
                <PersonIcon fontSize="small" />
                <span className="text-sm font-semibold">Individual</span>
              </button>
              <button
                className={`flex cursor-pointer items-center gap-2 rounded-md px-6 py-2 transition-all duration-300 ${
                  activeTab === "institute"
                    ? "bg-white/80 text-indigo-900 shadow-sm"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setActiveTab("institute")}
              >
                <ApartmentIcon fontSize="small" />
                <span className="text-sm font-semibold">Institute</span>
              </button>
            </div>

            {/* Forms */}
            <div className="custom-scrollbar max-h-[50vh] w-90 space-y-4 overflow-y-auto">
              {activeTab === "individual" ? (
                <IndividualRegistration />
              ) : (
                <InstituteRegistration />
              )}

              <div className="mt-6 text-center text-xs opacity-80 md:text-sm">
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="cursor-pointer font-bold text-[#514CF1] hover:underline"
                >
                  Login here
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
