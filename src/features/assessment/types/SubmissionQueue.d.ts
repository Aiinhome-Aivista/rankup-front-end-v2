import { StudentSubmission } from './ReviewAssessment';

export interface SubmissionQueueProps {
    submissions: StudentSubmission[];
    activeSubmissionId?: string;
    onSelectSubmission: (id: string) => void;
    className?: string;
}
