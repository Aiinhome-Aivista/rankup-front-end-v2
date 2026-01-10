export interface ClassOption {
    name: string;
}

export interface SubjectOption {
    id: number;
    name: string;
    code: string;
}

export interface SubjectApiResponse {
    subject_id: number;
    subject_name: string;
}

export interface TopicOption {
    name: string;
    code: string;
}

export interface WrapperResponse {
    isSuccess: boolean;
    statusCode: number;
    message: string;
    data: SubjectApiResponse[];
}
