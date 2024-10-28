export interface User {
    name: string;
    email: string;
    password: string;
    userType: 'docentes' | 'alumnos';
    createdAt: Date;
  }
  