// @ts-ignore
import React from "react";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import LinksAppBar from "../LinksAppBar/LinksAppBar";
import ImageBackground from "../Background/ImageBackground";
import Footer from "../Footer/Footer";
import { Copyright } from "../Copyright/Copyright";

const AppContainer = () => {
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
      <Outlet />
      <Footer />
    </Container>
  );
};

export default AppContainer;
