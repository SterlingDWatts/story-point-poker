import { User } from "../contexts/UserContext";

interface GetTokenAction {
  type: "get-token";
}

interface LogoutAction {
  type: "logout";
}

interface SetTokenAction {
  type: "set-token";
  payload: string;
}

type LoginAction = GetTokenAction | SetTokenAction | LogoutAction;

export interface LoginState {
  isLoggedIn: boolean;
  token: User | null | undefined;
}

export interface LoginValue {
  loginState: LoginState;
  getToken: () => void;
  setToken: (token: string) => void;
  logout: () => void;
}

export type LoginReducer = (state: LoginState, action: LoginAction) => LoginState;
