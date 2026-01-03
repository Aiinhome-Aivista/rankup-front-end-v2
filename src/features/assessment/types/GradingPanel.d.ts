import { Rubric, GradingState } from './ReviewAssessment';

export interface GradingPanelProps {
    rubric: Rubric;
    gradingState: GradingState;
    onScoreUpdate: (criteriaId: string, score: number) => void;
    onFeedbackUpdate: (criteriaId: string, feedback: string) => void;
    onOverallFeedbackUpdate: (feedback: string) => void;
    onPublish: () => void;
    className?: string;
}
