import { InputText } from "primereact/inputtext";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { MultiSelect, type MultiSelectChangeEvent } from 'primereact/multiselect';
import { Checkbox, type CheckboxChangeEvent } from 'primereact/checkbox';
import { Editor, type EditorTextChangeEvent } from "primereact/editor";
import DescriptionIcon from "@mui/icons-material/Description";

import type {
  AssessmentInformationProps,

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
  assignType,
  setAssignType,
  studentList,
  studentIds,
  setStudentIds,
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
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-[#514CF1]">
              Select Students *
            </label>
            <div className="flex items-center gap-2">
              <Checkbox
                inputId="assignAll"
                checked={assignType === 'all'}
                onChange={(e: CheckboxChangeEvent) => setAssignType(e.checked ? 'all' : 'specific')}
                pt={{
                  box: { className: assignType === 'all' ? 'bg-[#514CF1] border-[#514CF1]' : 'border-gray-300' }
                }}
              />
              <label htmlFor="assignAll" className="text-sm text-gray-700 cursor-pointer">
                Assign to all filtered students
              </label>
            </div>
          </div>

          <MultiSelect
            value={assignType === 'all' ? (studentList?.map(s => s.student_id) || []) : studentIds}
            onChange={(e: MultiSelectChangeEvent) => setStudentIds && setStudentIds(e.value)}
            options={studentList || []}
            optionLabel="full_name"
            optionValue="student_id"
            placeholder={assignType === 'all' ? "All Students Selected" : "Select Students"}
            disabled={assignType === 'all'}
            maxSelectedLabels={10}
            className="w-full rounded-lg border-gray-200 bg-gray-50"
            pt={{
              root: { className: `items-center ${assignType === 'all' ? 'opacity-70' : ''}` },
              input: { className: "p-3 text-sm" },
            }}
            emptyMessage="No students found."
          />

          <div className="text-sm text-gray-500">
            {assignType === 'all' ? (studentList?.length || 0) : (studentIds?.length || 0)} student(s) selected
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
