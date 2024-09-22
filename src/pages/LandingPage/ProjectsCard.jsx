import React, { forwardRef } from "react";
import Box from "@mui/material/Box";
import Project from "../../components/Project/Project";
import Typography from "@mui/material/Typography";
import projectsContent from "../../config/projectsContent";
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
    "@media (max-width: 1000px)": {
      gap: "20px",
    },
  };

  return (
    <Box sx={projectsCardStyle} className="" id="projectsCard" ref={ref}>
      <Typography variant="h4" gutterBottom color="primary">
        Development Experience
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {projectsContent.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Project key={index} {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

export default ProjectsCard;
