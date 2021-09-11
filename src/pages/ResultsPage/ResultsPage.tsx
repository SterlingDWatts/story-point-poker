import React, { useContext } from "react";
import UserContext, { User, UserValue } from "../../contexts/UserContext";
import Page from "../../components/Page/Page";
import Button from "../../components/Button/Button";
import "./ResultsPage.css";

const ResultsPage: React.FC = () => {
  const { userState } = useContext(UserContext) as UserValue;

  const users = userState.map((user: User, idx) => {
    return (
      <div key={idx} style={{ display: "flex" }}>
        <div className="user" style={{ height: "54px", flex: 1 }}>
          {user.name}
        </div>
        <div className="points">3</div>
      </div>
    );
  });

  return (
    <Page className="ResultsPage" color="veryDarkBlue">
      <header>
        <h1>Results</h1>
      </header>
      <div className="results" style={{ fontSize: "24px", display: "flex", flexDirection: "column", width: "100%" }}>
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
