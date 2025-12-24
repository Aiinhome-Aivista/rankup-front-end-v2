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



