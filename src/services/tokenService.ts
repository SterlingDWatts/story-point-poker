/* eslint-disable @typescript-eslint/no-non-null-assertion */
import jwt from "jsonwebtoken";
import jwtDecode from "jwt-decode";
import config from "../config";

const tokenService = {
  getItem(): string | null {
    return window.sessionStorage.getItem(config.TOKEN_KEY!);
  },

  parseToken(): jwt.Jwt | undefined {
    const token = this.getItem();
    if (token) {
      return jwtDecode(token) as jwt.Jwt;
    }
  },

  getToken(): jwt.Jwt | undefined {
    return this.parseToken();
  },

  setToken(token: jwt.Jwt): void {
    window.sessionStorage.setItem(config.TOKEN_KEY!, JSON.stringify(token));
  },

  removeItem(): void {
    window.sessionStorage.removeItem(config.TOKEN_KEY!);
  },
};

export default tokenService;
