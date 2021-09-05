import React, { createContext, useReducer } from "react";

export interface User {
  id: number;
  name: string;
  role: string;
}

type UserState = User[];

interface UserAction {
  type: "add-user" | "clear-users" | "remove-user" | "edit-user";
  payload: Partial<User>;
}

export interface UserValue {
  userState: UserState;
  addUser: (user: User) => void;
  clearUsers: () => void;
  removeUser: (id: number) => void;
  editUser: (user: User) => void;
}

type UserReducer = (state: UserState, action: UserAction) => UserState;

const UserContext = createContext<UserValue | null>(null);

const userStateReducer: UserReducer = (state, action) => {
  switch (action.type) {
    case "add-user":
      return [...state, action.payload as User];
    case "clear-users":
      return [];
    case "remove-user":
      return [...state.filter((user) => user.id !== action.payload.id)];
    case "edit-user":
      return [...state.map((user) => (user.id !== action.payload.id ? user : (action.payload as User)))];
    default:
      return state;
  }
};

export const UserProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [userState, dispatch] = useReducer(userStateReducer, [] as UserState);

  const addUser = (user: User) => {
    dispatch({ type: "add-user", payload: user });
  };

  const clearUsers = () => {
    dispatch({ type: "clear-users", payload: {} });
  };

  const removeUser = (userId: number) => {
    dispatch({ type: "remove-user", payload: { id: userId } });
  };

  const editUser = (user: User) => {
    dispatch({ type: "edit-user", payload: user });
  };

  return (
    <UserContext.Provider value={{ userState, addUser, clearUsers, removeUser, editUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
