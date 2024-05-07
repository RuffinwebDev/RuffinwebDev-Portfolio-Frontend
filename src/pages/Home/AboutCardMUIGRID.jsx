import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AboutDetail from "../../components/About/AboutDetail.jsx";
import AboutArray from "../../utils/AboutArray.jsx";
import GsapReveal from "./GsapReveal.jsx";
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";

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
    textAlign: "start",
    padding: "20px",
    width: "100%", // Make the grid items fill up the full width
  };

  return (
    <Box sx={aboutCardStyle} id="aboutCard" ref={ref}>
      <Typography variant="h4" gutterBottom color="primary">
        About Me
      </Typography>
<Grid container spacing={2} justifyContent="center" sx={textDetailStyle}>
  {/* Map through AboutArray and render each text */}
  {AboutArray.map((detail, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Box sx={{ margin: "10px" }}> {/* Apply margin to the container */}
        <AboutDetail aboutDetail={detail} />
      </Box>
    </Grid>
  ))}
</Grid>
    </Box>
  );
});

export default AboutCard;
