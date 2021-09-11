import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { LoginProvider } from "./contexts/LoginContext";
import { PokerProvider } from "./contexts/PokerContext";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <LoginProvider>
          <PokerProvider>
            <App />
          </PokerProvider>
        </LoginProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
