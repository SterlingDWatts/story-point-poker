import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Page from "../../components/Page/Page";
import TextInputGroup from "../../components/TextInputGroup/TextInputGroup";
import Fab from "../../icons/Fab/Fab";
import PlusRegular from "../../icons/PlusRegular/PlusRegular";
import TextWithEditDelete from "../../components/TextWithEditDelete/TextWithEditDelete";
import Button from "../../components/Button/Button";
import { postStories, getStories, deleteStory as deleteStoryAPI } from "../../services/apiService";
import LoginContext, { LoginValue } from "../../contexts/LoginContext";
import PokerContext from "../../contexts/PokerContext";
import "./StoriesPage.css";

export interface Story {
  title: string;
  _id: string;
  dateAdded: Date;
  position: number;
}

export type Stories = Story[];

const StoriesPage: React.FC = () => {
  const [stories, setStories] = useState<Stories>([]);
  const [currentId, setCurrentId] = useState(`${Math.random() * 100}`);

  const [storyName, setStoryName] = useState<string>("");

  const { addStories } = useContext(PokerContext);

  const history = useHistory();
  const { loginState } = useContext(LoginContext) as LoginValue;

  useEffect(() => {
    let isSubscribed = true;
    if (loginState.isLoggedIn) {
      getStories().then((res) => {
        const sortedStories = res.data.stories.sort((a, b) => a.position - b.position);
        if (isSubscribed) {
          setStories(sortedStories);
        }
      });
    } else {
      history.push("/join");
    }

    return () => {
      isSubscribed = false;
    };
  }, []);

  const editStory = (storyToEdit: Story) => {
    setCurrentId(storyToEdit._id);
    const filteredStories = stories.filter((story: Story) => story._id !== storyToEdit._id);
    setStories([...filteredStories]);
    setStoryName(storyToEdit.title);
  };

  const deleteStory = (id: string) => {
    const filteredStories = stories.filter((story: Story) => story._id !== id);
    setStories([...filteredStories]);
    deleteStoryAPI(id);
  };

  const addStory = (name: string, position: number) => {
    setStories([...stories, { title: name, _id: currentId, dateAdded: new Date(), position }]);
    setCurrentId(`${Math.random() * 100}`);
    setStoryName("");
  };

  const moveUp = (idx: number) => {
    if (idx > 0) {
      const storiesCopy = [...stories];
      const curr = storiesCopy[idx];
      storiesCopy[idx] = storiesCopy[idx - 1];
      storiesCopy[idx - 1] = curr;
      setStories(storiesCopy);
    }
  };

  const moveDown = (idx: number) => {
    if (idx < stories.length - 1) {
      const storiesCopy = [...stories];
      const next = storiesCopy[idx];
      storiesCopy[idx] = storiesCopy[idx + 1];
      storiesCopy[idx + 1] = next;
      setStories(storiesCopy);
    }
  };

  const handleSubmit = async () => {
    const updatedStories = stories.map((story, idx) => {
      return { ...story, position: idx };
    });
    await postStories(updatedStories);
    addStories(updatedStories);
    history.push("/");
  };

  const storyComponents = stories.map((story: Story, idx) => {
    return (
      <TextWithEditDelete
        story={story}
        key={story._id}
        idx={idx}
        storiesLength={stories.length}
        handleUpClick={moveUp}
        handleDownClick={moveDown}
        handleEditClick={editStory}
        handleDeleteClick={deleteStory}
      />
    );
  });

  return (
    <Page className="StoriesPage">
      <div>
        <header>
          <h1>User Stories</h1>
        </header>
        <div className="stories">
          <form
            action="submit"
            style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <TextInputGroup
              label="Story"
              value={storyName}
              handleChange={(event) => setStoryName(event.target.value)}
              color="blue"
              helper="Brief description"
            />
            <Fab
              handleClick={() => addStory(storyName, stories.length === 0 ? 0 : stories.length)}
              type="outlined"
              color="blue"
            >
              <PlusRegular height="16px" width="16px" />
            </Fab>
          </form>
          <div>{storyComponents}</div>
        </div>
      </div>
      <div className="buttons">
        <Button label="SAVE" type="outlined" color="blue" handleClick={handleSubmit} />
        <Link to="/">
          <Button type="text" label="BACK" color="blue" />
        </Link>
      </div>
    </Page>
  );
};

export default StoriesPage;
