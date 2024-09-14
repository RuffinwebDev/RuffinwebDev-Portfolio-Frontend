import React, { forwardRef } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AboutArray from "../../utils/AboutArray";
import Link from "@mui/material/Link";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";

const AboutDetail = forwardRef((props, ref) => {
  const { aboutDetail } = props; // Destructure props to access aboutDetail
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 601px) and (max-width: 960px)",
  );
  const getSkillIconStyle = () => {
    let width = 65; // Default width
    let height = 65; // Default height

    if (isSmallScreen) {
      width = 45; // For small screens
      height = 45; // For small screens
    } else if (isMediumScreen) {
      width = 55; // For medium screens
      height = 55;
    }

    return { width, height };
  };

  const detailItemStyle = {
    display: "flex",
    flexGrow: '100',
    flexDirection: "column",
    justifyContent: 'center',
    gap: "10px",
    alignItems: "center",
    margin: "0 auto",
    border: "2px solid grey",
    borderRadius: "10px",
    padding: "15px",
    height: "100%", // Ensure each project component occupies the same height
    backgroundColor: theme.palette.depth.main,
    textAlign: 'center'

  };

  const detailIconsStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    gap: '20px',

  };

  const detailTitleStyle = {
    justifyContent: "center",
    // alignItems: 'center'
    alignSelf: "center",
  };

  const detailTextStyle = {
    justifyContent: "start",
    // alignItems: 'center'
    alignSelf: "center",
    textAlign: 'center'

  };

  return (
    <Grid container spacing={2} justifyContent="center">
        <Grid item sx={detailItemStyle}>
          <Grid item sx={detailIconsStyle}>
            {aboutDetail.icons.map((icon, iconIndex) => (
              <img key={iconIndex} src={icon} alt={aboutDetail.title} {...getSkillIconStyle()} />
            ))}
          </Grid>
            <Typography sx={detailTitleStyle} variant="h6">{aboutDetail.title}</Typography>
            <Typography sx={detailTextStyle}>{aboutDetail.text}</Typography>
        </Grid>
    </Grid>
  );
});

export default AboutDetail;
