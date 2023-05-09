import { useState, FC } from "react";
import { TextField, Typography, Autocomplete } from "@mui/material";
import { EDropType } from "../../types";

interface Props {
  label: EDropType;
  options: string[];
  size: "small" | "medium";
  handleSortChange?: (value: string | null) => void;
  handleRegionChange?: (value: string | null) => void;
}

const DropDown: FC<Props> = ({
  size,
  label,
  options,
  handleSortChange,
  handleRegionChange,
}) => {
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  // TODO: event fixe typification
  const handleValueChange = (_: any, newValue: string | null) => {
    setValue(newValue);
    if (label === EDropType.sortBy && handleSortChange)
      handleSortChange(newValue);
    if (label === EDropType.regions && handleRegionChange)
      handleRegionChange(newValue);
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
