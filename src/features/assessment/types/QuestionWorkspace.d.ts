export interface QuestionWorkspaceProps {
    aiTopic: string;
    setAiTopic: (value: string) => void;
    difficulty: number;
    setDifficulty: (value: number) => void;
    numQuestions: number;
    setNumQuestions: (value: number) => void;
}
