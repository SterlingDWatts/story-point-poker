import React, { createContext, useState } from "react";
import { Story } from "../pages/StoriesPage/StoriesPage";

const StoryContext = createContext({
  stories: [] as Story[],
  addStories: (_: Story[]) => {
    console.log(_);
  },
});

export const StoryProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [stories, setStories] = useState<Story[]>([]);

  const addStories = (stories: Story[]) => {
    setStories(stories);
  };

  return <StoryContext.Provider value={{ stories, addStories }}>{children}</StoryContext.Provider>;
};

export default StoryContext;
