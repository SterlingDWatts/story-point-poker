import React, { useState, useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import Page from "../../components/Page/Page";
import Button from "../../components/Button/Button";
import StoryPointCard from "../../components/StoryPointCard/StoryPointCard";
import StoryContext from "../../contexts/StoryContext";
import LoginContext from "../../contexts/LoginContext";
import { postPoints } from "../../services/apiService";
import "./SelectPage.scss";

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

  const { loginState } = useContext(LoginContext);
  const { stories } = useContext(StoryContext);
  const { idx } = useParams<{ idx: string }>();
  const currentStory = stories[+idx];

  const history = useHistory();

  const handleClick = (value: string) => {
    const newStoryPoints = storyPoints.map((point) =>
      point.value === value ? { ...point, selected: true } : { ...point, selected: false }
    );
    setStoryPoints(newStoryPoints);
  };

  const cards = storyPoints.map(({ value, selected }) => (
    <StoryPointCard value={value} selected={selected} handleClick={handleClick} key={value} />
  ));

  const buttonEnabled = storyPoints.reduce((acc: boolean, curr: { value: string; selected: boolean }): boolean => {
    return acc || curr.selected;
  }, false);

  if (!currentStory) {
    history.push("/");
    return <div></div>;
  }

  const handleSubmit = async () => {
    const selected = storyPoints.find((point) => point.selected);
    if (buttonEnabled && selected) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      await postPoints(currentStory._id, loginState.token!._id, selected.value);
      history.push(`/results/${idx}`);
    }
  };

  return (
    <Page className="SelectPage" color="yellow">
      <header>
        <h1>{currentStory.title.toUpperCase()}</h1>
      </header>
      <div className="cards">{cards}</div>
      <div className="buttons">
        <Button type="contained" label="SUBMIT" color="pink" disabled={!buttonEnabled} handleClick={handleSubmit} />
        <Link to="/">
          <Button type="text" label="HOME" color="pink" />
        </Link>
      </div>
    </Page>
  );
};

export default SelectPage;
