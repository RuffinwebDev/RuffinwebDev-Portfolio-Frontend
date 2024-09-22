import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface ErrorPageNotFoundProps {
  links: typeof ErrorPageNotFound;
}

const ErrorPageNotFound: React.FC<ErrorPageNotFoundProps> = ({ links }) => {
  const theme = useTheme();

  const errorPageStyle = {
    color: `${theme.palette.primary.light}`,
    padding: "0",
    margin: "20px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",

    "@media (max-width: 740px)": {
      flexDirection: "column",
    },
  };

  return (
    <Box sx={errorPageStyle}>
      <ReturnButton />
      <ErrorOutlineIcon sx={{ fontSize: 140 }} />
      <Typography sx={{ color: `${theme.palette.primary.light}` }} variant="h3">
        404 Error
      </Typography>
      <Typography sx={{ color: `${theme.palette.primary.light}` }} variant="h6">
        Page Not Found
      </Typography>
      <Typography sx={{ color: `${theme.palette.primary.light}` }} variant="p">
        The page you were looking for may have been removed had its name changed
        or is temporarily unavailable.
      </Typography>
    </Box>
  );
};

export default ErrorPageNotFound;
