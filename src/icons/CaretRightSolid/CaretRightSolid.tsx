import React from "react";
import classnames from "classnames";
import "./CaretRightSolid.scss";

interface CaretRightSolidProps {
  height?: string;
  width?: string;
  color?: "blue" | "yellow" | "pink" | "red";
  className?: string;
  handleClick?: (e: React.MouseEvent<SVGElement>) => void;
  disabled?: boolean;
}

const CaretRightSolid: React.FC<CaretRightSolidProps> = ({
  height,
  width,
  color,
  className,
  handleClick,
  disabled,
}) => {
  const caretRightSolidClassNames = classnames(
    `CaretRightSolid svg-inline--fa fa-caret-right fa-w-6 ${className ? className : ""}`,
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
      data-icon="caret-right"
      className={caretRightSolidClassNames}
      role="img"
      viewBox="0 0 192 512"
      height={height}
      width={width}
      onClick={(e) => !disabled && handleClick && handleClick(e)}
    >
      <path
        fill="currentColor"
        d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
      />
    </svg>
  );
};

export default CaretRightSolid;
