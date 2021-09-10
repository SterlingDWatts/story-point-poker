import React, { useState } from "react";
import classnames from "classnames";
import TextInput, { TextInputProps } from "../TextInput/TextInput";
import Required from "../Required/Required";
import "./TextInputGroup.css";

interface TextInputGroupProps extends TextInputProps {
  label: string;
  helper?: string;
  required?: boolean;
  errorValidation?: string;
}

const TextInputGroup: React.FC<TextInputGroupProps> = ({
  label,
  helper,
  name,
  id,
  className,
  value,
  placeholder,
  handleChange,
  color,
  required,
  errorValidation,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const setBlured = () => {
    setIsFocused(false);
  };

  const setFocused = () => {
    setIsFocused(true);
  };

  const TextInputGroupClassNames = classnames(`TextInputGroup ${className ? className : ""}`, {
    "color-pink": color === "pink",
    "color-blue": color === "blue",
    "color-yellow": color === "yellow",
    focused: isFocused,
    error: errorValidation,
    "small-label": value && value.length > 0,
  });

  return (
    <div className={TextInputGroupClassNames}>
      <div className="input-and-label">
        <TextInput
          name={name}
          id={id}
          value={value}
          handleChange={handleChange}
          placeholder={placeholder}
          color={color}
          handleBlur={setBlured}
          handleFocus={setFocused}
        />
        <label htmlFor={name}>
          {errorValidation ? (!value ? "Missing " : "Invalid ") : ""}
          {label}
          {required && <Required />}
        </label>
      </div>
      <div className="helper">{errorValidation ? errorValidation : helper}</div>
    </div>
  );
};

export default TextInputGroup;
