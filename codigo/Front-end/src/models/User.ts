export class RegisterUser {
  name: string;
  password: string;
  email: string;
}

export interface LoginUser {
  useremail: string;
  password: string;
}

export interface User {
  email: string;
  name: string;
  idUser: number;
  uuid: number;
  createdAt: string;
  updatedAt: string;
  rooms?: any[];
}

export interface UpdateUser {
  email: string;
  name: string;
}