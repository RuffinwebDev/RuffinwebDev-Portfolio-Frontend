// @ts-ignore
import React, { forwardRef, useState } from "react";
import ContactDetails from "../../components/Contact/ContactDetails";
import ContactForm from "../../components/Contact/ContactForm";
import HandleSubmit from "../../components/Contact/HandleSumbit";
import HandleChange from "../../components/Contact/HandleChange";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import ReturnButtons from "../../components/ReturnButtons/ReturnButtons";
import Typography from "@mui/material/Typography";

export const Contact = React.forwardRef((props, ref) => {
  const theme = useTheme();
  const { gsapRef } = props;
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    HandleSubmit(event, {
      formData,
      setFormData,
      errors,
      setErrors,
      submitting,
      setSubmitting,
      openSnackbar,
      setOpenSnackbar,
    });
  };

  const contactPageStyle = {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    gap: "100px",
    justifyContent: "center",
    alignItems: "start",
    paddingBottom: "0",
    margin: "100px 0 50px",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
      alignItems: "center",

      gap: "100px",
      margin: "50px 0",
    },
  };

  const contactHalfStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: "10px",
    alignItems: "center",
    paddingBottom: "0",
    margin: "0",
    width: "50%",
    "@media (max-width: 1000px)": {
      width: "100%",
      flexDirection: "column",
      gap: "20px",
    },
  };
  return (
    <Box sx={contactPageStyle}>
      <Box sx={contactHalfStyle}>
        <ContactForm
          formData={formData}
          handleChange={HandleChange({ formData, setFormData, setErrors })}
          handleSubmit={handleSubmit}
          errors={errors}
          submitting={submitting}
          openSnackbar={openSnackbar}
          setOpenSnackbar={setOpenSnackbar}
        />
      </Box>
      <Box sx={contactHalfStyle}>
        <ContactDetails />
      </Box>
    </Box>
  );
});
