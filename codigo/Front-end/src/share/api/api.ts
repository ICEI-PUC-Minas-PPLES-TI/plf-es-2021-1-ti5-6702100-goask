import { PostQuestion, PostTest, Test } from "@models/Test";
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

export const getTests = async (token: Token): Promise<Test[]> => {
  try {
    const options = {
      headers: { Authorization: `${token.token_type} ${token.access_token}` },
    };
    return await api.get("/tests/", options).then((res) => res.data);
  } catch (e) {
    console.error(e);
  }
};

export const createTest = async (
  token: Token,
  test: PostTest
): Promise<Test> => {
  try {
    const options = {
      headers: { Authorization: `${token.token_type} ${token.access_token}` },
    };

    const data = test;

    return await api.post("/tests/", data, options).then((res) => res.data);
  } catch (e) {
    console.error(e);
  }
};

export const getTest = async (token: Token, id: number): Promise<Test> => {
  try {
    const options = {
      headers: { Authorization: `${token.token_type} ${token.access_token}` },
    };

    return await api.get(`/tests/${id}`, options).then((res) => res.data);
  } catch (e) {
    console.error(e);
  }
};

export const updateTest = async (
  token: Token,
  test: PostTest,
  id: number
): Promise<Test> => {
  try {
    const options = {
      headers: { Authorization: `${token.token_type} ${token.access_token}` },
    };

    const data = {
      name: test.name,
      description: test.description,
      idTest: id,
    };

    return await api.put(`/tests/`, data, options).then((res) => res.data);
  } catch (e) {
    console.error(e);
  }
};

export const deleteTest = async (token: Token, id: number): Promise<Test> => {
  try {
    const options = {
      headers: { Authorization: `${token.token_type} ${token.access_token}` },
    };

    return await api.delete(`/tests/${id}`, options).then((res) => res.data);
  } catch (e) {
    console.error(e);
  }
};

export const createQuestion = async (
  token: Token,
  question: PostQuestion
): Promise<Test> => {
  try {
    const options = {
      headers: { Authorization: `${token.token_type} ${token.access_token}` },
    };

    const data = question;

    return await api.post(`/questions/`, data, options).then((res) => res.data);
  } catch (e) {
    console.error(e);
  }
};
