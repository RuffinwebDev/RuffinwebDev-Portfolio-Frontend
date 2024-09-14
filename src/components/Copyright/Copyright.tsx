import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import * as React from "react";
import { useTheme } from "@mui/material/styles";

export const Copyright = React.forwardRef((props, ref) => {
  const theme = useTheme();

  return (
    <Typography
      sx={{ color: `${theme.palette.primary.light}` }}
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"All rights reserved © "}
      <Link color="inherit" to="/">
        Ruffinweb
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
});
