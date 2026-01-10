export interface ClassOption {
    name: string;
}

export interface SubjectOption {
    id: number;
    name: string;
    code: string;
}

export interface TopicOption {
    name: string;
    code: string;
}

export interface AssessmentInformationProps {
    title: string;
    setTitle: (value: string) => void;
    selectedClass: ClassOption | null;
    setSelectedClass: (value: ClassOption | null) => void;
    selectedSubject: SubjectOption | null;
    setSelectedSubject: (value: SubjectOption | null) => void;
    instructions: string;
    setInstructions: (value: string) => void;
    classes: ClassOption[];
    subjects: SubjectOption[];
    assignType: 'all' | 'specific';
    setAssignType: (value: 'all' | 'specific') => void;
    studentList?: { student_id: number; full_name: string }[];
    studentIds?: number[];
    studentIds?: number[];
    setStudentIds?: (value: number[]) => void;
}
