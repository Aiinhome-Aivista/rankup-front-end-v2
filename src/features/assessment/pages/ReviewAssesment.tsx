import React, { useState } from 'react';
import ReviewHeader from '../components/ReviewHeader';
import SubmissionQueue from '../components/SubmissionQueue';
import DocumentViewer from '../components/DocumentViewer';
import GradingPanel from '../components/GradingPanel';
import type { StudentSubmission, Rubric, GradingState } from '../types/ReviewAssessment';

// Mock Data
const MOCK_SUBMISSIONS: StudentSubmission[] = [
  {
    id: '1',
    studentName: 'Alex Johnson',
    studentId: 's1',
    submittedAt: '2023-10-11T16:20:00Z',
    status: 'submitted',
    documentUrl: 'mock.pdf',
    score: undefined,
    totalScore: 100
  },
  {
    id: '2',
    studentName: 'Sarah Lee',
    studentId: 's2',
    submittedAt: '2023-10-12T21:00:00Z',
    status: 'submitted',
    documentUrl: 'mock.pdf',
    score: undefined,
    totalScore: 100
  },
  {
    id: '3',
    studentName: 'Emily Davis',
    studentId: 's3',
    submittedAt: '2023-10-12T11:15:00Z',
    status: 'graded',
    documentUrl: 'mock.pdf',
    score: 92,
    totalScore: 100
  }
];

const MOCK_RUBRIC: Rubric = {
  id: 'rubric-1',
  name: 'History Essay Standard v2',
  criteria: [
    {
      id: 'c1',
      title: 'Thesis Statement',
      description: 'Clarity and relevance of main argument',
      maxScore: 10,
      levels: [
        { id: 'l1', label: 'Poor', minScore: 1, maxScore: 4, description: 'Unclear or missing' },
        { id: 'l2', label: 'Fair', minScore: 5, maxScore: 6, description: 'Vague but present' },
        { id: 'l3', label: 'Good', minScore: 7, maxScore: 8, description: 'Clear and relevant' },
        { id: 'l4', label: 'Exc.', minScore: 9, maxScore: 10, description: 'Insightful and original' }
      ]
    },
    {
      id: 'c2',
      title: 'Evidence & Analysis',
      description: 'Clarity and relevance of main argument',
      maxScore: 20,
      levels: [
        { id: 'l5', label: 'Poor', minScore: 1, maxScore: 8, description: 'Little evidence' },
        { id: 'l6', label: 'Fair', minScore: 9, maxScore: 12, description: 'Some evidence' },
        { id: 'l7', label: 'Good', minScore: 13, maxScore: 16, description: 'Good evidence' },
        { id: 'l8', label: 'Exc.', minScore: 17, maxScore: 20, description: 'Excellent analysis' }
      ]
    },
    {
      id: 'c3',
      title: 'Structure & Flow',
      description: 'Organization and transitions',
      maxScore: 15,
      levels: [
        { id: 'l9', label: 'Poor', minScore: 1, maxScore: 5, description: 'Disorganized' },
        { id: 'l10', label: 'Fair', minScore: 6, maxScore: 9, description: 'Somewhat organized' },
        { id: 'l11', label: 'Good', minScore: 10, maxScore: 12, description: 'Well organized' },
        { id: 'l12', label: 'Exc.', minScore: 13, maxScore: 15, description: 'Seamless flow' }
      ]
    }
  ]
};

function ReviewAssesment() {
  const [selectedSubmissionId, setSelectedSubmissionId] = useState<string>('1');
  const [gradingStates, setGradingStates] = useState<Record<string, GradingState>>({});

  // Initialize or get grading state for current submission
  const currentGradingState = gradingStates[selectedSubmissionId] || {
    submissionId: selectedSubmissionId,
    criteriaScores: {},
    criteriaFeedback: {},
    overallFeedback: '',
    isPublished: false
  };

  const selectedSubmission = MOCK_SUBMISSIONS.find(s => s.id === selectedSubmissionId);

  const handleScoreUpdate = (criteriaId: string, score: number) => {
    setGradingStates(prev => ({
      ...prev,
      [selectedSubmissionId]: {
        ...currentGradingState,
        criteriaScores: {
          ...currentGradingState.criteriaScores,
          [criteriaId]: score
        }
      }
    }));
  };

  const handleOverallFeedbackUpdate = (feedback: string) => {
    setGradingStates(prev => ({
      ...prev,
      [selectedSubmissionId]: {
        ...currentGradingState,
        overallFeedback: feedback
      }
    }));
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden pl-8 pr-4">
      {/* Header */}
      <ReviewHeader
        onSearch={() => { }}
        onFilterChange={() => { }}
        className="shrink-0 z-10 sticky top-0"
      />

      {/* Main Layout - 3 Panes */}
      <div className="flex flex-1 overflow-hidden">

        {/* Left Pane: Queue */}
        <aside className="w-75 shrink-0 z-0 h-full overflow-hidden">
          <SubmissionQueue
            submissions={MOCK_SUBMISSIONS}
            activeSubmissionId={selectedSubmissionId}
            onSelectSubmission={setSelectedSubmissionId}
            className="h-full"
          />
        </aside>

        {/* Center Pane: Document Viewer */}
        <main className="flex-1 bg-gray-100 h-full overflow-hidden relative">
          <DocumentViewer
            submission={selectedSubmission}
            className="h-full w-full"
          />
        </main>

        {/* Right Pane: Grading */}
        <aside className="w-100 shrink-0 z-0 h-full overflow-hidden">
          <GradingPanel
            rubric={MOCK_RUBRIC}
            gradingState={currentGradingState}
            onScoreUpdate={handleScoreUpdate}
            onFeedbackUpdate={() => { }}
            onOverallFeedbackUpdate={handleOverallFeedbackUpdate}
            onPublish={() => console.log('Publishing grade:', currentGradingState)}
            className="h-full"
          />
        </aside>

      </div>
    </div>
  );
}

export default ReviewAssesment;
