import React from "react";
import classnames from "classnames";
import { createOptionalAttributes } from "./helper";
import "./style.scss";

interface SVGWrapperProps {
  viewBox: string;
  children: React.ReactNode;
  className?: string;
  color?: string;
  disabled?: boolean;
  ariaHidden?: boolean;
  focusable?: boolean;
  height?: string;
  width?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  style?: React.CSSProperties;
  handleClick?: (e?: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  dataPrefix?: string;
  dataIcon?: string;
}

const SVGWrapper: React.FC<SVGWrapperProps> = ({
  viewBox,
  children,
  className,
  color,
  disabled,
  ariaHidden = true,
  focusable = false,
  ...props
}) => {
  const svgWrapperClassNames = classnames(`SVGWrapper svg-inline--fa${className ? ` ${className}` : ""}`, {
    "color-pink": color === "pink",
    "color-blue": color === "blue",
    "color-yellow": color === "yellow",
    "color-red": color === "red",
    disabled: disabled,
  });

  const optionalAttributes = createOptionalAttributes({ ariaHidden, focusable, ...props });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      className={svgWrapperClassNames}
      viewBox={viewBox}
      {...optionalAttributes}
    >
      {children}
    </svg>
  );
};

export default SVGWrapper;
