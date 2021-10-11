import React from "react";
import Page from "../../components/Page";
import LoginForm from "../../components/LoginForm";
import "./style.scss";

const LoginPage: React.FC = () => {
  return (
    <Page className="LoginPage">
      <header>
        <h1>LOGIN</h1>
      </header>
      <LoginForm />
    </Page>
  );
};

export default LoginPage;
