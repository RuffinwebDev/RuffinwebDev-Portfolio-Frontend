import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

interface FooterLinksProps {
  links: typeof footerLinks;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
  const theme = useTheme();

  const footerLinksStyle = {
    color: `${theme.palette.primary.light}`,
    padding: "100px 0px 100px 75px",

    // padding: "50px 10px",
    display: "flex",
    flexDirection: "row",
    gap: "80px",

    "@media (max-width: 740px)": {
      width: "100%",
      flexDirection: "column",
      gap: "50px",
      padding: "100px 0px 100px 10px",
    },
  };

  const footerLinkGroupStyle = {
    color: `${theme.palette.primary.light}`,
    display: "flex",
    flexDirection: "column",
    gap: "25px",

    "@media (max-width: 740px)": {
      width: "100%",
      alignItems: "start",
    },
  };

  return (
    <Box sx={footerLinksStyle}>
      {links.map((group) => (
        <Box key={group.title} sx={footerLinkGroupStyle}>
          <Typography
            sx={{ color: `${theme.palette.outline.main}` }}
            variant="h6"
          >
            {group.title}
          </Typography>
          {group.links.map((link) => (
            <Link to={link.url} key={link.label}>
              <Typography
                sx={{ color: `${theme.palette.primary.light}` }}
                variant="h6"
              >
                {link.label}
              </Typography>
            </Link>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default FooterLinks;
