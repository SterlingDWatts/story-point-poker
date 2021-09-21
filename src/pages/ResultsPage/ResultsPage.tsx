import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import StoryContext from "../../contexts/StoryContext";
import { getPoints } from "../../services/apiService";
import PokerContext from "../../contexts/PokerContext";
import UserContext, { User, UserValue } from "../../contexts/UserContext";
import Page from "../../components/Page/Page";
import Result from "../../components/Result/Result";
import BottomNav from "../../components/BottomNav/BottomNav";
import CaretLeftSolid from "../../icons/CaretLeftSolid/CaretLeftSolid";
import CaretRightSolid from "../../icons/CaretRightSolid/CaretRightSolid";
import HomeSolid from "../../icons/HomeSolid/HomeSolid";
import RedoSolid from "../../icons/RedoSolid/RedoSolid";
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
        <h1>{currentStory.title}</h1>
      </header>
      <div className="results" style={{ fontSize: "24px", display: "flex", flexDirection: "column", width: "100%" }}>
        {pointsRow}
      </div>
      <div></div>
      <BottomNav>
        <CaretLeftSolid
          height="24px"
          color="pink"
          disabled={idx === "0"}
          handleClick={() => history.push(`/results/${+idx - 1}`)}
        />
        <HomeSolid height="24px" color="pink" handleClick={() => history.push("/")} />
        <RedoSolid height="24px" color="pink" handleClick={() => history.push("/poker/" + idx)} />
        <CaretRightSolid
          height="24px"
          color="pink"
          disabled={+idx >= stories.length - 1}
          handleClick={() => history.push(`/results/${+idx + 1}`)}
        />
      </BottomNav>
    </Page>
  );
};

export default ResultsPage;
