export interface Subject {
    name: string;
    code: string;
}

export interface Topic {
    name: string;
    code: string;
}

export interface TopicsMaterialsProps {
    selectedSubject: Subject | null;
    setSelectedSubject: (subject: Subject | null) => void;
    selectedTopics: Topic[];
    setSelectedTopics: (topics: Topic[]) => void;
    subjects: Subject[];
    topics: Topic[];
}
