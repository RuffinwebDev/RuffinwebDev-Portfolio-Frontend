// @ts-ignore
import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Define Props types
interface NavbarLinkSocialProps {
  href: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const NavbarLinkSocial: React.FC<NavbarLinkSocialProps> = ({
  href,
  onClick,
  text,
}) => {
  // I'm not using this Link vs anchor functionality right now but its useful, so I'll leave it.
  const isExternal = text.includes("GITHUB") || text.includes("LINKEDIN");
  // text.includes("CONTACT");
  const CustomLink = React.forwardRef<HTMLAnchorElement>((props: {}, ref) => (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
  ));

  return isExternal ? (
    <Button
      component={CustomLink}
      onClick={onClick}
      sx={{ display: "block", padding: "10px" }}
    >
      <Typography sx={{ textDecoration: "none", fontWeight: 500 }}>
        {text}
      </Typography>
    </Button>
  ) : (
    <Link to={href} style={{ textDecoration: "none", padding: "10px" }}>
      <Typography sx={{ textDecoration: "none", fontWeight: 500 }}>
        {text}
      </Typography>
    </Link>
  );
};

export default NavbarLinkSocial;
