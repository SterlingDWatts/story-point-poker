import React from "react";
import classnames from "classnames";
import "./CaretUpSolid.css";

interface CaretUpSolidProps {
  height: string;
  width: string;
  color?: "blue" | "yellow" | "pink" | "red";
  className?: string;
  handleClick?: (e: React.MouseEvent<SVGElement>) => void;
}

const CaretUpSolid: React.FC<CaretUpSolidProps> = ({ height, width, color, className, handleClick }) => {
  const caretUpSolidClassNames = classnames(
    `CaretUpSolid svg-inline--fa fa-caret-up fa-w-10 ${className ? className : ""}`,
    {
      "color-pink": color === "pink",
      "color-blue": color === "blue",
      "color-yellow": color === "yellow",
      "color-red": color === "red",
    }
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="caret-up"
      className={caretUpSolidClassNames}
      role="img"
      viewBox="0 0 320 512"
      style={{ height, width }}
      onClick={handleClick}
    >
      <path
        fill="currentColor"
        d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
      />
    </svg>
  );
};

export default CaretUpSolid;
