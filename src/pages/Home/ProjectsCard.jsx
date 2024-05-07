import React, { forwardRef } from "react";
import Box from "@mui/material/Box";
import Project from "../../components/Project/Project.jsx";
import Typography from "@mui/material/Typography";
import ProjectsArray from "../../utils/ProjectsArray.jsx";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";

const ProjectsCard = forwardRef((props, ref) => {
  const theme = useTheme();

  const projectsCardStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: "20px",
    alignItems: "start",
    maxWidth: "1600px",
    margin: "0 auto",
    paddingTop: "100px",
    paddingBottom: "0",

    "@media (max-width: 1000px)": {
      gap: "20px",
    },
  };

  return (
    <Box sx={projectsCardStyle} className="" id="projectsCard" ref={ref}>
      <Typography variant="h4" gutterBottom color="primary">
        My Projects
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {ProjectsArray.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Project key={index} {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

export default ProjectsCard;
