import { Typography, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Typography
      component="div"
      sx={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        opacity: 0.7,
        backgroundColor: "#fff",
        zIndex: 1,
      }}
    >
      <CircularProgress sx={{ zIndex: 2 }} />
    </Typography>
  );
};

export default Loading;
