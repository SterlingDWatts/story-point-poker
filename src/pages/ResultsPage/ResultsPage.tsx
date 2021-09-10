import React, { useContext } from "react";
import UserContext, { User, UserValue } from "../../contexts/UserContext";
import Page from "../../components/Page/Page";
import Button from "../../components/Button/Button";
import "./ResultsPage.css";

const ResultsPage: React.FC = () => {
  const { userState } = useContext(UserContext) as UserValue;

  const users = userState.map((user: User) => {
    return (
      <>
        <div className="user" key={user.name} style={{ height: "54px" }}>
          {user.name}
        </div>
        <div className="points">3</div>
      </>
    );
  });

  return (
    <Page className="ResultsPage" color="veryDarkBlue">
      <header>
        <h1>Results</h1>
      </header>
      <div
        className="results"
        style={{ fontSize: "24px", display: "grid", gridTemplateColumns: "auto 24px", width: "100%" }}
      >
        {users}
      </div>
      <div>
        <Button type="contained" label="AGAIN" color="pink" />
        <Button type="text" label="HOME" color="pink" />
      </div>
    </Page>
  );
};

export default ResultsPage;
