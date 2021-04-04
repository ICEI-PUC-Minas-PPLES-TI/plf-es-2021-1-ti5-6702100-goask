import { Token } from "@models/Token";
import axios from "axios";
import { RegisterUser, User, LoginUser } from "../../models/User";

export const api = axios.create({
  baseURL: "http://152.67.33.12:3232/",
});

export const registerUser = async (user: RegisterUser): Promise<User> => {
  try {
    return await api.post("/users", user);
  } catch (e) {
    console.error(e);
  }
};

export const loginUser = async (user: LoginUser): Promise<Token> => {
  try {
    return await api.post("/token", user);
  } catch (e) {
    console.error(e);
  }
};
