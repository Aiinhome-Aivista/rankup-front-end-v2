import axiosApi from "../../../lib/axiosApi";
import { API_ENDPOINTS } from "../../../config/endpoints";
import type { SubjectOption, WrapperResponse } from "../types/CreateAssesment";


export const getAllSubjects = async (): Promise<SubjectOption[]> => {
    try {
        const response = await axiosApi<WrapperResponse>(`${API_ENDPOINTS.SUBJECTS.GET_ALL}`);

        if (response && response.data && Array.isArray(response.data)) {
            return response.data.map((item) => ({
                id: item.subject_id,
                name: item.subject_name,
                code: item.subject_name.substring(0, 3).toUpperCase(),
            }));
        }

        return [];
    } catch (error) {
        console.error("Error fetching subjects:", error);
        return [];
    }
};
