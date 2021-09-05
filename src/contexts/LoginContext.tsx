/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { createContext, useReducer } from "react";
import jwt from "jsonwebtoken";
import config from "../config";
import { User } from "./UserContext";
import tokenService from "../services/tokenService";

interface State {
  isLoggedIn: boolean;
  token: jwt.Jwt | string | null | undefined;
}

interface Action {
  type: "get-token" | "set-token" | "logout";
  payload: Partial<User>;
}

export interface LoginValue {
  loginState: State;
  getToken: () => void;
  setToken: (user: User) => void;
  logout: () => void;
}

type LoginReducer = (state: State, action: Action) => State;

const LoginContext = createContext<LoginValue | null>(null);

const LoginStateReducer: LoginReducer = (state, action) => {
  let token: jwt.Jwt | null | undefined;
  let tokenString: string | null;
  switch (action.type) {
    case "get-token":
      token = tokenService.getToken();
      return token ? { isLoggedIn: true, token } : state;

    case "set-token":
      tokenString = jwt.sign(
        { ...action.payload, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 2 },
        config.JWT_PRIVATE_KEY!
      );
      tokenService.setToken(tokenString);
      return { isLoggedIn: true, token: tokenString };

    case "logout":
      tokenService.removeItem();
      return { isLoggedIn: false, token: null };

    default:
      return state;
  }
};

export const LoginProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [loginState, dispatch] = useReducer(LoginStateReducer, { isLoggedIn: false, token: null } as State);

  const getToken = () => {
    dispatch({ type: "get-token", payload: {} });
  };

  const setToken = (user: User) => {
    dispatch({ type: "set-token", payload: user });
  };

  const logout = () => {
    dispatch({ type: "logout", payload: {} });
  };

  return <LoginContext.Provider value={{ loginState, getToken, setToken, logout }}>{children}</LoginContext.Provider>;
};

export default LoginContext;
