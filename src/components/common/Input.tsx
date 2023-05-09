import { useState, FC, ChangeEvent } from "react";
import { TextField } from "@mui/material";

interface Props {
  handleInput: (name: string) => void;
}

const Input: FC<Props> = ({ handleInput }) => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value;
    setSearch(value);
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
