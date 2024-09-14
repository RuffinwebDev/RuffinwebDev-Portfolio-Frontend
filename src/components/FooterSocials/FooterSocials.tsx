import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import SocialsArray from "../../utils/SocialsArray";
import { Link } from "@mui/material";

const FooterSocials: React.FC = () => {
  const theme = useTheme();

  const footerSocialStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "start",
    gap: "40px",
    "@media (max-width: 1000px)": {
      width: "100%",
      gap: "20px",
    },
  };

  const imageStyle = {
    filter: "invert(1)", // This inverts black to white (useful for dark icons)
    width: "24px",
    height: "24px",
  };

  return (
    <Box sx={footerSocialStyle}>
      {SocialsArray.map((social) => (
        <Link href={social.url} target="_blank" key={social.name}>
          <img src={social.icon} alt={social.name} style={imageStyle} />
        </Link>
      ))}
    </Box>
  );
};

export default FooterSocials;
