export interface GetStudentsRequest {
    subject_id: number;
    class_grade: number;
}

export interface Student {
    student_id: number;
    full_name: string;
}

export interface GetStudentsResponse {
    isSuccess: boolean;
    message: string;
    count: number;
    data: Student[];
}
