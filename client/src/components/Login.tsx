import { useState } from "react";
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
import { Form, Formik } from "formik";

const Login = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleSubmitForm = async (values: any) => {
    // Validate email field
    // if (!values.email) {
    //   setEmailError("Email is required");
    // } else if (!isValidEmail(values.email)) {
    //   setEmailError("Invalid email address");
    // } else {
    //   setEmailError("");
    // }

    // Handle form submission logic here
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("userCredentials", data.accessToken);
      document.location.replace("/game");
      console.log(data);
      setDialogOpen(true);
      return data;
    }

    // Open the confirmation dialog
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
      <Grid item xs={12}>
        <Box sx={glassMorphismStyles}>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmitForm}>
            {({ values, handleChange, handleBlur }) => (
              <Form>
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  fullWidth
                  sx={{ my: 1 }}
                  inputProps={{
                    style: textFieldStyle
                  }}
                />
                <TextField
                  id="standard-basic"
                  label="password"
                  variant="standard"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
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

                <Dialog
                  open={isDialogOpen}
                  onClose={() => setDialogOpen(false)}>
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
            )}
          </Formik>
        </Box>
      </Grid>
    </Box>
  );
};

export default Login;
