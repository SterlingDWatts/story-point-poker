import React from "react";
import classnames from "classnames";
import "./TextInput.css";

export interface TextInputProps {
  name?: string;
  id?: number;
  className?: string;
  value?: string;
  placeholder?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: (event?: React.FocusEvent<HTMLInputElement>) => void;
  handleBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void;
  color?: "blue" | "yellow" | "pink";
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  id,
  className,
  value,
  placeholder,
  handleChange,
  handleFocus,
  handleBlur,
  color,
}) => {
  const textInputClassNames = classnames(`TextInput ${className ? className : ""}`, {
    "color-pink": color === "pink",
    "color-blue": color === "blue",
    "color-yellow": color === "yellow",
  });
  return (
    <input
      type="text"
      name={name}
      id={`text-input--${id}`}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholder}
      className={textInputClassNames}
    />
  );
};

export default TextInput;
