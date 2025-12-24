export interface Subject {
    name: string;
    code?: string;
}

export interface Topic {
    name: string;
    code?: string;
}

export interface AISummaryProps {
    subject: Subject | null;
    topics: Topic[];
    difficulty: string;
    numQuestions: number;
    duration: string;
}
