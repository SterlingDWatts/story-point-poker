import React from "react";
import classnames from "classnames";
import "./Fab.css";

interface FabProps {
  className?: string;
  children?: JSX.Element | string;
  handleClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  type: "text" | "outlined" | "contained";
  color: "blue" | "yellow" | "pink" | "clear";
  disabled?: boolean;
}

const Fab: React.FC<FabProps> = ({ className, children, handleClick, type, color, disabled }) => {
  const fabClassNames = classnames(`Fab ${className ? className : ""}`, {
    "type-text": type === "text",
    "type-outlined": type === "outlined",
    "type-contained": type === "contained",
    "color-blue": color === "blue",
    "color-yellow": color === "yellow",
    "color-pink": color === "pink",
    "color-clear": color === "clear",
    "button--disabled": disabled,
  });
  return (
    <button className={fabClassNames} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Fab;
