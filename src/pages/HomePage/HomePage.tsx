import React from "react";
import Page from "../../components/Page/Page";
import Button from "../../components/Button/Button";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <Page className="HomePage" color="blue">
      <header>
        <h1>MINDERA POKER</h1>
      </header>
      <div className="buttons">
        <Button type="contained" color="yellow" label="JOIN" />
        <Button type="contained" color="yellow" label="START" />
        <Button type="text" color="pink" label="ADD STORIES" />
        <Button type="text" color="pink" label="EDIT STORIES" />
      </div>
    </Page>
  );
};

export default HomePage;
