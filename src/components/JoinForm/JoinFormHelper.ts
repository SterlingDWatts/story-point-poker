export const defaultOptions = {
  selectedValue: "",
  optionsArray: [
    { value: "", id: 0 },
    { value: "Front End Dev", id: 1 },
    { value: "QAE", id: 2 },
    { value: "Team Lead", id: 3 },
  ],
  touched: false,
};

export const validateName = (name: { value: string; touched: boolean }): string | undefined => {
  const { value, touched } = name;
  if (touched) {
    if (value.length < 1) {
      return "Name is required";
    } else if (value.length < 2) {
      return "Name must include at least 2 characters";
    } else if (value.startsWith(" ") || value.endsWith(" ")) {
      return "Name cannot begin or end with a space";
    } else if (value.length > 21) {
      return "Name must be less than 22 characters";
    }
  }
  return;
};

export const validateRole = (role: { selectedValue: string; touched: boolean }): string | undefined => {
  const { selectedValue, touched } = role;
  if (touched && selectedValue.length < 1) {
    return "Role is required";
  }
  return;
};
