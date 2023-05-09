import { FC } from "react";
import {
  Paper,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  IconButton,
  TableContainer,
  Table as TableM,
} from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { IData } from "../../types";

interface Props {
  countries: IData[] | [];
  handleDeleteCountry: (name: string) => void;
}

const Table: FC<Props> = ({ countries, handleDeleteCountry }) => {
  const headers: string[] = [
    "country",
    "region",
    "population(2023)",
    "area",
    "flag",
    "icon",
  ];

  return (
    <Typography component="div">
      <TableContainer component={Paper}>
        <TableM sx={{ minWidth: 650 }}>
          <TableHead sx={{ background: "lightgrey" }}>
            <TableRow>
              {headers?.map((item) => {
                return (
                  <TableCell key={item}>
                    <Typography
                      component="span"
                      sx={{ visibility: item === "icon" ? "hidden" : "" }}
                    >
                      {item?.toUpperCase()}
                    </Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {countries?.map((row: IData) => (
              <TableRow key={row?.country}>
                <TableCell component="th" scope="row">
                  <Typography component="span" sx={{ fontWeight: 600 }}>
                    {row?.country}
                  </Typography>
                </TableCell>
                <TableCell>{row?.region}</TableCell>
                <TableCell>{row?.population}</TableCell>
                <TableCell>{row?.area}</TableCell>
                <TableCell>
                  <Typography
                    width="40px"
                    component="img"
                    src={row?.flag?.svg}
                    alt={row?.flag?.alt}
                  />
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ width: "73px", border: "1px solid lightgrey" }}
                >
                  <IconButton
                    sx={{ background: "lightgrey" }}
                    onClick={() => handleDeleteCountry(row?.country)}
                  >
                    <CloseOutlined />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableM>
      </TableContainer>
    </Typography>
  );
};

export default Table;
