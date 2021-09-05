import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import TextInputGroup from "../TextInputGroup/TextInputGroup";
import SelectGroup from "../SelectGroup/SelectGroup";
import Button from "../Button/Button";
import LoginContext, { LoginValue } from "../../contexts/LoginContext";
import { defaultOptions, validateName, validateRole } from "./JoinFormHelper";
import { instance } from "../../services/apiService";
import "./JoinForm.css";

const JoinForm: React.FC = () => {
  const [name, setName] = useState({ value: "", touched: false });
  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName({ value: event.target.value, touched: true });
  };

  const [options, setOptions] = useState(defaultOptions);
  const handleSelectOption = (value: string) => {
    setOptions({ ...options, selectedValue: value, touched: true });
  };

  const history = useHistory();
  const { setToken } = useContext(LoginContext) as LoginValue;
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await instance({
      url: "/login",
      method: "POST",
      data: {
        name: name.value,
        role: options.selectedValue,
        expDate: Math.floor(Date.now() / 1000) + 60 * 60 * 2,
      },
    });
    console.log(response);
    if (response && response.data && response.data.user && response.data.token) {
      setToken(response.data.token);
      setName({ value: "", touched: false });
      setOptions(defaultOptions);
      history.push("/");
    }
  };

  const nameValidation = validateName(name);
  const roleValidation = validateRole(options);

  return (
    <form action="submit" className="JoinForm" onSubmit={handleSubmit}>
      <div className="inputs">
        <TextInputGroup
          label="Name"
          placeholder="e.g. Sterling"
          helper="First Name"
          color="pink"
          value={name.value}
          handleChange={changeName}
          errorValidation={nameValidation}
          required
        />
        <SelectGroup
          label="Role"
          color="pink"
          selectedValue={options.selectedValue}
          values={options.optionsArray}
          selectOption={handleSelectOption}
          errorValidation={roleValidation}
          required
        />
      </div>
      <Button
        type="contained"
        label="SUBMIT"
        color="pink"
        disabled={!name.touched || !options.touched || !!nameValidation || !!roleValidation}
      />
    </form>
  );
};

export default JoinForm;
