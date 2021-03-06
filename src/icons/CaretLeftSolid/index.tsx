import React from "react";
import { SVGProps } from "../../models/svg";
import SVGWrapper from "../SVGWrapper";
import "./style.scss";

const CaretLeftSolid: React.FC<SVGProps> = ({ className, ...props }) => {
  return (
    <SVGWrapper
      dataPrefix="fas"
      dataIcon="caret-left"
      viewBox="0 0 192 512"
      className={`CaretLeftSolid fa-caret-left fa-w-6${className ? ` ${className}` : ""}`}
      {...props}
    >
      <path
        fill="currentColor"
        d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"
      />
    </SVGWrapper>
  );
};

export default CaretLeftSolid;
