export interface StudentSubmission {
    id: string;
    studentName: string;
    studentId: string;
    submittedAt: string; // ISO string
    status: 'submitted' | 'graded';
    score?: number;
    totalScore?: number;
    avatarUrl?: string; // Optional avatar
    documentUrl: string; // URL to the submitted PDF/doc
}

export interface RubricLevel {
    id: string;
    label: string;
    minScore: number;
    maxScore: number;
    description: string;
}

export interface RubricCriteria {
    id: string;
    title: string;
    description: string;
    maxScore: number;
    levels: RubricLevel[];
    currentScore?: number;
    feedback?: string;
}

export interface Rubric {
    id: string;
    name: string;
    criteria: RubricCriteria[];
}

export interface GradingState {
    submissionId: string;
    criteriaScores: Record<string, number>; // criteriaId -> score
    criteriaFeedback: Record<string, string>; // criteriaId -> feedback
    overallFeedback: string;
    isPublished: boolean;
}
