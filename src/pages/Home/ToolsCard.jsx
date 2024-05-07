import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AboutDetail from "../../components/About/AboutDetail.jsx";
import ToolsGrid from "../../components/Tools/ToolsGrid.jsx";
import AboutArray from "../../utils/AboutArray.jsx";
import GsapReveal from "./GsapReveal.jsx";
import { useTheme } from "@mui/material";

const AboutCard = React.forwardRef((props, ref) => {
  const theme = useTheme();

  const aboutCardStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: "10px",
    alignItems: "start",
    paddingTop: "100px",
    paddingBottom: "40px",
    margin: "0 auto",

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
