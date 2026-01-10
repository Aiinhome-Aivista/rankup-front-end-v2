export interface AssignAssessmentRequest {
    subjectId: number;
    classGrade: number;
    testTitle: string;
    instructions: string;
    startDate: string;
    endDate: string;
    durationLimit: number;
    randomizeQuestions: number; // 0 or 1
    antiCheatMode: number; // 0 or 1
    allowedAttempts: number;
    difficulty: 'easy' | 'medium' | 'hard';
    questionCount: number;
    status: 'draft' | 'published' | 'archived';
    assignType: 'all' | 'specific';
    studentIds: number[];
    topicId: string | number;
}

export interface AssignAssessmentResponseData {
    assignedCount: number;
    studentIds: number[];
    role: string;
}

export interface AssignAssessmentResponse {
    statusCode: number;
    isSuccess: boolean;
    message: string;
    data: AssignAssessmentResponseData;
}
