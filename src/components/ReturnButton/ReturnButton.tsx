import React, { ReactNode } from "react";
import { footerPages } from "../../config/footerPages";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface ReturnButtonProps {
  element: ReactNode;
}

const ReturnButton: React.FC<ReturnButtonProps> = () => {
  const theme = useTheme();

  const returnButtonStyle = {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    padding: "0",
    // width: "100%",
    "@media (max-width: 1000px)": {
      gap: "40px",
    },
  };

  const returnButtonLinkStyle = {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    padding: "0",
    margin: "0 0 20px",
    gap: "20px",
    // width: "100%",
  };

  return (
    <Box sx={returnButtonStyle}>
      <Link style={returnButtonLinkStyle} to="/">
        <ArrowBackIcon sx={{ color: `${theme.palette.primary.light}` }} />
        <Button sx={{ padding: "0" }} variant="text">
          Back to Ruffinweb Home
        </Button>
      </Link>
      {""}
    </Box>
  );
};

export default ReturnButton;
