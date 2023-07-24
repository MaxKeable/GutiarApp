import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField
} from "@mui/material";
import homeBG from "../assets/homeBG.svg";
import BlockHeader from "./headers/BlockHeader";
import logo from "../assets/logo1.svg";
import { Form, Formik } from "formik";

const Login = () => {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleSubmitForm = async (values: any) => {
    // Validate name field
    if (!values.name) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }

    // Validate email field
    if (!values.email) {
      setEmailError("Email is required");
    } else if (!isValidEmail(values.email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }

    // Handle form submission logic here
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    const data = await response.json();
    console.log(data);

    setDialogOpen(true);
    return data;

    // Open the confirmation dialog
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const glassMorphismStyles = {
    backdropFilter: "blur(10px) brightness(100%)",
    background:
      "linear-gradient(180deg, rgba(239, 239, 239, 0.6) 0%, rgba(239, 239, 239, 0.08) 0%)",
    borderRadius: "20px",
    border: "1px solid",
    borderColor: "#D9D9D9",
    height: "55%",
    width: "30%",
    position: "absolute",
    top: "50%",
    left: "50%",
    padding: "20px",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };

  const textFieldStyle = {
    color: "#fefefe"
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${homeBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column"
      }}>
      <BlockHeader
        logo={logo}
        navLinks={[
          { name: "HOME", path: "/" },
          { name: "GUITAR", path: "/guitartuner" },
          { name: "BASS", path: "/basstuner" },
          { name: "LOGIN", path: "/login" }
        ]}
        alignment="left"
      />
      <Grid item xs={12}>
        <Box sx={glassMorphismStyles}>
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={handleSubmitForm}>
            <Form>
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                name="name"
                fullWidth
                sx={{ my: 1 }}
                inputProps={{
                  style: textFieldStyle
                }}
                error={Boolean(nameError)}
                helperText={nameError}
                onBlur={(e) => {
                  if (!e.target.value) {
                    setNameError("Name is required");
                  } else {
                    setNameError("");
                  }
                }}
              />
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                name="email"
                fullWidth
                sx={{ my: 1 }}
                inputProps={{
                  style: textFieldStyle
                }}
                error={Boolean(emailError)}
                helperText={emailError}
                onBlur={(e) => {
                  if (!e.target.value) {
                    setEmailError("Email is required");
                  } else if (!isValidEmail(e.target.value)) {
                    setEmailError("Invalid email address");
                  } else {
                    setEmailError("");
                  }
                }}
              />
              <TextField
                id="standard-basic"
                label="password"
                variant="standard"
                name="password"
                fullWidth
                sx={{ my: 1 }}
                inputProps={{
                  style: textFieldStyle
                }}
              />
              <Button
                type="submit"
                sx={{
                  borderRadius: "30px",
                  height: "60px",
                  width: "70%",
                  justifyContent: "center",
                  backgroundColor: "#BC6C25",
                  color: "white",
                  fontSize: "1.2rem",
                  mt: 7,
                  alignSelf: "center", // Add this style to center the button vertically
                  marginLeft: "50px"
                }}>
                Submit
              </Button>

              <Dialog open={isDialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Your form has been submitted successfully!
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setDialogOpen(false)}>Close</Button>
                </DialogActions>
              </Dialog>
            </Form>
          </Formik>
        </Box>
      </Grid>
    </Box>
  );
};

export default Login;
