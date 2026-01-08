import axiosApi from "@/lib/axiosApi";
import { API_ENDPOINTS } from "@/config/endpoints";
import type { AddChildPayload, AddChildResponse } from "../types/addChild";

export const addChild = async (data: AddChildPayload): Promise<AddChildResponse> => {
    const response = await axiosApi<AddChildResponse>(API_ENDPOINTS.PARENT.ADD_CHILD, {
        method: "POST",
        data,
    });

    if (!response) {
        throw new Error("No response received from add child API.");
    }

    return response;
};
