import React, { useEffect, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Page from "../../components/Page/Page";
import Button from "../../components/Button/Button";
import Chip from "../../components/Chip/Chip";
import LoginContext, { LoginValue } from "../../contexts/LoginContext";
import UserContext, { UserValue } from "../../contexts/UserContext";
import { getUsers } from "../../services/apiService";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { loginState } = useContext(LoginContext) as LoginValue;
  const { addUser, userState } = useContext(UserContext) as UserValue;

  const getAndAddUsers = async (isSubscribed: boolean) => {
    const response = await getUsers();
    if (isSubscribed) {
      setIsLoading(false);
      if (response && response.data && response.data.users) {
        addUser(response.data.users);
      }
    }
  };

  const history = useHistory();
  useEffect(() => {
    let isSubscribed = true;
    if (loginState.isLoggedIn) {
      getAndAddUsers(isSubscribed);
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
        <Link to="/poker">
          <Button type="contained" color="yellow" label="START" handleClick={scrollToTop} disabled={isLoading} />
        </Link>
        <Link to="/stories">
          <Button type="text" color="yellow" label="STORIES" handleClick={scrollToTop} />
        </Link>
      </div>
    </Page>
  );
};

export default HomePage;
