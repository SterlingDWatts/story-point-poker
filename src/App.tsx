import React from "react";
import { Switch, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import JoinPage from "./pages/JoinPage/JoinPage";
import SelectPage from "./pages/SelectPage/SelectPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/join">
          <JoinPage />
        </Route>
        <Route path="/poker">
          <SelectPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
