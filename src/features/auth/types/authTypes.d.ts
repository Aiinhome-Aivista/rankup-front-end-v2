export interface InitiateLoginPayload {
    email: string;
    password?: string;
}

export interface InitiateLoginResponse {
    isSuccess: boolean;
    statusCode: number;
    message: string;
    data: null;
}

export interface VerifyLoginPayload {
    email: string;
    otp: string;
}

export interface User {
    id: number;
    role: string;
    full_name: string;
}

export interface VerifyLoginResponse {
    isSuccess: boolean;
    statusCode: number;
    message: string;
    data: {
        user: User;
        token: string;
    };
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

export interface RegisterInstitutePayload {
    instituteName: string;
    website: string;
    instituteType: string;
    studentRange: string;
    institutePhone: string;
    adminName: string;
    adminEmail: string;
    adminPhone: string;
    adminPassword: string;
}

export interface RegisterInstituteResponse {
    statusCode: number;
    isSuccess: boolean;
    message: string;
    data: {
        instituteId: number;
        adminId: number;
    };
}
