// @ts-ignore
import React from "react";
import { Button, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

// Define Props types
interface NavbarLinkProps {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const NavbarLinkSection: React.FC<NavbarLinkProps> = ({ href, onClick, text }) => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("md"));

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    if (href) window.open(href, "_blank");
  };

  return (
    <Button onClick={handleButtonClick} sx={{ display: "block", padding: "0" }}>
      <Typography sx={{ textDecoration: "none", color: isSmallDevice ? "#000" : undefined }}>
        {text}
      </Typography>
    </Button>
  );
};

export default NavbarLinkSection;
