import React from "react";
import classnames from "classnames";
import "./CheckRegular.scss";

interface CheckRegularProps {
  width?: string;
  height?: string;
  className?: string;
  handleClick?: (e?: React.MouseEvent<SVGElement>) => void;
}

const CheckRegular: React.FC<CheckRegularProps> = ({ width, height, className, handleClick }) => {
  const checkRegularClassNames = classnames(
    `CheckRegular svg-inline--fa fa-check fa-w-16 ${className ? className : ""}`
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="check"
      className={checkRegularClassNames}
      role="img"
      viewBox="0 0 512 512"
      height={height}
      width={width}
      onClick={handleClick}
    >
      <path
        fill="currentColor"
        d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
      />
    </svg>
  );
};

export default CheckRegular;
