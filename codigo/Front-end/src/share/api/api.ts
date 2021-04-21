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

export const loginUser = async (loginUser: LoginUser): Promise<Token> => {
  try {
    return await api.post("/login", loginUser).then((res) => res.data);
  } catch (e) {
    console.error(e);
  }
};

export const getUser = async (token: Token): Promise<User> => {
  try {
    return await api
      .get("/users/", {
        headers: {
          Authorization: token.token_type + " " + token.access_token,
        },
      })
      .then((res) => res.data);
  } catch (e) {
    console.log(e);
  }
};

export const verifyToken = async (token: string): Promise<boolean> => {
  try {
    return true;
  } catch (e) {
    console.error(e);
  }
};
