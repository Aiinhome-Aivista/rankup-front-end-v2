export interface TestSettingsProps {
    randomize: boolean;
    setRandomize: (value: boolean) => void;
    antiCheat: boolean;
    setAntiCheat: (value: boolean) => void;
    attempts: number;
    setAttempts: (value: number) => void;
}
