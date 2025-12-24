import { InputText } from "primereact/inputtext";
import { Slider, type SliderChangeEvent } from "primereact/slider";
import { Button } from "primereact/button";
import AddIcon from "@mui/icons-material/Add";
import SubjectIcon from "@mui/icons-material/Subject";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import StarIcon from "@mui/icons-material/Star";
import BoltIcon from "@mui/icons-material/Bolt";

import type { QuestionWorkspaceProps } from "../types/QuestionWorkspace";

const QuestionWorkspace = ({
  aiTopic,
  setAiTopic,
  difficulty,
  setDifficulty,
  numQuestions,
  setNumQuestions,
}: QuestionWorkspaceProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-gray-800">Question Workspace</h3>
          <p className="text-xs text-gray-500">
            Add questions manually or use AI tools.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            label="Add MCQ"
            icon={<AddIcon className="mr-2" />}
            className="p-button-text bg-[#E0E7FF]! px-3 py-2 text-sm text-[#514CF1] hover:bg-[#E0E7FF]"
            rounded
          />
          <Button
            label="Add Subjective"
            icon={<SubjectIcon className="mr-2" />}
            className="p-button-text bg-[#E0E7FF]! px-3 py-2 text-sm text-[#514CF1] hover:bg-[#E0E7FF]"
            rounded
          />
          <Button
            label="Upload PDF"
            icon={<PictureAsPdfIcon className="mr-2" />}
            className="p-button-text bg-[#E0E7FF]! px-3 py-2 text-sm text-[#514CF1] hover:bg-[#E0E7FF]"
            rounded
          />
        </div>
      </div>

      {/* AI Generator Card */}
      <div className="relative overflow-hidden rounded-2xl border border-pink-100 bg-[#514CF105] p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-2 font-semibold text-[#514CF1]">
          <StarIcon className="text-lg" />
          <span>AI Questions Generator</span>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#514CF1]">
              Topic or Concept
            </label>
            <InputText
              value={aiTopic}
              onChange={(e) => setAiTopic(e.target.value)}
              placeholder="e.g. Newton's Laws of Motion"
              className="w-full rounded-lg border-gray-200 bg-gray-50 p-3 text-sm focus:border-[#514CF1] focus:ring-0"
            />
          </div>

          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center">
            <div className="flex w-full flex-1 flex-col gap-2">
              <div className="mb-2 flex justify-between text-xs font-medium tracking-wider text-blue-300">
                <span>EASY</span>
                <span className="rounded bg-blue-50 px-2 py-0.5 text-blue-500">
                  Medium
                </span>
                <span>HARD</span>
              </div>
              <Slider
                value={difficulty}
                onChange={(e: SliderChangeEvent) =>
                  setDifficulty(e.value as number)
                }
                className="w-full"
              />
              <div className="mt-1 text-xs font-medium text-gray-400">
                Difficult Level
              </div>
            </div>
            <div className="w-full flex-1">
              <label className="mb-2 block text-sm font-semibold text-[#514CF1]">
                Number of Questions
              </label>
              <div className="flex gap-2">
                {[5, 10, 15, 20].map((num) => (
                  <button
                    key={num}
                    onClick={() => setNumQuestions(num)}
                    className={`flex-1 cursor-pointer rounded-full border py-2 text-sm ${numQuestions === num
                        ? "border-[#514CF1] bg-[#514CF1] text-white"
                        : "border-gray-200 bg-white text-gray-500 hover:border-[#514CF1]"
                      }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-2 flex gap-4">
            <Button
              label="Replace Current"
              className="flex-1 rounded-full border! border-[#514CF11A]! bg-[#FFFFFF]! p-3 text-sm text-[#514CF180]! hover:bg-gray-50"
              rounded
            />
            <Button
              className="flex-1 justify-center rounded-full border-none bg-[#514CF1] p-3 text-sm hover:bg-[#403BC0]"
              rounded
            >
              <div className="flex items-center gap-2">
                <BoltIcon />
                <span>Generate & Append</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionWorkspace;
