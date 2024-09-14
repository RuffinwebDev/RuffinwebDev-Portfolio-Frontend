import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Link, Outlet } from "react-router-dom";
import { navItems } from "../../config/navConfig";
import { brandLinks } from "../../config/brandLinks";
import Footer from "../Footer/Footer";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function DrawerAppContainer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const appContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", // Center horizontally
    textAlign: "center",
    backgroundImage: `url('/bkIso.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100%",
  };

  const appBarStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "start",
    textAlign: "center",

    "@media (max-width: 1000px)": {
      textAlign: "start",
    },
  };

  const toolbarStyle = {
    width: "60%",

    "@media (max-width: 2000px)": {
      width: "75%",
    },

    "@media (max-width: 1281px)": {
      width: "95%",
    },
  };

  const routeOutletStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    textAlign: "start",
    pt: "64px",
    width: "60%",
    margin: "0 auto",

    "@media (max-width: 2000px)": {
      width: "75%",
    },

    "@media (max-width: 1281px)": {
      width: "95%",
    },
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to={"/"}>
        <Typography variant="h6" sx={{ my: 2, color: "black" }}>
          Ruffinweb Blog
        </Typography>
      </Link>
      <Divider />
      <IconButton
        color="inherit"
        component={Link}
        to="/search"
        sx={{ display: { xs: "small", sm: "none" } }} // Hide on small screens
      >
        <SearchIcon />
      </IconButton>
      <List>
        {navItems.map((item) => (
          <ListItemButton
            key={item.name}
            component={Link}
            to={item.route}
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={appContainerStyle}>
      <CssBaseline />
      <AppBar component="nav" sx={appBarStyle}>
        <Toolbar sx={toolbarStyle}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/*Too many typography components.*/}

          <Typography
            variant="h6"
            component="div"
            sx={{
              textAlign: "start",
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Link to={"/"}>
              <Typography variant="h6" sx={{ my: 2, color: "black" }}>
                Ruffinweb Blog
              </Typography>
            </Link>
          </Typography>
          <IconButton
            color="inherit"
            component={Link}
            to="/search"
            sx={{ display: { xs: "none", sm: "block" } }} // Hide on small screens
          >
            <SearchIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.name} component={Link} to={item.route}>
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={routeOutletStyle}>
        <Outlet />
      </Box>
      <Footer links={brandLinks} />
    </Box>
  );
}
