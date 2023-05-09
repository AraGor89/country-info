import { useState, FC } from "react";
import { TextField, Typography, Autocomplete } from "@mui/material";
import { EDropType } from "../../types";

interface Props {
  label: EDropType;
  options: string[];
  size: "small" | "medium";
  handleDropDowns: (value: string | null, type: EDropType) => void;
}

const DropDown: FC<Props> = ({ size, options, label, handleDropDowns }) => {
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  // TODO: event fixe typification
  const handleValueChange = (_: any, newValue: string | null) => {
    setValue(newValue);
    handleDropDowns(newValue, label);
  };

  return (
    <Typography component="div">
      <Autocomplete
        size={size}
        value={value}
        onChange={handleValueChange}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Typography>
  );
};

export default DropDown;
