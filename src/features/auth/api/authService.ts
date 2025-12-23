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