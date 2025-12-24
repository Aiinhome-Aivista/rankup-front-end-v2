export interface ScheduleDurationProps {
    startDate: Date | null;
    setStartDate: (value: Date | null) => void;
    startTime: Date | null;
    setStartTime: (value: Date | null) => void;
    endDate: Date | null;
    setEndDate: (value: Date | null) => void;
    endTime: Date | null;
    setEndTime: (value: Date | null) => void;
    duration: number;
    setDuration: (value: number) => void;
}
