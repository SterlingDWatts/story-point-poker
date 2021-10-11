import React from "react";
import "./style.scss";

interface StoryPointCardProps {
  value: string;
  selected: boolean;
  handleClick: (value: string) => void;
  storyNumber: string;
}

const StoryPointCard: React.FC<StoryPointCardProps> = ({ value, selected, handleClick, storyNumber }) => (
  <div className="StoryPointCard" key={value} onClick={() => handleClick(value)}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(https://picsum.photos/seed/${
          value !== "?" ? value : "34"
        }${new Date().getHours()}${storyNumber}/250/350)`,
      }}
    >
      <div className={`points-container ${selected ? "selected" : ""}`}>
        <div className="points">{value}</div>
        <div className="points">{value}</div>
      </div>
    </div>
  </div>
);

export default StoryPointCard;
