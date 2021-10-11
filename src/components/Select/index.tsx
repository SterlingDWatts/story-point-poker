import React from "react";
import classnames from "classnames";
import CaretUpSolid from "../../icons/CaretUpSolid";
import Required from "../Required";
import "./style.scss";

export interface SelectProps {
  className?: string;
  label: string;
  color?: "pink" | "yellow" | "blue";
  selectedValue: string;
  handleClick: () => void;
  isExpanded: boolean;
  required?: boolean;
  errorValidation?: string;
}

const Select: React.FC<SelectProps> = ({
  className,
  label,
  color,
  selectedValue,
  handleClick,
  isExpanded,
  required,
  errorValidation,
}) => {
  const selectClassNames = classnames(`Select ${className ? className : ""}`, {
    "color-pink": color === "pink",
    "color-blue": color === "blue",
    "color-yellow": color === "yellow",
    expanded: isExpanded,
    "option--selected": selectedValue.length > 0,
    error: errorValidation,
  });

  return (
    <div className={selectClassNames} onClick={handleClick}>
      <div className="container">
        <input type="hidden" name="" />
        <CaretUpSolid height="16px" width="16px" color={errorValidation ? "red" : color} />
        <div className="select--selected-text" role="button">
          {selectedValue}
        </div>
        <label>
          {errorValidation && "Missing "}
          {label}
          {required && <Required />}
        </label>
      </div>
    </div>
  );
};

export default Select;
