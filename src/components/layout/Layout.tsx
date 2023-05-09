import { FC, ReactNode } from "react";
import { Typography } from "@mui/material";
import { useAppSelector } from "../../store/hooks";
import Loading from "../common/loading";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const isLoading = useAppSelector((state) => state.main.isLoading);

  return (
    <Typography component="div">
      {isLoading && <Loading />}
      {children}
    </Typography>
  );
};

export default Layout;
