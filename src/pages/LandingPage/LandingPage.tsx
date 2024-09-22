import React, { useEffect } from "react";
import { Box, SxProps, Theme } from "@mui/material";
import { useLocation, useOutletContext } from "react-router-dom";
import TitleCard from "./TitleCard";
import AboutCard from "./AboutCard";
import ToolsCard from "./ToolsCard";
import ResumeCard from "./ResumeCard";
import ProjectsCard from "./ProjectsCard";

const LandingPage: React.FC = () => {
  // Use the useOutletContext to access the refs passed from AppContainer
  const { titleRef, aboutRef, toolsRef, experienceRef, resumeRef } =
    useOutletContext<{
      titleRef: React.RefObject<HTMLDivElement>;
      aboutRef: React.RefObject<HTMLDivElement>;
      toolsRef: React.RefObject<HTMLDivElement>;
      experienceRef: React.RefObject<HTMLDivElement>;
      resumeRef: React.RefObject<HTMLDivElement>;
    }>();

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToSection) {
      const section = location.state.scrollToSection;
      section.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const landingPageStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    maxWidth: "1600px",
    minHeight: "100vh",
    padding: "15px",
    gap: "100px",
    "@media (max-width: 1000px)": {
      gap: "90px",
    },
  };

  return (
    <Box>
      <Box sx={landingPageStyle}>
        <TitleCard ref={titleRef} />
        <AboutCard ref={aboutRef} />
        <ToolsCard ref={toolsRef} />
        <ProjectsCard ref={experienceRef} />
        <ResumeCard ref={resumeRef} />
      </Box>
    </Box>
  );
};

export default LandingPage;
