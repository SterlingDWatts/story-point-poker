import React, { createContext, useState } from "react";
import { io } from "socket.io-client";
import config from "../config";

export type PokerRole = "Front End Dev" | "QAE" | "Team Lead";

export interface PokerUser {
  _id: number;
  name: string;
  role: PokerRole;
}

interface PokerStory {
  _id: number;
  name: string;
}

type Login = (user: Partial<PokerUser>) => void;

type OnDisconnect = (cb: () => void) => void;

type AddStories = (stories: Partial<PokerStory>[]) => void;

type OnLogin = (cb: () => void) => void;

type OnAddStories = (cb: () => void) => void;

export interface PokerValue {
  login: Login;
  addStories: AddStories;
  onLogin: OnLogin;
  onAddStories: OnAddStories;
  onDisconnect: OnDisconnect;
}

const PokerContext = createContext<PokerValue>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addStories: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onLogin: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onAddStories: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onDisconnect: () => {},
});

export const PokerProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [socket] = useState(io(config.SERVER_URL));

  const login: Login = (user) => {
    socket.emit("login", user);
  };

  const onDisconnect: OnDisconnect = (cb) => {
    socket.on("disconnected", cb);
  };

  const addStories: AddStories = (stories) => {
    socket.emit("addStories", stories);
  };

  const onLogin: OnLogin = (cb) => {
    socket.on("login", cb);
  };

  const onAddStories: OnAddStories = (cb) => {
    socket.on("addStories", cb);
  };

  return (
    <PokerContext.Provider value={{ login, addStories, onLogin, onAddStories, onDisconnect }}>
      {children}
    </PokerContext.Provider>
  );
};

export default PokerContext;
