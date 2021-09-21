import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import StoryContext from "../../contexts/StoryContext";
import { getPoints } from "../../services/apiService";
import PokerContext from "../../contexts/PokerContext";
import UserContext, { User, UserValue } from "../../contexts/UserContext";
import Page from "../../components/Page/Page";
import Result from "../../components/Result/Result";
import Button from "../../components/Button/Button";
import "./ResultsPage.scss";

const ResultsPage: React.FC = () => {
  const [points, setPoints] = useState<{ storyId: string; userId: { name: string }; points: number }[]>([]);
  const { stories } = useContext(StoryContext);
  const { userState } = useContext(UserContext) as UserValue;
  const { idx } = useParams<{ idx: string }>();
  const currentStory = stories[+idx];

  const history = useHistory();

  if (!currentStory) {
    history.push("/");
    return <div></div>;
  }

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
  }, [idx]);

  return (
    <Page className="ResultsPage" color="veryDarkBlue">
      <header>
        <h1>{currentStory.title.toUpperCase()}</h1>
      </header>
      <div className="results" style={{ fontSize: "24px", display: "flex", flexDirection: "column", width: "100%" }}>
        {pointsRow}
      </div>
      <div className="buttons">
        <Button
          type="contained"
          label="NEXT"
          color="pink"
          disabled={+idx >= stories.length - 1}
          handleClick={() => +idx < stories.length - 1 && history.push(`/poker/${+idx + 1}`)}
        />
        <Link to={`/poker/${idx}`}>
          <Button type="text" label="REDO" color="pink" />
        </Link>
      </div>
    </Page>
  );
};

export default ResultsPage;
