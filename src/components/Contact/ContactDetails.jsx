import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IconButton from "@mui/material/IconButton";
import LaunchIcon from "@mui/icons-material/Launch";
import SkillsArray from "../../config/skillsContent.ts";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MailOutlineIcon from "@mui/icons-material/MailOutline.js";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Button from "@mui/material/Button";

const ContactDetails = ({ title, summary, previewUrl, className, skills }) => {
  const projectRef = useRef(null);

  const contactDetailsStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: "30px",
    alignItems: "center",
    paddingBottom: "0",
    margin: "0",
    "@media (max-width: 1000px)": {
      gap: "20px",
    },
  };

  return (
    <Box sx={contactDetailsStyle}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar sx={{ m: 1, bgcolor: "active.main" }}>
          <LocalPhoneIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="primary">
          Contact Details
        </Typography>
      </Box>
      <Box>
        <Link href="mailto:contact@ruffinweb.com" target="_blank">
          <Typography
            sx={{
              fontWeight: "bold",
              textDecoration: "underline",
              color: "white",
            }}
            variant="h5"
            color="primary"
          >
            contact@ruffinweb.com
          </Typography>
        </Link>

        <Link href="tel:703-828-4874" target="_blank">
          <Typography
            sx={{ textDecoration: "underline" }}
            variant="h5"
            color="primary"
          >
            703-828-4874
          </Typography>
        </Link>

        <Link
          target="_blank"
          href="/documents/Elijah Ruffin Resume Fall 2024.pdf"
          rel="noreferrer"
        >
          <Typography
            sx={{
              fontWeight: "",
              textDecoration: "underline",
              color: "white",
            }}
            variant="h5"
            color="primary"
          >
            Resume
          </Typography>
        </Link>

        <Link href="mailto:contact@ruffinweb.com" target="_blank"></Link>
      </Box>

      <Box>
        <Typography sx={{ fontWeight: "bold" }} variant="h6" color="primary">
          Washington D.C.
        </Typography>
        <Typography sx={{ fontWeight: "bold" }} variant="h6" color="primary">
          Baltimore Maryland
        </Typography>
        <Typography sx={{ fontWeight: "bold" }} variant="h6" color="primary">
          Northern Virginia
        </Typography>
      </Box>

      <Box sx={{ maxWidth: "70%" }}>
        <Typography variant="h6" color="primary">
          I am currently working on various freelance projects and actively
          seeking more to create.
        </Typography>
        <Typography variant="h6" color="primary">
          Feel free to reach out to me about any collaboration or employment
          opportunities!
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactDetails;
