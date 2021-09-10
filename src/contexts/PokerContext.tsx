export {};
// import React, { createContext, useState } from "react";
// import { io } from "socket.io-client";
// import { instance } from "../services/apiService";

// type PokerRole = "Front End Dev" | "QAE" | "Team Lead";

// type PossiblePoints = "1" | "2" | "3" | "5" | "8" | "13" | "21" | "?";

// interface PokerUser {
//   _id: number;
//   name: string;
//   role: PokerRole;
// }

// interface PokerStory {
//   _id: number;
//   name: string;
// }

// interface PokerPoints {
//   _id: number;
//   points: PossiblePoints;
//   userId: number;
//   storyId: number;
// }

// const PokerContext = createContext(null);

// const socket = io("https://alluring-grand-teton-45725.herokuapp.com");

// export const PokerProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
//   const [userState, setUserState] = useState([]);

//   const login = (user: Partial<PokerUser>) => {
//     socket.emit("login", user);
//   };

//   const getNewUserState = (users: PokerUser[]) => {
//     setUserState(users);
//   };

//   const addStory = (story: Partial<PokerStory>) => {
//     socket.emit("addStory", story);
//   };

//   socket.on("addedUser", (users: PokerUser[]) => {
//     getNewUserState(users);
//   });

//   socket.on("addedStory", () => {
//     setNewStoryState();
//   });

//   return <PokerContext.Provider value={{ userState, login }}>{children}</PokerContext.Provider>;
// };

// export default PokerContext;
