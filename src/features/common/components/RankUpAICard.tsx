import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";
import BarChartIcon from "@mui/icons-material/BarChart";
import {
  AlarmAddRounded,
  CalculateRounded,
  VideoCameraBack,
  Edit,
  Translate,
} from "@mui/icons-material";

// --- Assets ---
import youngWoman from "@/assets/young woman.svg";
import Waves from "@/assets/Group 21.png";

const RankUpAICard = () => {
  return (
    <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-[30px] border-3 border-[#FFFFFF38] shadow-2xl">
      {/* Background Gradient */}
      <div className="absolute inset-0"></div>

      {/* Abstract Waves Background Effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -right-0 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute right-20 top-10 h-48 w-48 rounded-full bg-purple-400/30 blur-2xl"></div>
      </div>

      <div className="relative z-10 flex h-full p-4">
        {/* Left Side Info */}
        <div className="flex w-1/2 flex-col text-[#A1AEF2]">
          <h1 className="flex items-start justify-start text-xl font-extrabold text-[#A1AEF2]">
            RankUp AI
          </h1>
          
          {/* Decorative Wave Image behind text/stats */}
          <img
            src={Waves}
            alt="wave decoration"
            className="absolute -right-13 -top-75 w-[95%]"
          />

          <div className="mt-10 flex items-start gap-18 pl-4">
            {/* Icons Grid */}
            <div className="grid max-w-[140px] grid-cols-2 gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/20 backdrop-blur-md">
                <CenterFocusStrongIcon />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/20 backdrop-blur-md">
                <StarIcon />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/20 backdrop-blur-md">
                <SchoolIcon />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/20 backdrop-blur-md">
                <BarChartIcon />
              </div>
            </div>

            {/* Stats Text */}
            <div className="space-y-4 text-base">
              <div className="flex items-center">
                <span className="text-xl font-bold">
                  2<span className="text-sm font-extrabold">hrs</span>
                </span>
                <span className="font-bold">/</span>
                <span className="text-sm">daily</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">30</span>
                <span className="text-sm">Questions</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">
                  11<sup>th</sup>
                </span>
                <span className="text-sm">Rank</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Character */}
        <div className="relative w-1/2">
          <img
            src={youngWoman}
            alt="AI Assistant"
            className="absolute -bottom-10 h-[220px]"
          />
        </div>
      </div>

      {/* Bottom Toolbar Mockup */}
      <div className="absolute bottom-0 left-1/3 flex -translate-x-1/2 gap-6 rounded-tl-4xl rounded-tr-4xl bg-[#FFFFFF38] px-6 py-1 text-[#A1AEF2] backdrop-blur-lg">
        <CalculateRounded sx={{ fontSize: 20 }} />
        <Translate sx={{ fontSize: 20 }} />
        <AlarmAddRounded sx={{ fontSize: 20 }} />
        <VideoCameraBack sx={{ fontSize: 20 }} />
        <Edit sx={{ fontSize: 20 }} />
      </div>
    </div>
  );
};

export default RankUpAICard;