import { InputText } from "primereact/inputtext";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { Editor, type EditorTextChangeEvent } from "primereact/editor";
import DescriptionIcon from "@mui/icons-material/Description";

import type {
  AssessmentInformationProps,
  ClassOption,
  SubjectOption,
} from "../types/AssessmentInformation";

const AssessmentInformation = ({
  title,
  setTitle,
  selectedClass,
  setSelectedClass,
  selectedSubject,
  setSelectedSubject,
  instructions,
  setInstructions,
  classes,
  subjects,
}: AssessmentInformationProps) => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-[#514CF105] p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-2 font-semibold text-[#514CF1]">
        <DescriptionIcon className="text-lg" />
        <span>Assessment Information</span>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#514CF1]">
            Assessment Title
          </label>
          <InputText
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Mid-Term Physics Assessment 2024"
            className="w-full rounded-lg border-gray-200 bg-gray-50 p-3 text-sm focus:border-[#514CF1] focus:ring-0"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#514CF1]">
              Class
            </label>
            <Dropdown
              value={selectedClass}
              onChange={(e: DropdownChangeEvent) => setSelectedClass(e.value)}
              options={classes}
              optionLabel="name"
              placeholder="Select Class"
              className="w-full rounded-lg border-gray-200 bg-gray-50"
              pt={{
                root: { className: "items-center" },
                input: { className: "p-3 text-sm" },
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#514CF1]">
              Subject
            </label>
            <Dropdown
              value={selectedSubject}
              onChange={(e: DropdownChangeEvent) => setSelectedSubject(e.value)}
              options={subjects}
              optionLabel="name"
              placeholder="Select Subject"
              className="w-full rounded-lg border-gray-200 bg-gray-50"
              pt={{
                root: { className: "items-center" },
                input: { className: "p-3 text-sm" },
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#514CF1]">
            Instruction for Students
          </label>
          <Editor
            value={instructions}
            onTextChange={(e: EditorTextChangeEvent) =>
              setInstructions(e.htmlValue ?? "")
            }
            style={{
              height: "120px",
            }}
            placeholder="e.g. Mid-Term Physics Assessment 2024"
            headerTemplate={
              <span className="ql-formats">
                <button className="ql-bold text-[#514CF1]!"></button>
                <button className="ql-italic text-[#514CF1]!"></button>
                <button
                  className="ql-list text-[#514CF1]!"
                  value="ordered"
                ></button>
                <button className="ql-link text-[#514CF1]"></button>
              </span>
            }
            className="custom-quill-editor"
            pt={{
              content: { className: "bg-white rounded-b-lg border-none" },
              toolbar: {
                className:
                  "bg-[#E0E7FF] border-none rounded-t-lg text-[#514CF1]",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AssessmentInformation;
