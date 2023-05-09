import { FC, ChangeEvent } from "react";
import { TextField } from "@mui/material";

interface Props {
  search: string;
  handleInput: (name: string) => void;
}

const Input: FC<Props> = ({ search, handleInput }) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value;
    handleInput(value);
  };

  return (
    <TextField
      size="medium"
      label="Search"
      placeholder="Search"
      value={search}
      onChange={handleSearch}
    />
  );
};

export default Input;
