import React from "react";
import Page from "../../components/Page/Page";
import JoinForm from "../../components/JoinForm/JoinForm";
import "./JoinPage.scss";

const JoinPage: React.FC = () => {
  return (
    <Page className="JoinPage">
      <header>
        <h1>JOIN</h1>
      </header>
      <JoinForm />
    </Page>
  );
};

export default JoinPage;
