import React from "react";
import classnames from "classnames";
import "./style.scss";

interface PageProps {
  children?: JSX.Element[];
  className?: string;
  color?: "blue" | "yellow" | "pink" | "veryDarkBlue";
}

const Page: React.FC<PageProps> = ({ className, children, color }) => {
  const pageClassNames = classnames(`Page ${className ? className : ""}`, {
    "color-blue": color === "blue",
    "color-yellow": color === "yellow",
    "color-pink": color === "pink",
    "color-very-dark-blue": color === "veryDarkBlue",
  });

  return (
    <div className={pageClassNames}>
      <div className="contents">{children}</div>
    </div>
  );
};

export default Page;
