import React, { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Page from "../../components/Page/Page";
import Button from "../../components/Button/Button";
import Chip from "../../components/Chip/Chip";
import LoginContext from "../../contexts/LoginContext";
import UserContext, { UserValue } from "../../contexts/UserContext";
import StoryContext from "../../contexts/StoryContext";
import { getUsers } from "../../services/apiService";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const { loginState } = useContext(LoginContext);
  const { userState, addUser } = useContext(UserContext) as UserValue;
  const { stories } = useContext(StoryContext);

  const history = useHistory();
  useEffect(() => {
    let isSubscribed = true;
    if (loginState.isLoggedIn) {
      getUsers().then((response) => {
        if (isSubscribed && response && response.data && response.data.users) {
          addUser(response.data.users);
        }
      });
    } else {
      history.push("/join");
    }

    return () => {
      isSubscribed = false;
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
  };

  const users = userState.map((user) => <Chip user={user} key={user._id} />);

  return (
    <Page className="HomePage" color="blue">
      <header>
        <h1>MINDERA POKER</h1>
      </header>
      <div className="user-chips">{users}</div>
      <div className="buttons">
        <Link to={stories.length === 0 ? "/" : "/poker/0"}>
          <Button
            type="contained"
            color="yellow"
            label="START"
            handleClick={scrollToTop}
            disabled={stories.length === 0}
          />
        </Link>
        <Link to="/stories">
          <Button type="text" color="yellow" label="STORIES" handleClick={scrollToTop} />
        </Link>
      </div>
    </Page>
  );
};

export default HomePage;
