import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StoryContext from "../../contexts/StoryContext";
import { getPoints } from "../../services/apiService";
import PokerContext from "../../contexts/PokerContext";
import UserContext, { User, UserValue } from "../../contexts/UserContext";
import Page from "../../components/Page/Page";
import Button from "../../components/Button/Button";
import Result from "../../components/Result/Result";
import "./ResultsPage.scss";

const ResultsPage: React.FC = () => {
  const [points, setPoints] = useState<{ storyId: string; userId: { name: string }; points: number }[]>([]);
  const { stories } = useContext(StoryContext);
  const { userState } = useContext(UserContext) as UserValue;
  const { idx } = useParams<{ idx: string }>();
  const currentStory = stories[+idx];

  const { addPoints, onAddPoints } = useContext(PokerContext);

  const pointsRow = userState.map((curr: User, idx: number) => {
    return (
      <Result
        key={idx}
        isAllIn={points.length === userState.length}
        points={points.find((user) => user.userId.name === curr.name)?.points}
        user={curr}
      />
    );
  });

  const getAndAddPoints = (isSubscribed: boolean) => {
    if (currentStory && currentStory._id) {
      getPoints(currentStory._id).then((response) => {
        if (isSubscribed && response && response.data && response.data.points) {
          setPoints(response.data.points);
        }
      });
    }
  };

  useEffect(() => {
    let isSubscribed = true;

    addPoints();

    onAddPoints(() => getAndAddPoints(isSubscribed));

    return () => {
      isSubscribed = false;
    };
  }, []);

  useEffect(() => {
    let isSubscribed = true;

    getAndAddPoints(isSubscribed);

    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <Page className="ResultsPage" color="veryDarkBlue">
      <header>
        <h1>Results</h1>
      </header>
      <div className="results" style={{ fontSize: "24px", display: "flex", flexDirection: "column", width: "100%" }}>
        {pointsRow}
      </div>
      <div>
        <Button type="contained" label="AGAIN" color="pink" />
        <Button type="text" label="HOME" color="pink" />
      </div>
    </Page>
  );
};

export default ResultsPage;
