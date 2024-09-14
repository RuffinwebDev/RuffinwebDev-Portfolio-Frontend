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
import NavbarLinkSocial from "./NavbarLinkSocial";
import { Link } from "react-router-dom";
import NavigationMenuSocial from "./NavgationMenuSocial";

// Define the prop types
type LinksAppbarProps = {
  titleRef: React.RefObject<HTMLElement>; // unneeded unless the title element is not located at the top of the page.
  aboutRef: React.RefObject<HTMLElement>;
  toolsRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
  resumeRef: React.RefObject<HTMLElement>;
};

const LinksAppbar: React.FC<LinksAppbarProps> = ({
  titleRef,
  aboutRef,
  toolsRef,
  projectsRef,
  resumeRef,
}) => {
  const theme = useTheme();

  // Define reusable state for nav and user menu
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  // Define social and section links
  const socialPages = [
    { title: "CONTACT", link: "contact" },
    { title: "BLOG", link: "blog" },
    { title: "SERVICES", link: "services" },
  ];

  const sections = [
    { title: "About", link: aboutRef },
    { title: "Tools", link: toolsRef },
    { title: "Projects", link: projectsRef },
    { title: "Resume", link: resumeRef },
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

          {/* Mobile Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Open link to">
              <IconButton onClick={handleClick(setAnchorElNav)} sx={{ p: 0 }}>
                <AccountCircle />
              </IconButton>
            </Tooltip>
            <NavigationMenuSocial
              items={socialPages}
              anchorEl={anchorElNav}
              onClose={handleClose(setAnchorElNav)}
            />
          </Box>

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

          {/* Desktop Social Links */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {socialPages.map((page, index) => (
              <NavbarLinkSocial
                key={index}
                text={page.title}
                href={page.link}
                onClick={handleClose(setAnchorElNav)}
              />
            ))}
          </Box>

          {/* Page Section Menu for Mobile */}
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Navigate to">
              <IconButton onClick={handleClick(setAnchorElUser)} sx={{ p: 0 }}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleClose(setAnchorElUser)}
            >
              {sections.map((section, index) => (
                <MenuItem key={index} onClick={handleClose(setAnchorElUser)}>
                  <NavbarLinkSection
                    text={section.title}
                    onClick={() => {
                      handleClose(setAnchorElNav)();
                      if (section.link) {
                        section.link.current?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                  />
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Section Links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: "15px",
            }}
          >
            {sections.map((section, index) => (
              <NavbarLinkSection
                key={index}
                text={section.title}
                onClick={() => {
                  handleClose(setAnchorElNav)();
                  section.link?.current?.scrollIntoView({ behavior: "smooth" });
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
