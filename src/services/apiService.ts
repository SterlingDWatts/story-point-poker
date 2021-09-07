import axios from "axios";
import config from "../config";
import { User } from "../contexts/UserContext";

export const instance = axios.create({
  baseURL: "http://localhost:8000/poker",
  // baseURL: config.SERVER_URL,
  headers: { Authorization: `Bearer ${config.BEARER}` },
});

export const getUsers = (setIsLoading: (isLoading: boolean) => void, addUser: (users: User[]) => void): void => {
  instance.get("/users").then((res) => {
    setIsLoading(false);
    if (res && res.data && res.data.users) {
      addUser(res.data.users);
    }
  });
};
