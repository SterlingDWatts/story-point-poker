import React, { createContext, useReducer } from "react";
import { User } from "../models/userContext";
import { LoginState, LoginValue, LoginReducer } from "../models/loginContext";
import tokenService from "../services/tokenService";

const defaultContext: LoginValue = {
  loginState: { isLoggedIn: false, token: null },
  getToken: () => {
    // do nothing
  },
  setToken: () => {
    // do nothing
  },
  logout: () => {
    // do nothing
  },
};

const LoginStateReducer: LoginReducer = (state, action) => {
  let token: User | null | undefined;
  switch (action.type) {
    case "get-token":
      token = tokenService.getToken();
      return token ? { isLoggedIn: true, token } : state;

    case "set-token":
      token = tokenService.parseToken(action.payload as string) as User;
      tokenService.setToken(token);
      return { isLoggedIn: true, token };

    case "logout":
      tokenService.removeItem();
      return { isLoggedIn: false, token: null };

    default:
      return state;
  }
};

const LoginContext = createContext<LoginValue>(defaultContext);

export const LoginProvider: React.FC = ({ children }) => {
  const [loginState, dispatch] = useReducer(LoginStateReducer, { isLoggedIn: false, token: null } as LoginState);

  const getToken = () => {
    dispatch({ type: "get-token" });
  };

  const setToken = (token: string) => {
    dispatch({ type: "set-token", payload: token });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  return <LoginContext.Provider value={{ loginState, getToken, setToken, logout }}>{children}</LoginContext.Provider>;
};

export default LoginContext;
