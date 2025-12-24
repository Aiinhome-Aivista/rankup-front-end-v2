import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { ProgressBar } from "primereact/progressbar";

import type { AISummaryProps } from "../types/AISummary";

const AISummary = ({
  subject,
  topics,
  difficulty,
  numQuestions,
  duration,
}: AISummaryProps) => {
  // Calculate difficulty value for progress bar
  const getDifficultyValue = () => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return 30;
      case "intermediate":
        return 60;
      case "advanced":
        return 90;
      default:
        return 60;
    }
  };

  return (
    <div className="relative h-full overflow-hidden rounded-2xl bg-[#514CF1] px-4 pb-2 pt-4 text-white">
      <div className="relative z-10 mb-6 flex items-center gap-2">
        <AutoAwesomeIcon className="text-yellow-300" />
        <span className="text-lg font-semibold">AI Summary</span>
      </div>

      <div className="relative z-10 mb-6 grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
        <div>
          <p className="mb-1 text-xs opacity-70">Subject</p>
          <p className="font-medium">{subject ? subject.name : "-"}</p>
        </div>
        <div>
          <p className="mb-1 text-xs opacity-70">Topic Mix</p>
          <div className="font-medium">
            {topics && topics.length > 0
              ? topics.slice(0, 2).map((t, i) => (
                <div key={i} className="truncate">
                  {t.name} {Math.floor(100 / topics.length)}%
                </div>
              ))
              : "-"}
            {topics && topics.length > 2 && (
              <div className="text-xs opacity-70">
                +{topics.length - 2} more
              </div>
            )}
          </div>
        </div>
        <div>
          <p className="mb-1 text-xs opacity-70">Focus</p>
          <p className="font-medium">Balanced</p>
        </div>
        <div>
          <p className="mb-1 text-xs opacity-70">Est. Difficulty</p>
          <ProgressBar
            value={getDifficultyValue()}
            showValue={false}
            style={{ height: "6px", backgroundColor: "rgba(255,255,255,0.2)" }}
            color="white"
            className="mt-2"
          />

          <p className="mb-1 mt-4 text-xs opacity-70">Est. Duration</p>
          <p className="font-medium">{duration || "30 Mins"}</p>
        </div>
      </div>

      <div className="relative z-10 mb-6 rounded-lg bg-white/10 p-3 text-xs">
        *The AI will prioritize{" "}
        {topics && topics.length > 0 ? topics[0].name : "selected topics"}{" "}
        questions and adapt difficulty based on your performance in real-time.
      </div>

      <div className="relative z-10 flex gap-4">
        <button
          type="button"
          className="w-full cursor-pointer rounded-sm border border-[#FFFFFF80] px-4 py-2 font-bold text-white hover:bg-white/10"
        >
          Upload your syllabus
        </button>
        <button
          type="button"
          className="w-full cursor-pointer rounded-sm border-none bg-white font-bold text-[#514CF1] hover:bg-gray-100"
        >
          Generate Assessment
        </button>
      </div>
    </div>
  );
};

export default AISummary;
