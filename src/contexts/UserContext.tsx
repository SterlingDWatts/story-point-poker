/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useReducer } from "react";
import { UserValue, UserReducer, User, UserState } from "../models/userContext";

const defaultUserValue: UserValue = {
  userState: [],
  addUser: (_: User[]) => {
    // do nothing
  },
  clearUsers: () => {
    // do nothing
  },
  removeUser: (_id: string) => {
    // do nothing
  },
  editUser: (_user: User) => {
    // do nothing
  },
};

const UserContext = createContext<UserValue>(defaultUserValue);

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
    dispatch({ type: "clear-users", payload: [{ _id: "1", name: "", role: "QAE", isLoggedIn: false }] });
  };

  const removeUser = (userId: string) => {
    dispatch({ type: "remove-user", payload: [{ _id: userId, name: "", role: "QAE", isLoggedIn: false }] });
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
