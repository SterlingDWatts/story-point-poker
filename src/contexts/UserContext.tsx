import React, { createContext, useReducer } from "react";

export interface User {
  _id: number;
  name: string;
  role: string;
}

type UserState = User[];

interface UserAction {
  type: "add-user" | "clear-users" | "remove-user" | "edit-user";
  payload: User[];
}

export interface UserValue {
  userState: UserState;
  addUser: (users: User[]) => void;
  clearUsers: () => void;
  removeUser: (_id: number) => void;
  editUser: (user: User) => void;
}

type UserReducer = (state: UserState, action: UserAction) => UserState;

const UserContext = createContext<UserValue | null>(null);

const userStateReducer: UserReducer = (state, action) => {
  switch (action.type) {
    case "add-user":
      return [...action.payload];
    case "clear-users":
      return [];
    case "remove-user":
      return [...state.filter((user) => user._id !== action.payload[0]._id)];
    case "edit-user":
      return [...state.map((user) => (user._id !== action.payload[0]._id ? user : action.payload[0]))];
    default:
      return state;
  }
};

export const UserProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [userState, dispatch] = useReducer(userStateReducer, [] as UserState);

  const addUser = (users: User[]) => {
    dispatch({ type: "add-user", payload: users });
  };

  const clearUsers = () => {
    dispatch({ type: "clear-users", payload: [{ _id: 1, name: "", role: "QAE" }] });
  };

  const removeUser = (userId: number) => {
    dispatch({ type: "remove-user", payload: [{ _id: userId, name: "", role: "QAE" }] });
  };

  const editUser = (user: User) => {
    dispatch({ type: "edit-user", payload: [user] });
  };

  return (
    <UserContext.Provider value={{ userState, addUser, clearUsers, removeUser, editUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
