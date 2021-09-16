import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import PokerContext, { PokerUser } from "./contexts/PokerContext";
import UserContext, { UserValue } from "./contexts/UserContext";
import LoginContext, { LoginValue } from "./contexts/LoginContext";
import StoryContext from "./contexts/StoryContext";
import { getUsers, getStories, postUser } from "./services/apiService";
import tokenService from "./services/tokenService";
import HomePage from "./pages/HomePage/HomePage";
import JoinPage from "./pages/JoinPage/JoinPage";
import SelectPage from "./pages/SelectPage/SelectPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import StoriesPage from "./pages/StoriesPage/StoriesPage";
import "./App.scss";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { addUser } = useContext(UserContext) as UserValue;
  const { getToken } = useContext(LoginContext) as LoginValue;
  const { onLogin, onDisconnect, onAddStories, login } = useContext(PokerContext);

  const getAndAddUsers = async (subscribed: boolean) => {
    const response = await getUsers();
    if (response && response.data && response.data.users && subscribed) {
      addUser(response.data.users);
    }
  };

  const { addStories } = useContext(StoryContext);
  const getAndAddStories = async (subscribed: boolean) => {
    const response = await getStories();
    if (response && response.data && response.data.stories && subscribed) {
      addStories(response.data.stories);
    }
  };

  useEffect(() => {
    let subscribed = true;
    onLogin(() => getAndAddUsers(subscribed));
    onDisconnect(() => getAndAddUsers(subscribed));
    onAddStories(() => getAndAddStories(subscribed));
    getAndAddStories(subscribed);
    const user = tokenService.getToken();
    getToken();
    setLoading(false);
    if (user && subscribed) {
      login({ ...user, isLoggedIn: true } as Partial<PokerUser>);
      postUser({ ...user, isLoggedIn: true }).then(() => {
        getAndAddUsers(subscribed);
      });
    }

    return () => {
      subscribed = false;
    };
  }, []);

  return (
    <div className="App">
      {!loading && (
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/join">
            <JoinPage />
          </Route>
          <Route path="/poker/:idx">
            <SelectPage />
          </Route>
          <Route path="/results/:idx">
            <ResultsPage />
          </Route>
          <Route path="/stories">
            <StoriesPage />
          </Route>
        </Switch>
      )}
    </div>
  );
};

export default App;
