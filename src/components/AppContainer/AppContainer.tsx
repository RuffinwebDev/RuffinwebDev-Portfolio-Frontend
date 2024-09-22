import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import LinksAppBar from "../LinksAppBar/LinksAppBar";
import ImageBackground from "../Background/ImageBackground";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const AppContainer = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  const appContainerStyle = {
    padding: "0 0 10px",
    maxWidth: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "{theme.palette.outline.main}",
  };

  return (
    <Container sx={appContainerStyle} maxWidth={false} id="appContainer">
      <ImageBackground />
      <LinksAppBar
        titleRef={titleRef}
        toolsRef={toolsRef}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        resumeRef={resumeRef}
      />
      <ScrollToTop />
      <Outlet
        context={{ titleRef, toolsRef, aboutRef, experienceRef, resumeRef }}
      />
      <Footer />
    </Container>
  );
};

export default AppContainer;
