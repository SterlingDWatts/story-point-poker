import React from "react";
import { SVGProps } from "../../models/svg";
import SVGWrapper from "../SVGWrapper";
import "./style.scss";

const PlusRegular: React.FC<SVGProps> = ({ className, ...props }) => {
  return (
    <SVGWrapper
      dataPrefix="far"
      dataIcon="plus"
      viewBox="0 0 384 512"
      className={`PlusRegular fa-plus fa-w-12${className ? ` ${className}` : ""}`}
      {...props}
    >
      <path
        fill="currentColor"
        d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
      />
    </SVGWrapper>
  );
};

export default PlusRegular;
