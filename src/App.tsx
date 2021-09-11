import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router";
import PokerContext from "./contexts/PokerContext";
import UserContext, { UserValue } from "./contexts/UserContext";
import StoryContext from "./contexts/StoryContext";
import { getUsers, getStories } from "./services/apiService";
import HomePage from "./pages/HomePage/HomePage";
import JoinPage from "./pages/JoinPage/JoinPage";
import SelectPage from "./pages/SelectPage/SelectPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import StoriesPage from "./pages/StoriesPage/StoriesPage";
import "./App.css";

const App: React.FC = () => {
  const { addUser } = useContext(UserContext) as UserValue;

  const getAndAddUsers = async () => {
    const response = await getUsers();
    if (response && response.data && response.data.users) {
      addUser(response.data.users);
    }
  };

  const { addStories } = useContext(StoryContext);
  const getAndAddStories = async () => {
    const response = await getStories();
    if (response && response.data && response.data.stories) {
      addStories(response.data.stories);
    }
  };

  const { onLogin, onDisconnect, onAddStories } = useContext(PokerContext);
  useEffect(() => {
    onLogin(getAndAddUsers);
    onDisconnect(getAndAddUsers);
    onAddStories(getAndAddStories);
  }, []);

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
        <Route path="/results">
          <ResultsPage />
        </Route>
        <Route path="/stories">
          <StoriesPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
