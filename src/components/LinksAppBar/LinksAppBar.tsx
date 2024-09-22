import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import { AccountCircle, Menu as MenuIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import NavbarLinkSection from "./NavbarLinkSection";
import { Link } from "react-router-dom";
import NavigationMenuSocial from "./NavgationMenuSocial";
import Button from "@mui/material/Button";

// Define the prop types
type LinksAppbarProps = {
  titleRef: React.RefObject<HTMLElement>; // unneeded unless the title element is not located at the top of the page.
  aboutRef: React.RefObject<HTMLElement>;
  toolsRef: React.RefObject<HTMLElement>;
  experienceRef: React.RefObject<HTMLElement>;
  resumeRef: React.RefObject<HTMLElement>;
};

const LinksAppbar: React.FC<LinksAppbarProps> = ({
  titleRef,
  aboutRef,
  toolsRef,
  experienceRef,
  resumeRef,
}) => {
  const theme = useTheme();

  // Define reusable state for nav and user menu
  const [anchorElSocial, setAnchorElSocial] =
    React.useState<null | HTMLElement>(null);
  const [anchorElSection, setAnchorElSection] =
    React.useState<null | HTMLElement>(null);

  // Define social and section links
  const socialPages = [
    { title: "CONTACT", link: "contact" },
    { title: "BLOG", link: "blog" },
    { title: "SERVICES", link: "services" }, // Chang back to services
  ];

  const sections = [
    { title: "About", ref: aboutRef },
    { title: "Skills", ref: toolsRef },
    { title: "Experience", ref: experienceRef },
    { title: "Resume", ref: resumeRef },
  ];

  // Common event handlers
  const handleClick =
    (setAnchor: React.Dispatch<React.SetStateAction<null | HTMLElement>>) =>
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchor(event.currentTarget);
    };

  const handleClose =
    (setAnchor: React.Dispatch<React.SetStateAction<null | HTMLElement>>) =>
    () => {
      setAnchor(null);
    };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: theme.palette.secondary.main,
        boxShadow: "none",
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        borderRight: `1px solid ${theme.palette.primary.main}`,
        borderLeft: `1px solid ${theme.palette.primary.main}`,
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        maxWidth: "1600px",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Desktop Brand Logo/Home Link */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h5"
              noWrap
              onClick={scrollToTop}
              // ref={titleRef}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              RUFFINWEB
            </Typography>
          </Link>

          {/* Mobile Social Links Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Open link to">
              <IconButton
                onClick={handleClick(setAnchorElSocial)}
                sx={{ p: 0 }}
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>
            <NavigationMenuSocial
              items={socialPages}
              anchorEl={anchorElSocial}
              onClose={handleClose(setAnchorElSocial)}
            />
          </Box>

          {/* Mobile Brand Logo/Home Link */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h5"
              noWrap
              onClick={scrollToTop}
              // ref={titleRef}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 500,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              RUFFINWEB
            </Typography>
          </Link>

          {/* Mobile Page Section Menu*/}
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Navigate to">
              <IconButton
                onClick={handleClick(setAnchorElSection)}
                sx={{ p: 0 }}
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              sx={{ mt: "20px" }}
              anchorEl={anchorElSection}
              open={Boolean(anchorElSection)}
              onClose={handleClose(setAnchorElSection)}
            >
              {sections.map((section, index) => (
                <MenuItem sx={{ margin: "0", padding: "0" }} key={index}>
                  <Button
                    style={{
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "start",
                      padding: "6px 16px",
                    }}
                    onClick={() => {
                      const sectionRef = section.ref; // Use the section's ref

                      const yOffset = -100; // Adjust this value based on your fixed header height
                      if (sectionRef && sectionRef.current) {
                        const y =
                          sectionRef.current.getBoundingClientRect().top +
                          window.pageYOffset +
                          yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }

                      handleClose(setAnchorElSection)(); // Close the menu after clicking
                    }}
                  >
                    <Typography
                      sx={{
                        margin: "0",
                        padding: "0",
                        color: "#000000",
                        width: "100%",
                        textDecoration: "none",
                      }}
                    >
                      {section.title}
                    </Typography>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Social Links */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {socialPages.map((page, index) => (
              <Link
                style={{
                  textDecoration: "none",
                  padding: "10px",
                  // color: "${theme.palette.primary.main}", // ???
                  color: `${theme.palette.primary.light}`,
                }}
                key={index}
                to={page.link}
                onClick={handleClose(setAnchorElSocial)}
              >
                {page.title}
              </Link>
            ))}
          </Box>

          {/* Desktop Section Links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: "15px",
              justifyContent: "flex-end",
            }}
          >
            {sections.map((section, index) => (
              <NavbarLinkSection
                key={index}
                text={section.title}
                onClick={() => {
                  handleClose(setAnchorElSection)();

                  // Adjust the scroll position manually
                  const sectionRef = section.ref;
                  const yOffset = -100;

                  if (sectionRef && sectionRef.current) {
                    const y =
                      sectionRef.current.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;

                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              />
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default LinksAppbar;
