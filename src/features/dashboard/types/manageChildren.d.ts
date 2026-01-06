export interface ChildStatInfo {
    value: string;
    sub: string;
    status?: string;
}

export interface ChildStats {
    gpa: ChildStatInfo;
    attendance: ChildStatInfo;
    assignments: ChildStatInfo;
}

export interface ChildNotification {
    type: "warning" | "success" | string;
    title: string;
    date: string;
    highlight: boolean;
}

export interface Child {
    id: number;
    name: string;
    grade: string;
    room: string;
    avatar: string;
    stats: ChildStats;
    notification: ChildNotification;
}
