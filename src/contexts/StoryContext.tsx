import React, { createContext, useState } from "react";
import { Story } from "../models/story";

const StoryContext = createContext({
  stories: [] as Story[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addStories: (_: Story[]) => {
    // do nothing
  },
});

export const StoryProvider: React.FC = ({ children }) => {
  const [stories, setStories] = useState<Story[]>([]);

  const addStories = (stories: Story[]) => {
    setStories(stories);
  };

  return <StoryContext.Provider value={{ stories, addStories }}>{children}</StoryContext.Provider>;
};

export default StoryContext;
