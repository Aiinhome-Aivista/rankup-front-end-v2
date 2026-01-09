/* const BASE_URL = import.meta.env.VITE_API_BASE_URL as string; */
export const BASE_URL = "http://122.163.121.176:3019/v1";
/* export const BASE_URL = "http://157.173.221.226:3019/v1"; */

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
  },
  STUDENT: {
    ASSESSMENT_OVERVIEW: `${BASE_URL}/student_tests/list`,
    START_ASSESSMENT: `${BASE_URL}/student_assessment/start`,
  },
  SUBJECTS: {
    GET_ALL: `${BASE_URL}/get_subjects/subjects`,
  },
} as const;
