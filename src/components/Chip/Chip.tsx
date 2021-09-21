import React from "react";
import classnames from "classnames";
import { User } from "../../contexts/UserContext";
import "./Chip.scss";

interface ChipProps {
  className?: string;
  user: User;
}

const Chip: React.FC<ChipProps> = ({ className, user }) => {
  const chipClassNames = classnames(`Chip ${className ? className : ""}`);
  return (
    <div className={chipClassNames}>
      <img
        src={`https://picsum.photos/seed/${user.name}${new Date().getHours()}/60`}
        alt="random pic"
        height="60"
        width="60"
      />
      <div className="info-wrapper">
        <div className="user">{user.name}</div>
        <div className="role">{user.role}</div>
      </div>
    </div>
  );
};

export default Chip;
