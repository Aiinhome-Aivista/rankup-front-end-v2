/* const BASE_URL = import.meta.env.VITE_API_BASE_URL as string; */
export const BASE_URL = 'http://122.163.121.176:3019/v1';
// export const BASE_URL = "http://157.173.221.226:3019/v1";

// Group endpoints by DOMAIN (Feature), not by HTTP Method
export const API_ENDPOINTS = {
  AUTH: {
    INITIATE_LOGIN: `${BASE_URL}/auth/login/initiate`,
    VERIFY_LOGIN: `${BASE_URL}/auth/login/verify`,
    REGISTER_INDIVIDUAL: `${BASE_URL}/auth/register`,
    DECRYPT_TOKEN: `${BASE_URL}/auth/decrypt_token`,
  },
  INSTITUTE: {
    REGISTER: `${BASE_URL}/institute/register`,
  },
  PARENT: {
    ADD_CHILD: `${BASE_URL}/child/add`,
    GET_STUDENTS: `${BASE_URL}/parents/fetch_by_test_criteria`,
  },
  SUBJECTS: {
    GET_ALL: `${BASE_URL}/get_subjects/subjects`,
  },
  CREATEASSESMENT: {
    CREATE_ASSESSMENT: `${BASE_URL}/assessment/create`,
  },
  STUDENT: {
    GET_BY_SUBJECT_AND_CLASS: `${BASE_URL}/get_students_by_class_sub/get_students_by_class_sub`,
  }
} as const;
