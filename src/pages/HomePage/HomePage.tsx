import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Page from "../../components/Page/Page";
import Button from "../../components/Button/Button";
import LoginContext, { LoginValue } from "../../contexts/LoginContext";
import UserContext, { UserValue } from "../../contexts/UserContext";
import { instance } from "../../services/apiService";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const { loginState, getToken } = useContext(LoginContext) as LoginValue;
  useEffect(() => {
    getToken();
  }, []);

  const { addUser, userState } = useContext(UserContext) as UserValue;
  useEffect(() => {
    instance.get("/users").then((res) => {
      if (res && res.data && res.data.users) {
        addUser(res.data.users);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
  };

  const users = userState.map((user, idx) => (
    <div
      key={idx}
      style={{
        display: "flex",
        backgroundColor: "white",
        color: "black",
        marginBottom: "16px",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <img
        src={`https://picsum.photos/id/${Math.floor(Math.random() * 50)}/60`}
        alt="random"
        height="60px"
        width="60px"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flex: 1,
          padding: "16px 10px 10px",
          width: "fit-content",
        }}
      >
        <div className="name" style={{ fontWeight: 600 }}>
          {user.name}
        </div>
        <div className="role" style={{ fontSize: "12px" }}>
          {user.role}
        </div>
      </div>
    </div>
  ));

  return (
    <Page className="HomePage" color="blue">
      <header>
        <h1>MINDERA POKER</h1>
      </header>
      <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>{users}</div>
      <div className="buttons">
        {loginState.isLoggedIn ? (
          <Link to="/poker">
            <Button type="contained" color="yellow" label="START" handleClick={scrollToTop} />
          </Link>
        ) : (
          <Link to="/join">
            <Button type="contained" color="yellow" label="JOIN" handleClick={scrollToTop} />
          </Link>
        )}
      </div>
    </Page>
  );
};

export default HomePage;
