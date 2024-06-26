import * as React from "react";
import { useRef } from "react";
import Box from "@mui/material/Box";
import TitleCard from "./TitleCard.jsx";
import AboutCard from "./AboutCard.jsx";
import ToolsCard from "./ToolsCard.jsx";
import ResumeCard from "./ResumeCard.jsx";
import ProjectsCard from "./ProjectsCard.jsx";
import ContactCard from "./ContactCard.jsx";
import CardBorder from "../../components/CardBorder/CardBorder.jsx";
import LinksAppBar from "../../components/LinksAppBar/LinksAppBar.jsx";
import ImageBackground from "../../components/Background/ImageBackground.jsx";
import Copyright from "../../components/Copyright/Copyright.jsx";

const Home = () => {
  const titleRef = useRef(null);
  const aboutRef = useRef(null);
  const toolsRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const homePageStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    maxWidth: "1600px",
    minHeight: "100vh",
    padding: "15px",
    gap: "200px",
    "@media (max-width: 1000px)": {
      gap: "90px",
    },
  };

  return (
    <Box>
      <ImageBackground />
      <LinksAppBar
        titleRef={titleRef}
        toolsRef={toolsRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        resumeRef={resumeRef}
        contactRef={contactRef}
      />
      <Box sx={homePageStyle}>
        <TitleCard ref={titleRef} myWorkLink={projectsRef} />
        <CardBorder />
        <AboutCard ref={aboutRef} />
        <ToolsCard ref={toolsRef} />
        <ProjectsCard ref={projectsRef} />
        <ResumeCard ref={resumeRef} />
        <ContactCard ref={contactRef} />
        <Copyright />
      </Box>
    </Box>
  );
};

export default Home;
