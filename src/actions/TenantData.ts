import { LoginPayload, LoginResponse } from "@/types/auth";
import axios from "../services/axios";

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>("/authenticate", payload);

    return response.data;
  } catch (error) {
    console.error("Login failed:", error);

    throw new Error("Login failed. Please try again.");
  }
};
