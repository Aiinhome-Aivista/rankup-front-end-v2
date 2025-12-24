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
