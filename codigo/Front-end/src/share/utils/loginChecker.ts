import { verifyToken } from "../api/api";

export const check = async (token: string): Promise<boolean> => {
  if (!token) {
    return false;
  }
  const response: boolean = await verifyToken(token);
  return response;
};
