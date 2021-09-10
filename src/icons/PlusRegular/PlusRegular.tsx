import React from "react";
import classnames from "classnames";
import "./PlusRegular.css";

interface PlusRegularProps {
  height: string;
  width: string;
  color?: "blue" | "yellow" | "pink" | "red";
  className?: string;
}

const PlusRegular: React.FC<PlusRegularProps> = ({ height, width, color, className }) => {
  const plusRegularClassNames = classnames(`PlusRegular svg-inline--fa fa-plus fa-w-12 ${className ? className : ""}`, {
    "color-pink": color === "pink",
    "color-blue": color === "blue",
    "color-yellow": color === "yellow",
    "color-red": color === "red",
  });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="plus"
      className={plusRegularClassNames}
      role="img"
      viewBox="0 0 384 512"
      style={{ height, width }}
    >
      <path
        fill="currentColor"
        d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
      />
    </svg>
  );
};

export default PlusRegular;
