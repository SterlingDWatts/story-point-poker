import React from "react";
import classnames from "classnames";
import "./CaretLeftSolid.scss";

interface CaretLeftSolidProps {
  height?: string;
  width?: string;
  color?: "blue" | "yellow" | "pink" | "red";
  className?: string;
  handleClick?: (e: React.MouseEvent<SVGElement>) => void;
  disabled?: boolean;
}

const CaretLeftSolid: React.FC<CaretLeftSolidProps> = ({ height, width, color, className, handleClick, disabled }) => {
  const caretLeftSolidClassNames = classnames(
    `CaretLeftSolid svg-inline--fa fa-caret-left fa-w-6 ${className ? className : ""}`,
    {
      "color-pink": color === "pink",
      "color-blue": color === "blue",
      "color-yellow": color === "yellow",
      "color-red": color === "red",
      disabled: disabled,
    }
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="caret-left"
      className={caretLeftSolidClassNames}
      role="img"
      viewBox="0 0 192 512"
      height={height}
      width={width}
      onClick={(e) => !disabled && handleClick && handleClick(e)}
    >
      <path
        fill="currentColor"
        d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"
      />
    </svg>
  );
};

export default CaretLeftSolid;
