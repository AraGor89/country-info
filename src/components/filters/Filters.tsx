import { FC } from "react";
import { Typography } from "@mui/material";
import DropDown from "../common/DropDown";
import { EDropType } from "../../types";
import Input from "../common/Input";

interface Props {
  search: string;
  handleInput: (name: string) => void;
  handleSortChange: (value: string | null) => void;
  handleRegionChange: (value: string | null) => void;
}

const Filters: FC<Props> = ({
  search,
  handleInput,
  handleSortChange,
  handleRegionChange,
}) => {
  const regionOptions = [
    "Africa",
    "Europe",
    "Asia",
    "Oceania",
    "Australia",
    "North America",
    "South America",
  ];
  const sortOptions = ["Population", "Area"];

  return (
    <Typography component="div">
      <Typography component="div" variant="h5" sx={{ fontWeight: "bold" }}>
        Filter
      </Typography>

      <Typography
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography component="div" sx={{ display: "flex", gap: "20px" }}>
          <Input search={search} handleInput={handleInput} />
          <DropDown
            size="medium"
            options={regionOptions}
            label={EDropType.regions}
            handleRegionChange={handleRegionChange}
          />
        </Typography>

        <DropDown
          size="small"
          options={sortOptions}
          label={EDropType.sortBy}
          handleSortChange={handleSortChange}
        />
      </Typography>
    </Typography>
  );
};

export default Filters;
