import React from "react";
import classnames from "classnames";
import "./SpadeSolid.scss";

interface SpadeSolidProps {
  height?: string;
  width?: string;
  color?: "blue" | "yellow" | "pink" | "red";
  className?: string;
  handleClick?: (e: React.MouseEvent<SVGElement>) => void;
}

const SpadeSolid: React.FC<SpadeSolidProps> = ({ height, width, color, className, handleClick }) => {
  const spadeSolidClassNames = classnames(`SpadeSolid svg-inline--fa fa-spade fa-w-16 ${className ? className : ""}`, {
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
      data-prefix="fas"
      data-icon="spade"
      className={spadeSolidClassNames}
      role="img"
      viewBox="0 0 512 512"
      height={height}
      width={width}
      onClick={handleClick}
    >
      <path
        fill="currentColor"
        d="M272.5 6.6c-9.3-8.8-23.8-8.8-33.1 0C191.4 52.4 53.6 185 32 208.9c-19.3 21.3-32 49.4-32 80.6C0 360 54.9 415.7 123.5 416c36.7.1 69.7-15.7 92.5-40.9-.1 36.6-.8 52.3-52.4 75.4-14.1 6.3-22.2 21.6-18.7 36.6 3.3 14.5 16.3 24.8 31.2 24.8h159.4c15.5 0 29.2-10.8 32.1-26 2.8-14.6-4.8-29.2-18.4-35.2-51.6-23-52.8-38.1-53-75.6 23.4 25.8 57.5 41.8 95.3 40.8 67.5-1.7 120.7-56.5 120.7-124 0-32.2-12.2-61.2-32-83.1C458.4 185 320.6 52.4 272.5 6.6z"
      />
    </svg>
  );
};

export default SpadeSolid;
