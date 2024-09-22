import React from "react";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Typography from "@mui/material/Typography";
import GsapReveal from "../../pages/LandingPage/GsapReveal";
import SubmitSnackbar from "../../components/Contact/SubmitSnackbar";
import { useTheme } from "@mui/material";

function ContactForm(props) {
  const { formData, handleChange, handleSubmit, errors, submitting } = props;
  const theme = useTheme();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "active.main" }}>
          <AlternateEmailIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="primary">
          Contact Me
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                autoComplete="given-name"
                name="firstName"
                required
                error={Boolean(errors.firstName)}
                fullWidth
                id="firstName"
                label="Name"
                value={formData.firstName}
                onChange={(e) => handleChange(e, { type: "string" })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={Boolean(errors.email)}
                helperText={
                  errors.email ? "Please enter a valid email address" : ""
                }
                value={formData.email}
                onChange={(e) => handleChange(e, { type: "string" })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                error={Boolean(errors.message)}
                fullWidth
                multiline
                name="message"
                label="Message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange(e, { type: "string" })}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Send Message"}
          </Button>
        </Box>
      </Box>
      <SubmitSnackbar
        openSnackbar={props.openSnackbar}
        setOpenSnackbar={props.setOpenSnackbar}
      />
    </Container>
  );
}

export default ContactForm;
