export class RegisterUser {
  name: string;
  password: string;
  email: string;
}

export interface LoginUser {
  useremail: string;
  password: string;
}

export class User {
  email: string;
  idUser: number;
  createdAt: string;
  updatedAt: string;
  tests: any[];
  rooms: any[];
}
