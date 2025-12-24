export interface ClassOption {
    name: string;
    code: string;
}

export interface SubjectOption {
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
}
