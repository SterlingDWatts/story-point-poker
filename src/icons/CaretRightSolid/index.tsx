import React from "react";
import { SVGProps } from "../../models/svg";
import SVGWrapper from "../SVGWrapper";
import "./style.scss";

const CaretRightSolid: React.FC<SVGProps> = ({ className, ...props }) => {
  return (
    <SVGWrapper
      dataPrefix="fas"
      dataIcon="caret-right"
      viewBox="0 0 192 512"
      className={`CaretRightSolid fa-caret-right fa-w-6${className ? ` ${className}` : ""}`}
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
      />
    </SVGWrapper>
  );
};

export default CaretRightSolid;