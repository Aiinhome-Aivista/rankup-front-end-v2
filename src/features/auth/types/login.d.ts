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

export interface UserPermission {
    feature: string;
    access_type: string;
}

export interface DecryptTokenUser {
    user_id: number;
    full_name: string;
    email: string;
    role: string;
    subscription_plan: string;
    permissions: UserPermission[];
    iat: number;
    exp: number;
}

export interface DecryptTokenResponse {
    isSuccess: boolean;
    statusCode: number;
    message: string;
    data: DecryptTokenUser;
}



