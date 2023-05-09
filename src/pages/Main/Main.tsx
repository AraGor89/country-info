import { Typography } from "@mui/material";
import Filters from "./../../components/filters";
import Table from "../../components/table";
import useMain from "./useMain";

const Main = () => {
  const {
    search,
    finalData,
    handleInput,
    handleDropDowns,
    handleDeleteCountry,
  } = useMain();

  return (
    <Typography
      component="div"
      sx={{
        gap: "30px",
        width: "80%",
        display: "flex",
        margin: "0 auto",
        padding: "20px 0",
        minWidth: "1200px",
        flexDirection: "column",
      }}
    >
      <Filters
        search={search}
        handleInput={handleInput}
        handleDropDowns={handleDropDowns}
      />
      <Table countries={finalData} handleDeleteCountry={handleDeleteCountry} />
    </Typography>
  );
};

export default Main;
