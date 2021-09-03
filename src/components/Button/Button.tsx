import React from "react";
import classnames from "classnames";
import "./Button.css";

interface ButtonProps {
  className?: string;
  type: "text" | "outlined" | "contained";
  color: "blue" | "yellow" | "pink" | "clear";
  disabled?: boolean;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ className, type, color, disabled, label }) => {
  const buttonClassNames = classnames(`Button ${className ? className : ""}`, {
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
    <button className={buttonClassNames}>
      <div className="contents">
        <div className="label">{label}</div>
      </div>
    </button>
  );
};

export default Button;
