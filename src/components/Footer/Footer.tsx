// PageTitle.tsx
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Copyright } from "../Copyright/Copyright";
import FooterLegal from "../FooterLegal/FooterLegal";
import FooterSocials from "../FooterSocials/FooterSocials";
import FooterLinks from "../FooterLinks/FooterLinks";
import { footerPages } from "../../config/footerPages";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";

const Footer: React.FC<FooterProps> = ({ links }) => {
  const theme = useTheme();

  const footerStyle = {
    // backgroundColor: `${theme.palette.depth.main}`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    margin: "0px",
    padding: "100px 10px 10px",
    gap: "50px",
    width: "100%",
    maxWidth: "1600px",

    "@media (max-width: 1000px)": {
      alignItems: "start",
      // justifyContent: "start",

      padding: "10px 10px",
    },
  };

  return (
    <Box sx={footerStyle}>
      <Divider sx={{ width: "100%", borderColor: "white" }} />

      <FooterLinks links={footerPages} />
      {/*<FooterButtons />*/}
      <FooterLegal />
    </Box>
  );
};

export default Footer;
