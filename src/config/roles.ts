export const ROLES = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  STUDENT: 'student',
  PARENT: 'parent',
  EXAMINER: 'examiner',
} as const;

export type UserRole = (typeof ROLES)[keyof typeof ROLES];

export const ROLE_HIERARCHY = {
  [ROLES.ADMIN]: 100,
  [ROLES.EXAMINER]: 50,
  [ROLES.TEACHER]: 40,
  [ROLES.PARENT]: 20,
  [ROLES.STUDENT]: 10,
};