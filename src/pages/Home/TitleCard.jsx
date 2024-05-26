import React, { forwardRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GsapReveal from "./GsapReveal.jsx";
import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const TitleCard = forwardRef((props, ref) => {
  const theme = useTheme();

  const titleCardStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0px",
    alignItems: "center",
    justifyContent: "center",  // Centering the content vertically
    textAlign: "center",
    borderRadius: "10px",
    width: "100%",
    height: "85vh",  // Full height of the viewport
    padding: "0 20px",  // Add padding for responsiveness

    "@media (max-width: 1280px)": {
      margin: "0",
    },
  };

  const titleLinkCard = {
    margin: "50px 0 0",  // Adjusted margin for better spacing
    width: "200px",
    textDecoration: "none",
  }

  const titleLink = {
    textDecoration: "none",
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

        <Button sx={titleLinkCard} variant="outlined">
          <Link sx={titleLink} href="https://github.com/ruffinweb?tab=repositories" target="_blank" variant="body2">
            View My Work
          </Link>
        </Button>
      </Box>
    </GsapReveal>
  );
});

export default TitleCard;
