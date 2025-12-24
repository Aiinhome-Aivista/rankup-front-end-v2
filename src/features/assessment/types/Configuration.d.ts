import { type SvgIconComponent } from "@mui/icons-material";

export interface ConfigurationProps {
    difficulty: string;
    setDifficulty: (value: string) => void;
    assessmentTypes: string[];
    setAssessmentTypes: (value: string[]) => void;
    numQuestions: number;
    setNumQuestions: (value: number) => void;
    timeLimit: string;
    setTimeLimit: (value: string) => void;
    timeOptions: string[];
}

export interface DifficultyOption {
    name: string;
    desc: string;
    value: string;
    icon: SvgIconComponent;
}
