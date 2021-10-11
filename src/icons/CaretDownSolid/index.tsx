import React from "react";
import { SVGProps } from "../../models/svg";
import SVGWrapper from "../SVGWrapper";
import "./style.scss";

const CaretDownSolid: React.FC<SVGProps> = ({ className, ...props }) => {
  return (
    <SVGWrapper
      dataPrefix="fas"
      dataIcon="caret-down"
      viewBox="0 0 320 512"
      className={`CaretDownSolid fa-caret-down fa-w-10${className ? ` ${className}` : ""}`}
      {...props}
    >
      <path
        fill="currentColor"
        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
      />
    </SVGWrapper>
  );
};

export default CaretDownSolid;
