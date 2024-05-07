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
    gap: "20px",
    alignItems: "start",
    paddingTop: "100px",
    paddingBottom: "40px",
    margin: "0 auto",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
      gap: "80px",
    },
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

  const textDetailStyle = {
    display: "grid", // Change to grid
    gridTemplateColumns: "1fr", // 1 column by default
    gap: "40px",
    textAlign: "start",
    padding: "20px",

    "@media (min-width: 601px)": {
      gridTemplateColumns: "1fr 1fr", // 2 columns on medium screens
    },

    "@media (min-width: 968px)": {
      gridTemplateColumns: "1fr 1fr 1fr", // 2 columns on medium screens
    },
  };

  const skillsSectionStyle = {
    ...textSectionStyle,
    gap: "50px",
  };

  return (
    // <GsapReveal ref={ref}>

      <Box sx={aboutCardStyle} id="aboutCard" ref={ref}>
          <Typography variant="h4" gutterBottom color="primary">
            About Me
          </Typography>
        <Box sx={textDetailStyle}>
          {/* Map through AboutArray and render each text */}
          {AboutArray.map((detail, index) => (
            <AboutDetail key={index} aboutDetail={detail}  />
          ))}
        </Box>
      </Box>
    // </GsapReveal>
  );
});

export default AboutCard;
