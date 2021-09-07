import React from "react";
import "./StoryPointCard.css";

interface StoryPointCardProps {
  value: string;
  selected: boolean;
  handleClick: (value: string) => void;
}

const StoryPointCard: React.FC<StoryPointCardProps> = ({ value, selected, handleClick }) => (
  <div className="StoryPointCard" key={value} onClick={() => handleClick(value)}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(https://picsum.photos/seed/${value !== "?" ? value : "34"}${new Date().getDay()}/200)`,
      }}
    >
      <div className={`points-container ${selected ? "selected" : ""}`}>
        <div>{value}</div>
      </div>
    </div>
  </div>
);

export default StoryPointCard;
