import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Define common theme colors.
const commonColors = {
  textPrimary: "#ffffff",
  textSecondary: "#000000",
  backgroundDefault: "#000000",
  backgroundDepth: "#090909",
  // backgroundDepth: "rgba(0, 0, 0, 0.5)",
  // backgroundDepth: "#151515",
  backgroundOutline: "#808080",
  primary: "#ffffff",
  secondary: "#000000",
  transparent: "rgba(0, 0, 0, 0.5)",
  active: "#088F8F",
  formOutline: "#00ffff",
  actionActive: "#ffffff",
  label: "#0000ff",
};

// Create the theme
let RuffinwebTheme = createTheme({
  typography: {
    fontFamily: "Tahoma, Geneva, sans-serif",
    fontSize: 15,
    h1: { fontSize: 100, fontFamily: "FreeMono, monospace" },
    h2: { fontSize: 80 },
    h6: { fontSize: 14 },
    body1: { fontWeight: 500 },
    p: { fontWeight: 500 },
  },
  palette: {
    primary: { main: commonColors.textPrimary },
    secondary: { main: commonColors.textSecondary },
    background: { default: commonColors.transparent },
    transparent: { main: commonColors.transparent },
    depth: { main: commonColors.backgroundDepth },
    outline: { main: commonColors.backgroundOutline },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: { color: commonColors.textPrimary },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: commonColors.textPrimary, // Outline color on hover
          },
        },
        notchedOutline: {
          borderColor: commonColors.backgroundOutline,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { color: commonColors.textPrimary },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: { color: commonColors.textPrimary },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: { color: commonColors.textPrimary },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: { color: commonColors.textPrimary },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: { color: commonColors.secondary },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 0,
          "&.Mui-disabled": {
            color: commonColors.textPrimary,
            backgroundColor: "rgba(0, 0, 0, 0.12)",
            borderColor: commonColors.textPrimary,
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: { color: commonColors.primary },
        text: { color: commonColors.textPrimary },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: { color: commonColors.textPrimary },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {},
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: { maxWidth: "none" },
      },
    },
  },
});

// Enable responsive font sizes
RuffinwebTheme = responsiveFontSizes(RuffinwebTheme);

export default RuffinwebTheme;
