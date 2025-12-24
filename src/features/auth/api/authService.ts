import axiosApi from "@/lib/axiosApi";
import { API_ENDPOINTS } from "@/config/endpoints";

import type {
  InitiateLoginPayload,
  InitiateLoginResponse,
  RegisterIndividualPayload,
  RegisterIndividualResponse,
  RegisterInstitutePayload,
  RegisterInstituteResponse,
  VerifyLoginPayload,
  VerifyLoginResponse,
} from "../types/authTypes";

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