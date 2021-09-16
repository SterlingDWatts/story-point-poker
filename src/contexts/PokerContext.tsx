import React, { createContext, useState } from "react";
import { io } from "socket.io-client";
import config from "../config";

export type PokerRole = "Front End Dev" | "QAE" | "Team Lead";

export interface PokerUser {
  _id: string;
  name: string;
  role: PokerRole;
}

interface PokerStory {
  _id: string;
  name: string;
  position: number;
  dateAdded: Date;
}

type Login = (user: Partial<PokerUser>) => void;

type OnDisconnect = (cb: () => void) => void;

type AddStories = (stories: Partial<PokerStory>[]) => void;

type OnLogin = (cb: () => void) => void;

type OnAddStories = (cb: () => void) => void;

type AddPoints = () => void;

type OnAddPoints = (cb: () => void) => void;

export interface PokerValue {
  login: Login;
  addStories: AddStories;
  onLogin: OnLogin;
  onAddStories: OnAddStories;
  onDisconnect: OnDisconnect;
  addPoints: AddPoints;
  onAddPoints: OnAddPoints;
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
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addPoints: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onAddPoints: () => {},
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

  const addPoints: AddPoints = () => {
    socket.emit("points");
  };

  const onAddPoints: OnAddPoints = (cb) => {
    socket.on("points", cb);
  };

  return (
    <PokerContext.Provider value={{ login, addStories, onLogin, onAddStories, onDisconnect, addPoints, onAddPoints }}>
      {children}
    </PokerContext.Provider>
  );
};

export default PokerContext;
