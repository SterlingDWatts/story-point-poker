/* eslint-disable @typescript-eslint/no-non-null-assertion */
import jwtDecode from "jwt-decode";
import { User } from "../contexts/UserContext";
import config from "../config";

const tokenService = {
  getItem(): string | null {
    return window.sessionStorage.getItem(config.TOKEN_KEY!);
  },

  parseToken(token: string): User | undefined {
    if (token) {
      return jwtDecode(token) as User;
    }
  },

  getToken(): User | undefined {
    const token = this.getItem();
    if (token) {
      return JSON.parse(token);
    }
  },

  setToken(token: User): void {
    window.sessionStorage.setItem(config.TOKEN_KEY!, JSON.stringify(token));
  },

  removeItem(): void {
    window.sessionStorage.removeItem(config.TOKEN_KEY!);
  },
};

export default tokenService;
