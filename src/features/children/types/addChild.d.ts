export interface AddChildPayload {
    childName: string;
    childEmail: string;
    childPassword: string;
    grade: number;
    school: string;
    dob: string;
    enrollment_date: string;
    gender: string;
    preferred_language: string;
    emergency_contact_name: string;
    emergency_contact_number: string;
}

export interface AddChildResponseData {
    childName: string;
    childEmail: string;
    parentEmail: string;
}

export interface AddChildResponse {
    statusCode: number;
    isSuccess: boolean;
    message: string;
    data: AddChildResponseData;
}
