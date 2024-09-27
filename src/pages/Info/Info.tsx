import React from "react";
import { footerPages } from "../../config/footerPages";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReturnButton from "../../components/ReturnButton/ReturnButton";

interface InfoProps {
  pageKey: string; // pageKey could be URL or label
}

const Info: React.FC<InfoProps> = ({ pageKey }) => {
  const theme = useTheme();

  // Search for the correct page by matching pageKey with the URL or label
  const page = footerPages
    .flatMap((group) => group.links)
    .find((link) => link.url === pageKey || link.label === pageKey);

  if (!page) {
    return <Typography>Page not found</Typography>;
  }

  const infoPageStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    textAlign: "start",
    width: "100%",
    maxWidth: "1600px",
    margin: "20px 0px 0",
    padding: "15px",
    gap: "30px",
    "@media (max-width: 1000px)": {
      gap: "40px",
    },
  };

  const infoNavigatioLinksStyle = {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    padding: "0",
    width: "100%",
    "@media (max-width: 1000px)": {
      gap: "40px",
    },
  };

  const returnToButtonStyle = {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    padding: "0",
    margin: "0 0 20px",
    gap: "20px",
    // width: "100%",
  };

  const infoPageContentStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    textAlign: "start",
    width: "100%",
    maxWidth: "1000px",
    margin: "0px 0",
    padding: "0",
    gap: "20px",
    "@media (max-width: 1000px)": {
      gap: "40px",
    },
  };

  const infoAltLinksStyle = {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    padding: "0",
    gap: "40px",
    width: "100%",
    "@media (max-width: 1000px)": {
      gap: "40px",
    },
  };

  const infoAltLinkButtonsStyle: React.CSSProperties = {
    margin: "0",
    width: "200px",
    textDecoration: "none",
  };

  return (
    <Box sx={infoPageStyle}>
      <ReturnButton />

      <Box sx={infoPageContentStyle}>
        <Typography
          sx={{ color: `${theme.palette.primary.light}` }}
          variant="h4"
        >
          {page.title}
        </Typography>

        {page.content.map((paragraph, index) => (
          <Typography
            sx={{ color: `${theme.palette.primary.light}`, fontSize: "16px" }}
            variant="p"
            key={index}
          >
            {paragraph}
          </Typography>
        ))}

        <Typography
          sx={{ color: `${theme.palette.primary.light}` }}
          variant="h6"
        >
          Last Updated: {page.last_updated}
        </Typography>
      </Box>

      <Box sx={infoAltLinksStyle}>
        <Typography
          sx={{ color: `${theme.palette.primary.light}` }}
          variant="h6"
        >
          Need more help?
        </Typography>

        <Button sx={infoAltLinkButtonsStyle} variant="outlined">
          <Link
            style={{
              textDecoration: "none",
              color: `${theme.palette.primary.light}`,
            }}
            to="/contact"
          >
            Contact Me
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Info;
