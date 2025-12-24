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
