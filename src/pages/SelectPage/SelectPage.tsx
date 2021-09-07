import React, { useState } from "react";
import Page from "../../components/Page/Page";
import Button from "../../components/Button/Button";
import "./SelectPage.css";

const SelectPage: React.FC = () => {
  const [storyPoints, setStoryPoints] = useState([
    { value: "1", selected: false },
    { value: "2", selected: false },
    { value: "3", selected: false },
    { value: "5", selected: false },
    { value: "8", selected: false },
    { value: "13", selected: false },
    { value: "21", selected: false },
    { value: "?", selected: false },
  ]);

  const handleClick = (value: string) => {
    const newStoryPoints = storyPoints.map((point) =>
      point.value === value ? { ...point, selected: true } : { ...point, selected: false }
    );
    setStoryPoints(newStoryPoints);
  };

  const cards = storyPoints.map((point) => (
    <div className="card" key={point.value} onClick={() => handleClick(point.value)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(https://picsum.photos/seed/${
            point.value !== "?" ? point.value : "34"
          }${new Date().getDay()}/200)`,
        }}
      >
        <div className={`points-container ${point.selected ? "selected" : ""}`}>
          <div>{point.value}</div>
        </div>
      </div>
    </div>
  ));

  const buttonEnabled = storyPoints.reduce((acc: boolean, curr: { value: string; selected: boolean }): boolean => {
    return acc || curr.selected;
  }, false);

  return (
    <Page className="SelectPage" color="yellow">
      <header>
        <h1>SELECT</h1>
      </header>
      <div className="cards">{cards}</div>
      <div className="buttons">
        <Button type="contained" label="SUBMIT" color="pink" disabled={!buttonEnabled} />
      </div>
    </Page>
  );
};

export default SelectPage;
