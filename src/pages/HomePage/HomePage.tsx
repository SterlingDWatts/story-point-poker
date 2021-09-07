import React, { useEffect, useContext, useState } from "react";
import { io } from "socket.io-client";
import { Link, useHistory } from "react-router-dom";
import Page from "../../components/Page/Page";
import Button from "../../components/Button/Button";
import Chip from "../../components/Chip/Chip";
import LoginContext, { LoginValue } from "../../contexts/LoginContext";
import UserContext, { UserValue } from "../../contexts/UserContext";
import { getUsers } from "../../services/apiService";
import "./HomePage.css";

const HomePage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(true);

  const { loginState } = useContext(LoginContext) as LoginValue;
  const { addUser, userState } = useContext(UserContext) as UserValue;
  const history = useHistory();
  useEffect(() => {
    if (loginState.isLoggedIn) {
      getUsers(setIsLoading, addUser);
    } else {
      history.push("/join");
    }
  }, []);

  useEffect(() => {
    const socket = io("https://alluring-grand-teton-45725.herokuapp.com");

    socket.on("login", () => {
      console.log("users");
      getUsers(setIsLoading, addUser);
    });

    return () => {
      socket.disconnect();
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
          <Button type="contained" color="yellow" label="START" handleClick={scrollToTop} />
        </Link>
      </div>
    </Page>
  );
};

export default HomePage;
