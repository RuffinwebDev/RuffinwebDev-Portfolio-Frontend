// @ts-ignore
import React, { useRef } from "react";
import { Box, Button, SxProps, Theme } from "@mui/material";

import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

// Define Props types
interface ReturnButtonsProps {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text?: string;
}

const ReturnButtons: React.FC<ReturnButtonsProps> = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  const returnButtonsStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    margin: "50px 0",
  };

  return (
    <Box sx={returnButtonsStyle}>
      <Link to="/">
        <Button variant="text">Back to Ruffinweb</Button>
      </Link>
    </Box>
  );
};

export default ReturnButtons;
