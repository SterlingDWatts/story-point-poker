import React from "react";
import PencilRegular from "../../icons/PencilRegular/PencilRegular";
import TrashAltRegular from "../../icons/TrashAltRegular/TrashAltRegular";
import CaretUpSolid from "../../icons/CaretUpSolid/CaretUpSolid";
import CaretDownSolid from "../../icons/CaretDownSolid/CaretDownSolid";
import { Story } from "../../pages/StoriesPage/StoriesPage";
import "./TextWithEditDelete.scss";

interface TextWithEditDeleteProps {
  story: Story;
  idx: number;
  storiesLength: number;
  handleUpClick: (idx: number) => void;
  handleDownClick: (idx: number) => void;
  handleDeleteClick: (id: string) => void;
  handleEditClick: (story: Story) => void;
}

const TextWithEditDelete: React.FC<TextWithEditDeleteProps> = ({
  story,
  idx,
  storiesLength,
  handleUpClick,
  handleDownClick,
  handleDeleteClick,
  handleEditClick,
}) => (
  <div className={`TextWithEditDelete ${idx === 0 ? "top" : ""} ${idx === storiesLength - 1 ? "bottom" : ""}`}>
    <CaretUpSolid width="16px" height="16px" handleClick={() => handleUpClick(idx)} />
    <CaretDownSolid width="16px" height="16px" handleClick={() => handleDownClick(idx)} />
    <div className="title">{story.title}</div>
    <PencilRegular height="16px" handleClick={() => handleEditClick(story)} />
    <TrashAltRegular height="16px" handleClick={() => handleDeleteClick(story._id)} />
  </div>
);

export default TextWithEditDelete;
