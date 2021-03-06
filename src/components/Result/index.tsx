import React from "react";
import CheckRegular from "../../icons/CheckRegular";
import LoadingEllipsis from "../LoadingEllipsis";
import { User } from "../../models/userContext";
import "./style.scss";

interface ResultProps {
  isAllIn: boolean;
  user: User;
  points?: number;
}

const Result: React.FC<ResultProps> = ({ isAllIn, user, points }) => {
  let pointsOrIcon;

  if (isAllIn) {
    pointsOrIcon = `${points}`;
  } else if (points) {
    pointsOrIcon = <CheckRegular height="24px" />;
  } else {
    pointsOrIcon = <LoadingEllipsis width="24px" />;
  }

  return (
    <div className={`Result${points ? " color" : ""}`}>
      <div className="user">{user.name}</div>
      <div className="points">{pointsOrIcon}</div>
    </div>
  );
};

export default Result;
