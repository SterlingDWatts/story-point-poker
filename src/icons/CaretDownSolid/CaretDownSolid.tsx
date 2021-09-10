import React from "react";
import classnames from "classnames";
import "./CaretDownSolid.css";

interface CaretDownSolidProps {
  height: string;
  width: string;
  color?: "blue" | "yellow" | "pink" | "red";
  className?: string;
  handleClick?: (e?: React.MouseEvent<SVGElement>) => void;
}

const CaretDownSolid: React.FC<CaretDownSolidProps> = ({ height, width, color, className, handleClick }) => {
  const caretDownSolidClassNames = classnames(
    `CaretDownSolid svg-inline--fa fa-caret-down fa-w-10 ${className ? className : ""}`,
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
      data-icon="caret-down"
      className={caretDownSolidClassNames}
      role="img"
      viewBox="0 0 320 512"
      width={width}
      height={height}
      onClick={handleClick}
    >
      <path
        fill="currentColor"
        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
      />
    </svg>
  );
};

export default CaretDownSolid;
