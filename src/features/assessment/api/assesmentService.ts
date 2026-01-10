import axiosApi from '../../../lib/axiosApi';
import { API_ENDPOINTS } from '../../../config/endpoints';
import type { AssignAssessmentRequest, AssignAssessmentResponse } from '../types/AssessmentServiceTypes';

export const assignAssessment = async (data: AssignAssessmentRequest): Promise<AssignAssessmentResponse> => {
    const response = await axiosApi<AssignAssessmentResponse>(API_ENDPOINTS.ASSESMENT.CREATE_ASSESSMENT, {
        method: 'POST',
        data,
    });

    if (!response) {
        throw new Error('No data received from service');
    }

    return response;
};
