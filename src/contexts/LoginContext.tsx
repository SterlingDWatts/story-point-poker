/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { createContext, useReducer } from "react";
import { User } from "../contexts/UserContext";
import tokenService from "../services/tokenService";

interface State {
  isLoggedIn: boolean;
  token: User | null | undefined;
}

interface Action {
  type: "get-token" | "set-token" | "logout";
  payload?: string | undefined;
}

export interface LoginValue {
  loginState: State;
  getToken: () => void;
  setToken: (token: string) => void;
  logout: () => void;
}

type LoginReducer = (state: State, action: Action) => State;

const LoginContext = createContext<LoginValue>({
  loginState: { isLoggedIn: false, token: null },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getToken: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setToken: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: () => {},
});

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

export const LoginProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [loginState, dispatch] = useReducer(LoginStateReducer, { isLoggedIn: false, token: null } as State);

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
