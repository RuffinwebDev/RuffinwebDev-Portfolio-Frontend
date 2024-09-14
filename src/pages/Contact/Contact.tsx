// @ts-ignore
import React, { forwardRef, useState } from "react";
import ContactForm from "../../components/Contact/ContactForm";
import HandleSubmit from "../../components/Contact/HandleSumbit";
import HandleChange from "../../components/Contact/HandleChange";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import ReturnButtons from "../../components/ReturnButtons/ReturnButtons";

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
    flexDirection: "column",
    flex: 1,
    gap: "150px",
    alignItems: "start",
    paddingBottom: "0",
    margin: "150px 0 50px",
    "@media (maxWidth: 1000px)": {
      flexDirection: "column",
      gap: "20px",
    },
  };

  return (
    <Box>
      <Box sx={contactPageStyle}>
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
    </Box>
  );
});
