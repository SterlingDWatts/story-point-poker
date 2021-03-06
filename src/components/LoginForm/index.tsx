import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import TextInputGroup from "../TextInputGroup";
import SelectGroup from "../SelectGroup";
import Button from "../Button";
import LoginContext from "../../contexts/LoginContext";
import PokerContext, { PokerUser } from "../../contexts/PokerContext";
import { LoginValue } from "../../models/loginContext";
import { defaultOptions, validateName, validateRole } from "./helper";
import { postUser } from "../../services/apiService";
import "./style.scss";

const LoginForm: React.FC = () => {
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
  const { login } = useContext(PokerContext);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const user = { name: name.value, role: options.selectedValue, isLoggedIn: true } as Partial<PokerUser>;
    const response = await postUser(user);

    if (response && response.data && response.data.user && response.data.token) {
      login(user);
      setToken(response.data.token);
      setName({ value: "", touched: false });
      setOptions(defaultOptions);
      history.push("/");
    }
  };

  const nameValidation = validateName(name);
  const roleValidation = validateRole(options);

  return (
    <form action="submit" className="LoginForm" onSubmit={handleSubmit}>
      <div className="inputs">
        <TextInputGroup
          label="Name"
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
      <div className="buttons">
        <Button
          type="contained"
          label="SUBMIT"
          color="pink"
          disabled={!name.touched || !options.touched || !!nameValidation || !!roleValidation}
        />
      </div>
    </form>
  );
};

export default LoginForm;
