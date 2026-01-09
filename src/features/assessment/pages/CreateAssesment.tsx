import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import {
  TabView,
  TabPanel,
  type TabViewTabChangeEvent,
} from "primereact/tabview";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { getAllSubjects } from "../api/subjectService";
import { assignAssessment } from "../api/assesmentService";
import { getStudentsByClassAndSubject } from "../api/studentService";
import { format } from "date-fns";
import type { AssignAssessmentRequest } from "../types/AssessmentServiceTypes";
import type { Student } from "../types/StudentTypes";

// --- Child Components ---
// Ensure these exist in features/assessment/components/ui/
import AssessmentInformation from "../components/AssessmentInformation";
import QuestionWorkspace from "../components/QuestionWorkspace";
import ScheduleDuration from "../components/ScheduleDuration";
import TestSettings from "../components/TestSettings";
import NeedInspiration from "../components/NeedInspiration";
import { useToast } from '@/shared/context/ToastContext';

import type {
  ClassOption,
  SubjectOption,
} from "../types/CreateAssesment";

const CreateAssesment = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { showToast } = useToast();
  const navigate = useNavigate();


  // --- Form State ---
  const [title, setTitle] = useState<string>("");
  const [selectedClass, setSelectedClass] = useState<ClassOption | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<SubjectOption | null>(
    null
  );
  const [instructions, setInstructions] = useState("");

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
  const [assignType, setAssignType] = useState<'all' | 'specific'>('specific');
  const [studentIds, setStudentIds] = useState<number[]>([]);
  const [studentList, setStudentList] = useState<Student[]>([]);



  // --- AI / Question State ---
  const [aiTopic, setAiTopic] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(50);
  const [numQuestions, setNumQuestions] = useState<number>(5);

  // --- Mock Data ---
  const classes: ClassOption[] = [
    { name: "Class 1" },
    { name: "Class 2" },
    { name: "Class 3" },
    { name: "Class 4" },
    { name: "Class 5" },
    { name: "Class 6" },
    { name: "Class 7" },
    { name: "Class 8" },
    { name: "Class 9" },
    { name: "Class 10" },
  ];
  const [subjects, setSubjects] = useState<SubjectOption[]>([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const data = await getAllSubjects();
        setSubjects(data);
      } catch (error) {
        // Error is logged in the service
      }
    };
    fetchSubjects();
  }, []);

  // Fetch Students when Class or Subject changes
  useEffect(() => {
    const fetchStudents = async () => {
      setStudentIds([]); // Reset selection on change
      if (selectedClass && selectedSubject) {
        // Parse Class Grade
        const classGradeStr = selectedClass.name.replace(/\D/g, "");
        const classGrade = classGradeStr ? parseInt(classGradeStr, 10) : 0;

        if (classGrade > 0 && selectedSubject.id) {
          const students = await getStudentsByClassAndSubject(selectedSubject.id, classGrade);
          setStudentList(students);
        }
      } else {
        setStudentList([]);
      }
    };
    fetchStudents();
  }, [selectedClass, selectedSubject]);

  const handlePublish = async () => {
    if (!selectedClass || !selectedSubject || !startDate || !endDate) {
      showToast('warn', 'Missing Fields', 'Please fill in all required fields (Class, Subject, Start/End Date).');
      return;
    }

    setIsLoading(true);

    try {
      // 1. Parse Class Grade
      // Assuming class name format "Class 5" -> 5. Fallback to 0 if parsing fails.
      const classGradeStr = selectedClass.name.replace(/\D/g, "");
      const classGrade = classGradeStr ? parseInt(classGradeStr, 10) : 0;

      // 2. Format Dates
      // Combine Date and Time if needed, or just use the date object if it has time.
      // The current state splits date and time. We should merge them.
      const startDateTime = new Date(startDate);
      if (startTime) {
        startDateTime.setHours(startTime.getHours());
        startDateTime.setMinutes(startTime.getMinutes());
      }
      const formattedStartDate = format(startDateTime, "yyyy-MM-dd HH:mm:ss");

      const endDateTime = new Date(endDate);
      if (endTime) {
        endDateTime.setHours(endTime.getHours());
        endDateTime.setMinutes(endTime.getMinutes());
      }
      const formattedEndDate = format(endDateTime, "yyyy-MM-dd HH:mm:ss");

      // 3. Map Difficulty
      let difficultyStr: 'easy' | 'medium' | 'hard' = 'medium';
      if (difficulty <= 30) difficultyStr = 'easy';
      if (difficulty >= 70) difficultyStr = 'hard';

      // 4. Determine Topic ID (Default to "all" if not selected)
      const topicId = "all";

      const payload: AssignAssessmentRequest = {
        subjectId: selectedSubject.id,
        classGrade: classGrade,
        testTitle: title,
        instructions: instructions,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        durationLimit: duration,
        randomizeQuestions: randomize ? 1 : 0,
        antiCheatMode: antiCheat ? 1 : 0,
        allowedAttempts: attempts,
        difficulty: difficultyStr,
        questionCount: numQuestions,
        status: "published",
        assignType: assignType,
        studentIds: assignType === 'specific' ? studentIds : [],
        topicId: topicId
      };

      const response = await assignAssessment(payload);

      if (response.isSuccess) {
        showToast('success', 'Success', response.message);

        // Reset Form
        setTitle("");
        setSelectedClass(null);
        setSelectedSubject(null);
        setInstructions("");
        setStartDate(null);
        setStartTime(null);
        setEndDate(null);
        setEndTime(null);
        setDuration(60);
        setRandomize(true);
        setAntiCheat(true);
        setAttempts(1);
        setAssignType('specific');
        setStudentIds([]);
        setAiTopic("");
        setDifficulty(50);
        setNumQuestions(5);
        setActiveIndex(0);

      } else {
        showToast('error', 'Error', "Failed to publish assessment: " + response.message);
      }

    } catch (error: any) {
      console.error("Publish error:", error);
      showToast('error', 'Error', "An error occurred while publishing.");
    } finally {
      setIsLoading(false);
    }
  };

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
          loading={isLoading}
          onClick={handlePublish}
        />
      </div>
    </div>
  );

  return (
    <div className="flex h-screen flex-col bg-[#F8F9FA]">
      <div className="flex-1 overflow-y-auto bg-white pl-14 pr-8">
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

                    assignType={assignType}
                    setAssignType={setAssignType}
                    studentList={studentList}
                    studentIds={studentIds}
                    setStudentIds={setStudentIds}
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
