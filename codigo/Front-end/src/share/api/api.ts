import { Token } from "@models/Token";
import axios from "axios";
import { RegisterUser, User, LoginUser } from "../../models/User";
import { useAppContext } from "../../modules/components/ContextWrapper";

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
    const token = await api.post("/login", user);
    const user = await api.get("/users/", {
      headers: {
        Authorization: token.data.token_type + " " + token.data.access_token,
      },
    });
    const context = useAppContext();
    context.setState({ token });
    return token;
  } catch (e) {
    console.error(e);
  }
};

export const verifyToken = async (token: string): Promise<boolean> => {
  try {
    return true;
  } catch (e) {
    console.error(e);
  }
};
