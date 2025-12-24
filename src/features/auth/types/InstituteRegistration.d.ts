export interface FormData {
    instituteName: string;
    instituteWebsite: string;
    institutePhone: string;
    adminFullName: string;
    adminEmail: string;
    adminPhone: string;
    adminPassword: string;
}

export interface FormErrors {
    instituteName?: string;
    instituteWebsite?: string;
    instituteType?: string;
    institutePhone?: string;
    adminFullName?: string;
    adminEmail?: string;
    adminPhone?: string;
    adminPassword?: string;
}

export interface Option {
    label: string;
    value: string;
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

