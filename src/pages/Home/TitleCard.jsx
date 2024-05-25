import React, { forwardRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GsapReveal from "./GsapReveal.jsx";
import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";

const TitleCard = forwardRef((props, ref) => {
  const theme = useTheme();

  const titleCardStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0px",
    margin: "50px 0",
    alignItems: "center",
    textAlign: "center",
    padding: "80px 0",
    borderRadius: "10px",
    width: "auto",

    "@media (max-width: 1280px)": {
      padding: "120px 0",
      margin: "30px 0",
    },
    "@media (max-width: 435px)": {
      padding: "120px 0",
      margin: "10px 0",
    },
  };

  const titleLinkCard = {
        margin : "100px 0",
        width: "200px",
  }

  return (
    <GsapReveal ref={ref}>
      <Box sx={titleCardStyle}>
        <Typography variant="h1" gutterBottom color="primary">
          Elijah Ruffin
        </Typography>
        <Typography variant="h3" component="div" color="primary">
          Full-Stack Developer
        </Typography>
        <Typography variant="h4" component="div" color="primary">
          Django
          <Box
            component="span"
            sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
          >
            •
          </Box>
          React
          <Box
            component="span"
            sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
          >
            •
          </Box>
          PostgreSQL
        </Typography>

        <Button sx={titleLinkCard} variant="outlined"
                 onClick={() => {
                    myWorkLink.scrollIntoView({
                      behavior: "smooth",
                    });
                }}>
          See My Work

        </Button>
      </Box>
    </GsapReveal>
  );
});

export default TitleCard;
