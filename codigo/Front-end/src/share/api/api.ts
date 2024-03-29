import {
  Category,
  PostQuestion,
  PostTest,
  PutQuestion,
  Question,
  Test,
} from "@models/Test";
import { Token } from "@models/Token";
import axios from "axios";
import { RegisterUser, User, LoginUser, UpdateUser } from "../../models/User";
import { PostRoom, Room } from "@models/Room";
import { Statistic } from "@models/Statistic";

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

export const verifyToken = async (token: Token): Promise<boolean> => {
  try {
    return await api
      .get("/check", {
        headers: {
          Authorization: token.token_type + " " + token.access_token,
        },
      })
      .then((res) => res.data);
  } catch (e) {
    console.error(e);
  }
};

export const updateUser = async (
  token: Token,
  user: UpdateUser
): Promise<User> => {
  try {
    const options = {
      headers: { Authorization: `${token.token_type} ${token.access_token}` },
    };
    return await api.put("/users/", user, options).then((res) => res.data);
  } catch (e) {
    console.log(e);
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

export const updateQuestion = async (
  token: Token,
  question: PutQuestion,
  id: number
): Promise<Question> => {
  try {
    const options = {
      headers: { Authorization: `${token.token_type} ${token.access_token}` },
    };

    const data = {
      idQuestion: id,
      answers: question.answers,
      questionText: question.questionText,
    };

    return await api.put(`/questions`, data, options).then((res) => res.data);
  } catch (e) {
    console.error(e);
  }
};

export const createQuestion = async (
  token: Token,
  question: PostQuestion
): Promise<Question> => {
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

export const getQuestion = async (
  token: Token,
  id: number
): Promise<Question> => {
  try {
    const options = {
      headers: { Authorization: `${token.token_type} ${token.access_token}` },
    };

    return await api.get(`/questions/${id}`, options).then((res) => res.data);
  } catch (e) {
    console.error(e);
  }
};

export const deleteQuestion = async (
  token: Token,
  id: number
): Promise<Question> => {
  try {
    const options = {
      headers: { Authorization: `${token.token_type} ${token.access_token}` },
    };
    return await api
      .delete(`/questions/${id}`, options)
      .then((res) => res.data);
  } catch (e) {
    console.error(e);
  }
};

export const getCategories = async (token: Token): Promise<Category[]> => {
  try {
    const options = {
      headers: { Authorization: `${token.token_type} ${token.access_token}` },
    };
    return await api.get(`/categories/`, options).then((res) => res.data);
  } catch (e) {
    console.error(e);
  }
};

export const getRooms = async (token: Token): Promise<Room[]> => {
  try {
    const options = {
      headers: { Authorization: `${token.token_type} ${token.access_token}` },
    };
    return await api.get(`/room/`, options).then((res) => res.data);
  } catch (e) {
    console.error(e);
  }
};

export const createRoom = async (
  token: Token,
  room: PostRoom
): Promise<Room> => {
  try {
    const options = {
      headers: { Authorization: `${token.token_type} ${token.access_token}` },
    };

    const data = room;

    return await api.post(`/room/`, data, options).then((res) => res.data);
  } catch (e) {
    console.error(e);
  }
};

export const getRoom = async (token: Token, roomId: number): Promise<Room> => {
  try {
    const options = {
      headers: { Authorization: `${token.token_type} ${token.access_token}` },
    };
    const id = roomId;

    const response = await api.get(`/room/`, options).then((res) => res.data);
    const room = response.filter((room: Room) => room.idRoom === id);
    return room[0];
  } catch (e) {
    console.error(e);
  }
};

export const startRoom = async (
  token: Token,
  roomId: number,
  running: boolean
): Promise<Room> => {
  try {
    const options = {
      headers: { Authorization: `${token.token_type} ${token.access_token}` },
    };
    const id = roomId;
    return await api
      .put(`/room/${id}?isRunning=${running}`, true, options)
      .then((res) => res.data);
  } catch (e) {
    console.error(e);
  }
};

export const desactivateRoom = async (
  token: Token,
  roomId: number
): Promise<Room> => {
  try {
    const options = {
      headers: { Authorization: `${token.token_type} ${token.access_token}` },
    };
    const id = roomId;
    return await api
      .put(`/room/turnoffroom/${roomId}`, options)
      .then((res) => res.data);
  } catch (e) {
    console.error(e);
  }
};

export const getStatistics = async (token: Token): Promise<Statistic> => {
  try {
    return await api
      .get("/statistic/home", {
        headers: {
          Authorization: token.token_type + " " + token.access_token,
        },
      })
      .then((res) => res.data);
  } catch (e) {
    console.log(e);
  }
};
