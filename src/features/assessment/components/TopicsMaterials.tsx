import { useState } from "react";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import {
  MultiSelect,
  type MultiSelectChangeEvent,
} from "primereact/multiselect";
import { FileUpload } from "primereact/fileupload";
import { Slider, type SliderChangeEvent } from "primereact/slider";
import EditDocumentIcon from "@mui/icons-material/EditDocument";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";

import type {
  Subject,
  Topic,
  TopicsMaterialsProps,
} from "../types/TopicsMaterials";

const TopicsMaterials = ({
  selectedSubject,
  setSelectedSubject,
  selectedTopics,
  setSelectedTopics,
  subjects,
  topics,
}: TopicsMaterialsProps) => {
  const [weights, setWeights] = useState<Record<string, number>>({});

  const handleTopicsChange = (e: MultiSelectChangeEvent) => {
    const newTopics: Topic[] = e.value;
    setSelectedTopics(newTopics);

    const newWeights = { ...weights };
    let weightsChanged = false;

    newTopics.forEach((topic) => {
      if (newWeights[topic.code] === undefined) {
        newWeights[topic.code] = 50;
        weightsChanged = true;
      }
    });

    if (weightsChanged) {
      setWeights(newWeights);
    }
  };

  const handleTopicRemove = (topic: Topic) => {
    const updatedTopics = selectedTopics.filter((t) => t.code !== topic.code);
    setSelectedTopics(updatedTopics);
  };

  const handleWeightChange = (code: string, value: number) => {
    setWeights({ ...weights, [code]: value });
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Topics & Materials Section */}
      <div className="rounded-2xl border border-[#514CF10D] bg-[#514CF105] p-6">
        <div className="mb-6 flex items-center gap-2 font-bold text-[#514CF1]">
          <EditDocumentIcon className="text-lg" />
          <span>Topics & Materials</span>
        </div>

        <div className="flex flex-col gap-6">
          {/* Subject */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#514CF1]">
              Subject
            </label>
            <Dropdown
              value={selectedSubject}
              onChange={(e: DropdownChangeEvent) => setSelectedSubject(e.value)}
              options={subjects}
              optionLabel="name"
              placeholder="Mathematics"
              className="w-full rounded-lg border-gray-200 bg-gray-50 font-bold text-[#514CF180] focus:border-[#514CF1] focus:ring-0"
              pt={{
                input: { className: "p-3 text-sm text-[#514CF180]" },
              }}
            />
          </div>

          {/* Topics */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#514CF1]">
              Topics (Multi-select)
            </label>

            {/* MultiSelect Component */}
            <div className="w-full">
              <MultiSelect
                value={selectedTopics}
                onChange={handleTopicsChange}
                options={topics}
                optionLabel="name"
                placeholder="search for more topics"
                display="chip"
                filter
                className="w-full rounded-lg border-gray-200 bg-gray-50 focus:border-[#514CF1]"
                pt={{
                  root: {
                    className:
                      "w-full border border-gray-200 bg-gray-50 rounded-lg",
                  },
                  label: { className: "p-3 text-sm text-[#514CF180]" },
                  token: { className: "bg-[#514CF1] text-white" },
                  removeTokenIcon: { className: "ml-2 text-white" },
                  item: { className: "text-sm p-3 hover:bg-[#514CF10D]" },
                  header: {
                    className: "p-3 bg-gray-50 border-b border-gray-100",
                  },
                }}
              />
            </div>

            {/* Popular Tags */}
            <div className="mt-2 flex gap-2">
              <span className="text-xs font-bold text-[#514CF1]">Popular</span>
              <span className="cursor-pointer rounded bg-[#514CF110] px-2 py-0.5 text-xs text-[#514CF1] hover:bg-[#514CF120]">
                + Geometry
              </span>
              <span className="cursor-pointer rounded bg-[#514CF110] px-2 py-0.5 text-xs text-[#514CF1] hover:bg-[#514CF120]">
                + Statistics
              </span>
              <span className="cursor-pointer rounded bg-[#514CF110] px-2 py-0.5 text-xs text-[#514CF1] hover:bg-[#514CF120]">
                + Trigonometry
              </span>
            </div>
          </div>

          {selectedTopics && selectedTopics.length > 0 && (
            <div className="mt-2">
              <label className="mb-4 block text-sm font-bold text-[#514CF1]">
                Weighting
              </label>
              <div className="flex flex-col gap-3">
                {selectedTopics.map((topic) => (
                  <div
                    key={topic.code}
                    className="group relative flex flex-col gap-3 rounded-xl bg-[#514CF105] p-4"
                  >
                    <div className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100">
                      <CloseIcon
                        className="cursor-pointer text-[#514CF180] hover:text-[#514CF1]"
                        style={{ fontSize: "16px" }}
                        onClick={() => handleTopicRemove(topic)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#514CF1]">
                        {topic.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-8 font-mono text-xs text-[#514CF160]">
                        05%
                      </span>
                      <Slider
                        value={weights[topic.code] || 50}
                        onChange={(e: SliderChangeEvent) =>
                          handleWeightChange(topic.code, e.value as number)
                        }
                        className="flex-1"
                        pt={{
                          range: { className: "bg-[#514CF1]" },
                          handle: {
                            className:
                              "bg-[#514CF1] border-2 border-white shadow-sm",
                          },
                        }}
                      />
                      <span className="w-8 text-right font-mono text-xs text-[#514CF160]">
                        100%
                      </span>
                    </div>
                    <div className="-mt-1 flex justify-end">
                      <span className="text-xs font-bold text-[#514CF1]">
                        {weights[topic.code] || 50}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reference Materials Section */}
      <div>
        <div className="flex items-center text-[#514CF1]">
          <span className="text-sm font-bold">
            Reference Materials{" "}
            <span className="text-[#514CF180]">(Optional)</span>
          </span>
        </div>
        <p className="mb-2 text-xs text-[#A1AEF2]">
          Add questions manually or use AI tools.
        </p>
        <div className="w-full rounded-2xl bg-white">
          <FileUpload
            name="demo[]"
            url={"/api/upload"}
            mode="basic"
            accept="image/*,application/pdf"
            maxFileSize={10000000}
            onSelect={(e) => console.log(e)}
            chooseLabel="Click to upload notes or past papers"
            className="hidden w-full custom-file-upload-basic"
          />
          <div className="flex w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#514CF10D] bg-[#514CF105] p-12 text-center transition-colors hover:border-[#514CF1]">
            <CloudUploadIcon
              style={{ fontSize: "2rem", color: "#514CF1" }}
              className="mb-3"
            />
            <p className="font-regular text-lg text-[#514CF1]">
              Click to upload notes or past papers
            </p>
            <p className="mt-1 text-xs text-[#A1AEF2]">
              Supported: PDF, DOCX, TXT (Max 10MB)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsMaterials;
