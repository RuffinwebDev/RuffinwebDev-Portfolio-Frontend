// PageTitle.tsx
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Copyright } from "../Copyright/Copyright";
import { useTheme } from "@mui/material/styles";
import FooterSocials from "../FooterSocials/FooterSocials";

const FooterLegal: React.FC<FooterLegalProps> = ({ links }) => {
  const theme = useTheme();

  const footerLegalStyle = {
    color: `${theme.palette.primary.light}`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "30px",
    maxWidth: "1600px",
    width: "100%",

    "@media (max-width: 750px)": {
      width: "100%",
      flexDirection: "column",
    },
  };

  return (
    <Box sx={footerLegalStyle}>
      <Copyright />
      <FooterSocials />
    </Box>
  );
};

export default FooterLegal;
