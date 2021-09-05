import React from "react";
import classnames from "classnames";
import "./Option.css";

export interface OptionProps {
  value: string;
  selected: boolean;
  handleSelect?: () => void;
}

const Option: React.FC<OptionProps> = ({ value, selected, handleSelect }) => {
  const optionClassNames = classnames("Option", {
    selected: selected && value.length > 0,
  });
  return (
    <li className={optionClassNames} onClick={handleSelect} role="option">
      {value}
    </li>
  );
};

export default Option;
