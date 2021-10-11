import React, { useState } from "react";
import classnames from "classnames";
import Select, { SelectProps } from "../Select";
import Option, { OptionProps } from "../Option/Option";
import "./style.scss";

interface SelectGroupProps extends Partial<SelectProps>, Partial<OptionProps> {
  className?: string;
  values: { value: string; id: number }[];
  selectOption: (value: string) => void;
  label: string;
  selectedValue: string;
  errorValidation?: string;
  required?: boolean;
}

const SelectGroup: React.FC<SelectGroupProps> = ({
  className,
  label,
  color,
  selectedValue,
  values,
  selectOption,
  errorValidation,
  required,
}) => {
  const [isExpanded, setIsEpanded] = useState(false);

  const toggleExpanded = () => {
    setIsEpanded(!isExpanded);
  };

  const selectAndCollapseOptions = (value: string) => {
    setIsEpanded(false);
    selectOption(value);
  };

  const selectGroupClassNames = classnames(`SelectGroup ${className ? className : className}`, {
    error: errorValidation,
  });

  const options = values.map(({ value, id }) => {
    return (
      <Option
        value={value}
        selected={selectedValue === value}
        handleSelect={() => selectAndCollapseOptions(value)}
        key={id}
      />
    );
  });

  return (
    <div className={selectGroupClassNames}>
      <Select
        label={label}
        color={color}
        selectedValue={selectedValue}
        isExpanded={isExpanded}
        handleClick={toggleExpanded}
        required={required}
        errorValidation={errorValidation}
      />
      <div className="helper">{errorValidation && errorValidation}</div>
      {isExpanded && (
        <div className="options">
          <ul>{options}</ul>
        </div>
      )}
    </div>
  );
};

export default SelectGroup;
