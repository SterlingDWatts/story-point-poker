import React, { useState } from "react";
import Page from "../../components/Page/Page";
import TextInputGroup from "../../components/TextInputGroup/TextInputGroup";
import Fab from "../../icons/Fab/Fab";
import PlusRegular from "../../icons/PlusRegular/PlusRegular";
import PencilRegular from "../../icons/PencilRegular/PencilRegular";
import TrashAltRegular from "../../icons/TrashAltRegular/TrashAltRegular";
import CaretUpSolid from "../../icons/CaretUpSolid/CaretUpSolid";
import CaretDownSolid from "../../icons/CaretDownSolid/CaretDownSolid";
import Button from "../../components/Button/Button";
import "./StoriesPage.css";

const StoriesPage: React.FC = () => {
  const [stories, setStories] = useState<{ title: string; id: number }[]>([]);

  const [storyName, setStoryName] = useState<string>("");

  const editStory = (storyToEdit: { title: string; id: number }) => {
    const filteredStories = stories.filter((story: { title: string; id: number }) => story.id !== storyToEdit.id);
    setStories([...filteredStories]);
    setStoryName(storyToEdit.title);
  };

  const deleteStory = (storyId: number) => {
    const filteredStories = stories.filter((story: { title: string; id: number }) => story.id !== storyId);
    setStories([...filteredStories]);
  };

  const addStory = (name: string) => {
    setStories([...stories, { title: name, id: Math.random() * 100 }]);
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

  const storyComponents = stories.map((story: { title: string; id: number }, idx) => {
    return (
      <div
        className={`${idx === 0 ? "top" : ""} ${idx === stories.length - 1 ? "bottom" : ""}`}
        key={story.id}
        style={{ display: "flex", gap: "16px", margin: "16px 0px" }}
      >
        <CaretUpSolid width="16px" height="16px" handleClick={() => moveUp(idx)} />
        <CaretDownSolid width="16px" height="16px" handleClick={() => moveDown(idx)} />
        <div style={{ flex: "1", minHeight: "45px" }}>{story.title}</div>
        <PencilRegular height="16px" handleClick={() => editStory(story)} />
        <TrashAltRegular height="16px" handleClick={() => deleteStory(story.id)} />
      </div>
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
            <Fab handleClick={() => addStory(storyName)} type="outlined" color="blue">
              <PlusRegular height="16px" width="16px" />
            </Fab>
          </form>
          <div>{storyComponents}</div>
        </div>
      </div>
      <Button label="SAVE" type="outlined" color="blue" />
    </Page>
  );
};

export default StoriesPage;
