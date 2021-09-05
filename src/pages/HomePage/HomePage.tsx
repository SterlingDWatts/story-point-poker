import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Page from "../../components/Page/Page";
import Button from "../../components/Button/Button";
import LoginContext, { LoginValue } from "../../contexts/LoginContext";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const { loginState, getToken } = useContext(LoginContext) as LoginValue;
  useEffect(() => {
    getToken();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
  };

  return (
    <Page className="HomePage" color="blue">
      <header>
        <h1>MINDERA POKER</h1>
      </header>
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
