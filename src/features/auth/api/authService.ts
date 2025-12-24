import axiosApi from "@/lib/axiosApi";
import { API_ENDPOINTS } from "@/config/endpoints";

interface InitiateLoginPayload {
  email: string;
  password?: string;
}

interface InitiateLoginResponse {
  isSuccess: boolean;
  statusCode: number;
  message: string;
  data: null;
}

interface VerifyLoginPayload {
  email: string;
  otp: string;
}

interface User {
  id: number;
  role: string;
  full_name: string;
}

interface VerifyLoginResponse {
  isSuccess: boolean;
  statusCode: number;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

export const initiateLogin = async (data: InitiateLoginPayload): Promise<InitiateLoginResponse> => {
  const response = await axiosApi<InitiateLoginResponse>(API_ENDPOINTS.AUTH.INITIATE_LOGIN, {
    method: "POST",
    data,
  });
  
  if (!response) {
    throw new Error("No response received from login initiation.");
  }
  
  return response;
};

export const verifyLogin = async (data: VerifyLoginPayload): Promise<VerifyLoginResponse> => {
  const response = await axiosApi<VerifyLoginResponse>(API_ENDPOINTS.AUTH.VERIFY_LOGIN, {
    method: "POST",
    data,
  });

  if (!response) {
      throw new Error("No response received from login verification.");
  }

  return response;
};

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

export const registerIndividual = async (data: RegisterIndividualPayload): Promise<RegisterIndividualResponse> => {
  const response = await axiosApi<RegisterIndividualResponse>(API_ENDPOINTS.AUTH.REGISTER_INDIVIDUAL, {
    method: "POST",
    data,
  });

  if (!response) {
    throw new Error("No response received from registration.");
  }

  return response;
};

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

export const registerInstitute = async (data: RegisterInstitutePayload): Promise<RegisterInstituteResponse> => {
  const response = await axiosApi<RegisterInstituteResponse>(API_ENDPOINTS.INSTITUTE.REGISTER, {
    method: "POST",
    data,
  });

  if (!response) {
    throw new Error("No response received from institute registration.");
  }

  return response;
};