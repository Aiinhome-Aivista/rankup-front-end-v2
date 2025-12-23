import { useState } from "react";
import TopicsMaterials from "../components/TopicsMaterials";
import Configuration from "../components/Configuration";
import AISummary from "../components/AISummary";

// --- Types ---
export interface Subject {
  name: string;
  code: string;
}

export interface Topic {
  name: string;
  code: string;
}

const SelfAssesment = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // --- State ---
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([
    { name: "Algebra", code: "ALG" },
    { name: "Calculus", code: "CAL" },
  ]);
  const [difficulty, setDifficulty] = useState<string>("intermediate"); // beginner, intermediate, advanced
  const [assessmentTypes, setAssessmentTypes] = useState<string[]>([
    "Multiple Choice",
  ]);
  const [numQuestions, setNumQuestions] = useState<number>(15);
  const [timeLimit, setTimeLimit] = useState<string>("30 Minutes");

  // --- Mock Data ---
  const subjects: Subject[] = [
    { name: "Mathematics", code: "MAT" },
    { name: "Physics", code: "PHY" },
    { name: "Chemistry", code: "CHE" },
  ];

  const topics: Topic[] = [
    { name: "Algebra", code: "ALG" },
    { name: "Calculus", code: "CAL" },
    { name: "Geometry", code: "GEO" },
    { name: "Statistics", code: "STA" },
    { name: "Trigonometry", code: "TRI" },
  ];

  const timeOptions: string[] = [
    "15 Minutes",
    "30 Minutes",
    "45 Minutes",
    "60 Minutes",
    "90 Minutes",
  ];

  const header = (
    <div className="mb-8 mt-5 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold text-[#514CF1]">Self-Assessment</h1>
        <p className="mt-1 text-sm text-[#A1AEF2]">
          Configure your personalized AI study session. Select your topics and
          difficulty to target your weak points effectively.
        </p>
      </div>
      <div className="flex gap-3">
        <button className="rounded-full border border-[#514CF105] bg-[#514CF10D] px-4 py-2 text-sm font-bold text-[#514CF1] hover:bg-[#514CF105]">
          Save Draft
        </button>
        <button className="rounded-full border-none bg-[#514CF1] px-4 py-2 text-sm font-bold text-white hover:bg-[#403BC0]">
          Publish
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen flex-col bg-[#F8F9FA]">
      <div className="flex-1 bg-white pl-14 pr-6">
        {header}

        <div>
          {/* Tabs */}
          <div className="mb-6 flex border-b border-[#514CF10D]">
            {["General Details", "Question Building", "Preview Test"].map(
              (tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`border-b-2 px-4 py-2 transition-colors duration-200 ${
                    activeIndex === index
                      ? "border-[#514CF1] font-bold text-[#514CF1]"
                      : "border-transparent font-bold text-[#514CF180] hover:text-[#514CF1]"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* Tab Content */}
          {activeIndex === 0 && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
              {/* Left Column */}
              <div className="flex flex-col gap-8 lg:col-span-3">
                <TopicsMaterials
                  selectedSubject={selectedSubject}
                  setSelectedSubject={setSelectedSubject}
                  selectedTopics={selectedTopics}
                  setSelectedTopics={setSelectedTopics}
                  subjects={subjects}
                  topics={topics}
                />
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-6 lg:col-span-2">
                <Configuration
                  difficulty={difficulty}
                  setDifficulty={setDifficulty}
                  assessmentTypes={assessmentTypes}
                  setAssessmentTypes={setAssessmentTypes}
                  numQuestions={numQuestions}
                  setNumQuestions={setNumQuestions}
                  timeLimit={timeLimit}
                  setTimeLimit={setTimeLimit}
                  timeOptions={timeOptions}
                />

                <AISummary
                  subject={selectedSubject}
                  topics={selectedTopics}
                  difficulty={difficulty}
                  numQuestions={numQuestions}
                  duration={timeLimit}
                />
              </div>
            </div>
          )}
          {activeIndex === 1 && (
            <p className="p-4">Question Building Content (AI Auto-generated)</p>
          )}
          {activeIndex === 2 && <p className="p-4">Preview Test Content</p>}
        </div>
      </div>
    </div>
  );
};

export default SelfAssesment;
