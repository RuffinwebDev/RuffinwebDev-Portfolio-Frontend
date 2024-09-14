import React, { forwardRef, useState } from "react";
import ContactForm from "../../components/Contact/ContactForm";
import HandleSubmit from "../../components/Contact/HandleSumbit";
import HandleChange from "../../components/Contact/HandleChange";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import GsapReveal from "./GsapReveal";
import { Link } from "react-router-dom";

const ContactCard = forwardRef((props, ref) => {
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

  const contactCardStyle = {
    padding: "20px",
    borderRadius: "10px",
    margin: "60px 0 0",
  };
  return (
    <div ref={ref}>
      <Box sx={contactCardStyle} ref={ref}>
        <Link to="/contact">Contact Me!</Link>
      </Box>
    </div>
  );
});

export default ContactCard;
