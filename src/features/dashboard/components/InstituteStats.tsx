import UpdateIcon from "@/assets/icons/update.svg";
import PlusIcon from "@/assets/icons/plus6.svg";
import HiIcon from "@/assets/icons/Hi.svg";
import ScIcon from "@/assets/icons/Sc.svg";
import MaIcon from "@/assets/icons/Ma.svg";
import PlayArrowIcon from "@/assets/icons/play_arrow.svg";
import EventIcon from "@/assets/icons/event.svg";
import RoundPoint from "@/assets/icons/round-point.svg";
import GroupsnewIcon from "@/assets/icons/groups_icon.svg";
import PersonIcon from "@/assets/icons/person.svg";

const InstituteStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] bg-[#514CF105] mb-6 rounded-3xl border border-[#514CF10D]">
      {/* Updates Section - Teachers & Students */}
      <div className="flex flex-col gap-4 h-full p-6">
        {/* Header */}
        <div className="flex items-center justify-between pr-16">
          <h3 className="text-base font-semibold text-[#514BF2]">Updates</h3>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-[#514BF2]">
              Student-Teacher Ratio 26:1
            </span>
            <span className="text-sm font-medium text-green-500">Optimal</span>
          </div>
          <button className="text-sm font-medium text-[#514BF2] hover:underline cursor-pointer">
            View Directory →
          </button>
        </div>

        {/* Stats Cards */}
        <div className="flex items-center h-full gap-10">
          {/* Teachers Card */}
          <div className="flex-1 border border-[#514CF10D] bg-[#514CF105] rounded-2xl p-6 text-center flex flex-col items-center justify-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center">
              <img src={PersonIcon} alt="" />
            </div>
            <div>
              <p className="text-5xl font-bold text-[#514BF2]">48</p>
              <p className="text-base font-medium text-[#514BF2]">Teachers</p>
            </div>
            <p className="text-sm text-[#A5A3D9] bg-[#FFFFFF] px-4 py-1 rounded-full inline-block">
              32 Active
            </p>
          </div>

          {/* Students Card */}
          <div className="flex-1 border border-[#514CF10D] bg-[#514CF105] rounded-2xl p-6 text-center flex flex-col items-center justify-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center">
              <img src={GroupsnewIcon} alt="" />
            </div>
            <div>
              <p className="text-5xl font-bold text-[#514BF2]">1,250</p>
              <p className="text-base font-medium text-[#514BF2]">Students</p>
            </div>
            <p className="text-sm text-[#A5A3D9] bg-[#FFFFFF] px-4 py-1 rounded-full inline-block">
              96% Present
            </p>
          </div>
          <svg className="h-full ml-3" width="2" style={{ minHeight: "100%" }}>
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="#A1AEF2"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
          </svg>
        </div>
      </div>

      {/* Academic Lifecycle */}
      <div className="h-full flex flex-col gap-4 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-[#514BF2]">
            Academic Lifecycle
          </h3>
          <button className="text-sm font-medium text-[#514BF2] hover:underline cursor-pointer">
            Manage Classes →
          </button>
        </div>

        <div className="flex h-full items-start justify-between gap-8">
          {/* Current Classes */}
          <div className="h-full flex-1 flex flex-col justify-between items-start border border-[#514CF10D] bg-[#514CF105] rounded-2xl p-3">
            <div className="flex justify-between w-full items-start mb-2">
              <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center">
                <img src={UpdateIcon} alt="" />
              </div>
              <div className="w-4 h-4 rounded-full bg-[#dfddfd] flex items-center justify-center">
                <img src={RoundPoint} alt="" className="w-2 h-2" />
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#514BF2] text-start">36</p>
              <p className="text-xs text-gray-600 text-center">
                Current Classes
              </p>
            </div>
            <div className="flex -space-x-3">
              <div className="flex items-center justify-center relative hover:z-10 transition-all">
                <img src={MaIcon} alt="" className="w-6 h-6" />
              </div>

              <div className="flex items-center justify-center relative hover:z-10 transition-all">
                <img src={ScIcon} alt="" className="w-6 h-6" />
              </div>

              <div className="flex items-center justify-center relative hover:z-10 transition-all">
                <img src={HiIcon} alt="" className="w-6 h-6" />
              </div>

              <div className="flex items-center justify-center relative hover:z-10 transition-all">
                <img src={PlusIcon} alt="" className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Previous Classes */}
          <div className="h-full flex-1 flex flex-col justify-between border border-[#514CF10D] bg-[#514CF105] rounded-2xl p-3">
            <div className="flex justify-between items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center">
                <img src={PlayArrowIcon} alt="" />
              </div>
              <div className="text-xs font-medium text-[#514BF2]">ARCHIVED</div>
            </div>
            <div className="flex flex-col items-start mb-3 justify-between gap-4">
              <div>
                <p className="text-4xl font-bold text-[#514BF2] mb-1">142</p>
                <p className="text-sm text-gray-600 mb-1">Previous Classes</p>
              </div>

              <p className="text-xs text-[#514BF2] font-medium">
                Avg Performance: <span className="text-green-500">88%</span>
              </p>
            </div>
          </div>

          {/* Scheduled */}
          <div className="h-full flex-1 flex flex-col justify-between border border-[#514CF10D] bg-[#514CF105] rounded-2xl p-3">
            <div className="flex justify-between items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center">
                <img src={EventIcon} alt="" />
              </div>
              <div className="text-xs font-medium text-[#514BF2]">UPCOMING</div>
            </div>
            <div className="flex flex-col items-start mb-3 justify-between gap-4">
              <div>
                <p className="text-4xl font-bold text-[#514BF2] mb-1">12</p>
                <p className="text-sm text-gray-600 mb-1">Scheduled</p>
              </div>

              <p className="text-xs text-gray-500">
                Next Start:{" "}
                <span className="text-[#514BF2] font-medium">Feb 01</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteStats;
