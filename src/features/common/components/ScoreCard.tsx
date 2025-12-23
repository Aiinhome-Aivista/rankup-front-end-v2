import CalculateIcon from "@mui/icons-material/Calculate";
import BiotechIcon from "@mui/icons-material/Biotech";
import ScienceIcon from "@mui/icons-material/Science";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";
import type { SvgIconComponent } from "@mui/icons-material";

// --- Assets ---
import face2 from "@/assets/icons/face_2.svg";

// --- Types ---
interface SubjectData {
  id: number;
  name: string;
  Icon: SvgIconComponent;
  blueScore: number;
  redScore: number;
}

// --- Data ---
const subjects: SubjectData[] = [
  {
    id: 1,
    name: "Mathematics",
    Icon: CalculateIcon,
    blueScore: 5,
    redScore: 1,
  },
  {
    id: 2,
    name: "Biology",
    Icon: BiotechIcon,
    blueScore: 6,
    redScore: 0,
  },
  {
    id: 3,
    name: "Chemistry",
    Icon: ScienceIcon,
    blueScore: 3,
    redScore: 3,
  },
  {
    id: 4,
    name: "Geography",
    Icon: PublicIcon,
    blueScore: 5,
    redScore: 1,
  },
];

const ScoreCard = () => {
  return (
    <div className="relative h-full w-full">
      {/* Main Card Container */}
      <div className="relative z-10 h-full rounded-[30px] border-3 border-[#FFFFFF38] p-4 text-[#A1AEF2] shadow-2xl">
        {/* Title */}
        <h1 className="flex items-center justify-center text-xl font-extrabold text-[#A1AEF2]">
          Score Card
        </h1>

        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center rounded-2xl">
            <img src={face2} alt="Profile" className="h-10 w-10" />
          </div>
          <h1 className="text-lg font-light text-[#A1AEF2]">Sumaya</h1>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-[#A5C9FF]">15</span>
            <span className="ml-1 text-lg text-white/70">/20</span>
          </div>
        </div>

        {/* Subject Grid */}
        <div className="grid grid-cols-2 gap-3 pl-4">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="flex w-full flex-col items-center justify-center rounded-2xl border border-white/5 bg-[#FFFFFF38] p-2 backdrop-blur-sm"
            >
              <subject.Icon sx={{ fontSize: 24, mb: 0.5, opacity: 0.9 }} />
              <span className="text-[11px] font-medium">{subject.name}</span>
              <div className="mt-2 flex gap-3">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-[10px] font-bold">
                    {subject.blueScore}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <span className="text-[10px] font-bold">
                    {subject.redScore}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Star Handle */}
      <div className="absolute top-1/3 flex w-6 rotate-180 flex-col items-center justify-center gap-2 rounded-l-2xl bg-[#FFFFFF38] py-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <StarIcon key={i} sx={{ fontSize: 16, color: "#A1AEF2" }} />
        ))}
      </div>
    </div>
  );
};

export default ScoreCard;