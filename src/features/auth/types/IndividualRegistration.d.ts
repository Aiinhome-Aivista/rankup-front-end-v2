export interface FormData {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

export interface FormErrors {
    fullName?: string;
    email?: string;
    phone?: string;
    role?: string;
    gender?: string;
    password?: string;
    confirmPassword?: string;
}

export interface Option {
    label: string;
    value: string;
}
export interface RegisterIndividualPayload {
    full_name: string;
    email: string;
    password: string;
    phone_number: string;
    role: string;
    gender: string;
}

export interface RegisterIndividualResponse {
    isSuccess: boolean;
    statusCode: number;
    message: string;
    data: {
        user: {
            id: number;
            email: string;
            role: string;
        };
        token: string;
    };
}
