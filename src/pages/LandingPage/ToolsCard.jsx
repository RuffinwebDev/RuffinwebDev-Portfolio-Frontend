import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AboutDetail from "../../components/About/AboutDetail";
import ToolsGrid from "../../components/ToolsGrid/ToolsGrid";
import aboutContent from "../../config/aboutContent";
import GsapReveal from "./GsapReveal";
import { useTheme } from "@mui/material";

const AboutCard = React.forwardRef((props, ref) => {
  const theme = useTheme();

  const aboutCardStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: "20px",
    alignItems: "start",
    margin: "0",
  };

  const textSectionStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    flex: 1,
    gap: "40px",
    textAlign: "start",
    padding: "20px",
    backgroundColor: theme.palette.depth.main,
    borderRadius: "10px",
    border: `2px solid ${theme.palette.outline.main}`,
  };

  const skillsSectionStyle = {
    ...textSectionStyle,
    gap: "50px",
  };

  return (
    <Box sx={aboutCardStyle} id="aboutCard" ref={ref}>
      <Typography variant="h4" gutterBottom color="primary">
        Tools and Skills
      </Typography>
      <Box sx={skillsSectionStyle}>
        <ToolsGrid />
      </Box>
    </Box>
  );
});

export default AboutCard;
