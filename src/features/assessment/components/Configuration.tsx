import { Checkbox, type CheckboxChangeEvent } from "primereact/checkbox";
import { Slider, type SliderChangeEvent } from "primereact/slider";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import ScheduleIcon from "@mui/icons-material/Schedule";
import BarChartIcon from "@mui/icons-material/BarChart";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { type SvgIconComponent } from "@mui/icons-material";

// --- Types ---
interface ConfigurationProps {
  difficulty: string;
  setDifficulty: (value: string) => void;
  assessmentTypes: string[];
  setAssessmentTypes: (value: string[]) => void;
  numQuestions: number;
  setNumQuestions: (value: number) => void;
  timeLimit: string;
  setTimeLimit: (value: string) => void;
  timeOptions: string[];
}

interface DifficultyOption {
  name: string;
  desc: string;
  value: string;
  icon: SvgIconComponent;
}

const Configuration = ({
  difficulty,
  setDifficulty,
  assessmentTypes,
  setAssessmentTypes,
  numQuestions,
  setNumQuestions,
  timeLimit,
  setTimeLimit,
  timeOptions,
}: ConfigurationProps) => {
  const difficulties: DifficultyOption[] = [
    {
      name: "Beginner",
      desc: "Core concepts & basics",
      value: "beginner",
      icon: BarChartIcon,
    },
    {
      name: "Intermediate",
      desc: "Application & logic",
      value: "intermediate",
      icon: SignalCellularAltIcon,
    },
    {
      name: "Advanced",
      desc: "Complex problems",
      value: "advanced",
      icon: TrendingUpIcon,
    },
  ];

  const onAssessmentTypeChange = (e: CheckboxChangeEvent) => {
    let _assessmentTypes = [...assessmentTypes];

    if (e.checked) {
      _assessmentTypes.push(e.value);
    } else {
      _assessmentTypes.splice(_assessmentTypes.indexOf(e.value), 1);
    }

    setAssessmentTypes(_assessmentTypes);
  };

  return (
    <div className="h-full rounded-2xl border border-[#514CF10D] bg-[#514CF105] p-6">
      <div className="mb-6 flex items-center gap-2 font-bold text-[#514CF1]">
        <ScheduleIcon className="text-lg" />
        <span>Configuration</span>
      </div>

      <div className="flex flex-col gap-8">
        {/* Difficulty Level */}
        <div>
          <label className="mb-3 block text-sm font-bold text-[#514CF1]">
            Difficulty Level
          </label>
          <div className="grid grid-cols-3 gap-4">
            {difficulties.map((item) => {
              const Icon = item.icon;
              const isSelected = difficulty === item.value;
              return (
                <div
                  key={item.value}
                  onClick={() => setDifficulty(item.value)}
                  className={`
                                cursor-pointer flex flex-col items-center justify-center p-3 rounded-xl border transition-all text-center
                                ${
                                  isSelected
                                    ? "border-[#514CF1] text-[#514CF1] bg-[#514CF10D]"
                                    : "bg-[#514CF10D] border-[#514CF11A] text-[#514CF1] hover:border-[#514CF180]"
                                }
                            `}
                >
                  <Icon
                    className={`mb-2 ${
                      isSelected ? "text-[#514CF1]" : "text-[#514CF1]"
                    }`}
                  />
                  <span className="text-xs font-bold">{item.name}</span>
                  <span className="mt-1 text-[10px] opacity-70">
                    {item.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Assessment Type */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-[#514CF1]">
            Assessment Type
          </label>
          <div className="flex gap-6">
            <div className="flex align-items-center">
              <Checkbox
                inputId="cb1"
                value="Multiple Choice"
                onChange={onAssessmentTypeChange}
                checked={assessmentTypes.includes("Multiple Choice")}
                pt={{
                  box: {
                    className: assessmentTypes.includes("Multiple Choice")
                      ? "bg-[#514CF1] border-[#514CF1]"
                      : "",
                  },
                }}
              />
              <label htmlFor="cb1" className="ml-2 text-sm text-gray-600">
                Multiple Choice
              </label>
            </div>
            <div className="flex align-items-center">
              <Checkbox
                inputId="cb2"
                value="Short Answers"
                onChange={onAssessmentTypeChange}
                checked={assessmentTypes.includes("Short Answers")}
                pt={{
                  box: {
                    className: assessmentTypes.includes("Short Answers")
                      ? "bg-[#514CF1] border-[#514CF1]"
                      : "",
                  },
                }}
              />
              <label htmlFor="cb2" className="ml-2 text-sm text-gray-600">
                Short Answers
              </label>
            </div>
            <div className="flex align-items-center">
              <Checkbox
                inputId="cb3"
                value="True/False"
                onChange={onAssessmentTypeChange}
                checked={assessmentTypes.includes("True/False")}
                pt={{
                  box: {
                    className: assessmentTypes.includes("True/False")
                      ? "bg-[#514CF1] border-[#514CF1]"
                      : "",
                  },
                }}
              />
              <label htmlFor="cb3" className="ml-2 text-sm text-gray-600">
                True/False
              </label>
            </div>
          </div>
        </div>

        {/* Number of Questions */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#514CF1]">
              Number of Questions
            </label>
            <span className="rounded bg-[#514CF110] px-2 py-1 text-xs font-bold text-[#514CF1]">
              {numQuestions}
            </span>
          </div>
          <Slider
            value={numQuestions}
            onChange={(e: SliderChangeEvent) =>
              setNumQuestions(e.value as number)
            }
            min={5}
            max={50}
            className="w-full"
            pt={{
              range: { className: "bg-[#514CF1]" },
              handle: { className: "bg-[#514CF1] ring-2 ring-[#514CF150]" },
            }}
          />
          <div className="mt-2 flex justify-between text-xs text-gray-400">
            <span>5</span>
            <span>50</span>
          </div>
        </div>

        {/* Time Limit */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#514CF1]">
            Time Limit(Optional)
          </label>
          <Dropdown
            value={timeLimit}
            onChange={(e: DropdownChangeEvent) => setTimeLimit(e.value)}
            options={timeOptions}
            placeholder="Select Duration"
            className="w-full rounded-lg border-gray-200 bg-gray-50 focus:border-[#514CF1] focus:ring-0"
            pt={{
              input: { className: "p-3 text-sm" },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Configuration;
