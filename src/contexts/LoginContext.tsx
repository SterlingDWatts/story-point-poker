/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { createContext, useReducer } from "react";
import jwtDecode from "jwt-decode";
import jwt from "jsonwebtoken";
import config from "../config";
import { User } from "./UserContext";

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
      tokenString = window.localStorage.getItem(config.TOKEN_KEY!);
      if (tokenString) {
        token = jwtDecode(tokenString);
        return token ? { isLoggedIn: true, token } : state;
      }
      return state;

    case "set-token":
      tokenString = jwt.sign(action.payload, config.JWT_PRIVATE_KEY!);
      window.localStorage.setItem(config.TOKEN_KEY!, tokenString);
      return { isLoggedIn: true, token: tokenString };

    case "logout":
      window.localStorage.removeItem(config.TOKEN_KEY!);
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
