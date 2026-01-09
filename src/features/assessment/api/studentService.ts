import axiosApi from '../../../lib/axiosApi';
import { API_ENDPOINTS } from '../../../config/endpoints';
import type { GetStudentsRequest, GetStudentsResponse, Student } from '../types/StudentTypes';

export const getStudentsByClassAndSubject = async (
    subjectId: number,
    classGrade: number
): Promise<Student[]> => {
    const requestBody: GetStudentsRequest = {
        subject_id: subjectId,
        class_grade: classGrade
    };

    try {
        const response = await axiosApi<GetStudentsResponse>(
            API_ENDPOINTS.PARENT.GET_STUDENTS,
            {
                method: 'POST',
                data: requestBody,
            }
        );

        if (response && response.isSuccess && Array.isArray(response.data)) {
            return response.data;
        }

        return [];

    } catch (error) {
        console.error("Error fetching students:", error);
        return [];
    }
};
