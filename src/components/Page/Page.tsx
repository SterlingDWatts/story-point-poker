import React from "react";
import classnames from "classnames";
import "./Page.css";

interface PageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
  className?: string;
  color?: "blue" | "yellow" | "pink";
}

const Page: React.FC<PageProps> = ({ className, children, color }) => {
  const pageClassNames = classnames(`Page ${className ? className : ""}`, {
    "color-blue": color === "blue",
    "color-yellow": color === "yellow",
    "color-pink": color === "pink",
  });

  return <div className={pageClassNames}> {children} </div>;
};

export default Page;
