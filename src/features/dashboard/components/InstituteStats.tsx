import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import FunctionsIcon from "@mui/icons-material/Functions";

const InstituteStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {/* Updates Section - Teachers & Students */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-[#514BF2]">Updates</h3>
          <span className="text-xs font-medium text-green-500 bg-green-50 px-3 py-1 rounded-full">
            Student-Teacher Ratio 26:1
          </span>
          <span className="text-xs font-medium text-[#514BF2]">Optimal</span>
        </div>

        <div className="flex items-center gap-8 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <PeopleIcon className="text-[#514BF2]" sx={{ fontSize: 32 }} />
            </div>
            <p className="text-4xl font-bold text-[#514BF2]">48</p>
            <p className="text-sm text-gray-600">Teachers</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <GroupsIcon className="text-[#514BF2]" sx={{ fontSize: 32 }} />
            </div>
            <p className="text-4xl font-bold text-[#514BF2]">1,250</p>
            <p className="text-sm text-gray-600">Students</p>
          </div>
        </div>

        <button className="text-sm font-medium text-[#514BF2] hover:underline">
          View Directory →
        </button>
      </div>

      {/* Academic Lifecycle */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-[#514BF2]">
            Academic Lifecycle
          </h3>
          <button className="text-sm font-medium text-[#514BF2] hover:underline">
            Manage Classes →
          </button>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <div className="w-12 h-12 rounded-full bg-[#514CF105] flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
            </div>
            <p className="text-3xl font-bold text-[#514BF2]">36</p>
            <p className="text-xs text-gray-600">Current Classes</p>
            <div className="flex gap-1 mt-1 justify-center">
              <ScienceIcon sx={{ fontSize: 16 }} className="text-red-500" />
              <HistoryEduIcon
                sx={{ fontSize: 16 }}
                className="text-yellow-500"
              />
              <FunctionsIcon sx={{ fontSize: 16 }} className="text-blue-500" />
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <div className="w-12 h-12 rounded-full bg-[#514CF105] flex items-center justify-center">
                <span className="text-2xl">▶️</span>
              </div>
            </div>
            <p className="text-3xl font-bold text-[#514BF2]">142</p>
            <p className="text-xs text-gray-600">Previous Classes</p>
            <p className="text-xs text-gray-400 mt-1">Avg Performance: 85%</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <div className="w-12 h-12 rounded-full bg-[#514CF105] flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
            </div>
            <p className="text-3xl font-bold text-[#514BF2]">12</p>
            <p className="text-xs text-gray-600">Scheduled</p>
            <p className="text-xs text-gray-400 mt-1">Next Start: Feb 01</p>
          </div>
        </div>
      </div>

      {/* Class Performance Summary */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100">
        <h3 className="text-sm font-semibold text-[#514BF2] mb-4">
          Class Performance Benchmarking
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">
              Average Performance
            </span>
            <span className="text-lg font-bold text-[#514BF2]">102</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Class 10</span>
            <span className="text-sm text-gray-600">Class 9</span>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              Top Performing: Class 3-A (99%)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteStats;
