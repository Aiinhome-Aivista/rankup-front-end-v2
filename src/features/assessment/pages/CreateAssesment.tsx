import { useState } from "react";
import { Button } from "primereact/button";
import {
  TabView,
  TabPanel,
  type TabViewTabChangeEvent,
} from "primereact/tabview";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// --- Child Components ---
// Ensure these exist in features/assessment/components/ui/
import AssessmentInformation from "../components/AssessmentInformation";
import QuestionWorkspace from "../components/QuestionWorkspace";
import ScheduleDuration from "../components/ScheduleDuration";
import TestSettings from "../components/TestSettings";
import NeedInspiration from "../components/NeedInspiration";

import type {
  ClassOption,
  SubjectOption,
} from "../types/CreateAssesment";

const CreateAssesment = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const navigate = useNavigate();


  // --- Form State ---
  const [title, setTitle] = useState<string>("");
  const [selectedClass, setSelectedClass] = useState<ClassOption | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<SubjectOption | null>(
    null
  );
  const [instructions, setInstructions] = useState<string>("");

  // --- Date/Time State ---
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [duration, setDuration] = useState<number>(60);

  // --- Settings State ---
  const [randomize, setRandomize] = useState<boolean>(true);
  const [antiCheat, setAntiCheat] = useState<boolean>(true);
  const [attempts, setAttempts] = useState<number>(1);

  // --- AI / Question State ---
  const [aiTopic, setAiTopic] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(50);
  const [numQuestions, setNumQuestions] = useState<number>(5);

  // --- Mock Data ---
  const classes: ClassOption[] = [
    { name: "Class 10 A", code: "10A" },
    { name: "Class 10 B", code: "10B" },
  ];
  const subjects: SubjectOption[] = [
    { name: "Physics", code: "PHY" },
    { name: "Maths", code: "MAT" },
  ];

  const header = (
    <div className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("student/dashboard")}
          className="rounded-full hover:bg-[#514CF10D] transition-colors curaor-pointer"
        >
          <ArrowLeft className="h-6 w-6 text-[#514CF1] cursor-pointer" />
        </button>
     <div>
         <h1 className="text-xl font-bold text-[#514CF1]">
          Create New Assessment
        </h1>
        <p className="text-sm text-[#A1AEF2]">
          Configure details, build questions, and publish your test.
        </p>
     </div>
      </div>
      <div className="flex gap-3">
        <Button
          label="Save Draft"
          className="p-button-text border border-[#514CF105] bg-[#E0E7FF]! text-[#514CF1] hover:bg-[#514CF105]"
          style={{ color: "#514CF1", background: "white" }}
          rounded
        />
        <Button
          label="Publish"
          className="border-none bg-[#514CF1] hover:bg-[#403BC0]"
          rounded
        />
      </div>
    </div>
  );

  return (
    <div className="flex h-screen flex-col bg-[#F8F9FA]">
      <div className="flex-1 overflow-y-auto bg-white p-8 font-sans">
        {header}

        <div className="card">
          <TabView
            activeIndex={activeIndex}
            onTabChange={(e: TabViewTabChangeEvent) => setActiveIndex(e.index)}
            className="custom-tabview"
            pt={{
              nav: {
                className:
                  "border-b border-gray-200 mb-6 bg-transparent w-full",
              },
              ink: { className: "bg-[#514CF1]" },
            }}
          >
            <TabPanel
              header="General Details"
              headerClassName={
                activeIndex === 0
                  ? "!text-[#514CF1] font-medium"
                  : "!text-[#514CF180] font-medium"
              }
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
                {/* Left Column */}
                <div className="flex flex-col gap-8 lg:col-span-3">
                  <AssessmentInformation
                    title={title}
                    setTitle={setTitle}
                    selectedClass={selectedClass}
                    setSelectedClass={setSelectedClass}
                    selectedSubject={selectedSubject}
                    setSelectedSubject={setSelectedSubject}
                    instructions={instructions}
                    setInstructions={setInstructions}
                    classes={classes}
                    subjects={subjects}
                  />

                  <QuestionWorkspace
                    aiTopic={aiTopic}
                    setAiTopic={setAiTopic}
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                    numQuestions={numQuestions}
                    setNumQuestions={setNumQuestions}
                  />
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6 lg:col-span-2">
                  <ScheduleDuration
                    startDate={startDate}
                    setStartDate={setStartDate}
                    startTime={startTime}
                    setStartTime={setStartTime}
                    endDate={endDate}
                    setEndDate={setEndDate}
                    endTime={endTime}
                    setEndTime={setEndTime}
                    duration={duration}
                    setDuration={setDuration}
                  />

                  <div className="grid grid-cols-2 gap-6">
                    <TestSettings
                      randomize={randomize}
                      setRandomize={setRandomize}
                      antiCheat={antiCheat}
                      setAntiCheat={setAntiCheat}
                      attempts={attempts}
                      setAttempts={setAttempts}
                    />

                    <NeedInspiration />
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel
              header="Question Building"
              headerClassName={
                activeIndex === 1
                  ? "!text-[#514CF1] font-medium"
                  : "!text-[#514CF180] font-medium"
              }
            >
              <p className="p-4">Question Building Content</p>
            </TabPanel>

            <TabPanel
              header="Preview Test"
              headerClassName={
                activeIndex === 2
                  ? "!text-[#514CF1] font-medium"
                  : "!text-[#514CF180] font-medium"
              }
            >
              <p className="p-4">Preview Test Content</p>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  );
};

export default CreateAssesment;
