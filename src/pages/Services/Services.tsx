// @ts-ignore
import React, { forwardRef, useState } from "react";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import ReturnButtons from "../../components/ReturnButtons/ReturnButtons";
import Typography from "@mui/material/Typography";

export const Services = React.forwardRef((props, red) => {
  const theme = useTheme();

  const servicesPageStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: "150px",
    alignItems: "start",
    paddingBottom: "0",
    margin: "150px 0 50px",
    "@media (maxWidth: 1000px)": {
      flexDirection: "column",
      gap: "20px",
    },
  };

  return (
    <Box sx={servicesPageStyle}>
      <Typography>Services Information Incoming</Typography>
    </Box>
  );
});
