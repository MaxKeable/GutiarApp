import { Box, Button, Grid, TextField, FormHelperText, Typography } from "@mui/material";
import homeBG from "../assets/homeBG.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Nav from "./nav";

const SignUp = () => {
  const glassMorphismStyles = {
    backdropFilter: "blur(10px) brightness(100%)",
    background:
      "linear-gradient(180deg, rgba(239, 239, 239, 0.6) 0%, rgba(239, 239, 239, 0.08) 0%)",
    borderRadius: "20px",
    border: "1px solid",
    borderColor: "#D9D9D9",
    height: "70%",
    width: "60%",
    position: "absolute",
    top: "50%",
    left: "50%",
    padding: "0px 20px 20px 20px",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Invalid email format"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
  });

  const handleSubmit = async (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      values.name = values.username;
      console.log("Form values:", values);

      const requestObject = {
        name: values.username,
        email: values.email,
        password: values.password
      };

      // Send a POST request to the backend to register the user
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestObject)
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("userCredentials", data.accessToken);
        
        document.location.replace("/game")
        // Registration successful, show success message or redirect
        console.log("User registered successfully!");
        // You can show a success message to the user or redirect to another page
      } else {
        // Registration failed, show error message or handle the error
        console.error("Registration failed!");
        // You can show an error message to the user or handle the error accordingly
      }
    } catch (error) {
      console.error("Error during registration:", error);
      // Handle any errors that occurred during the registration process
    } finally {
      // Regardless of success or failure, setSubmitting to false to enable the button
      setSubmitting(false);
    }
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
         <Nav  setIsSidePodOpen={() => false} />
      <Grid item xs={12}>
        <Box mt={4} sx={glassMorphismStyles}>
          <Typography variant="h4" mb={4} sx={{ fontWeight: "bold" }}>
            Sign Up
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <Field
                  as={TextField}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Username"
                  name="username"
                  InputLabelProps={{ style: { fontSize: "20px" } }} // Adjust font size here
                />
                <ErrorMessage
                  name="username"
                  component={FormHelperText}
                  error
                />

                <Field
                  as={TextField}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Email"
                  name="email"
                  InputLabelProps={{ style: { fontSize: "20px" } }} // Adjust font size here
                />
                <ErrorMessage name="email" component={FormHelperText} error />

                <Field
                  as={TextField}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Password"
                  name="password"
                  type="password"
                  InputLabelProps={{ style: { fontSize: "20px" } }} // Adjust font size here
                />
                <ErrorMessage
                  name="password"
                  component={FormHelperText}
                  error
                />

                <Field
                  as={TextField}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  InputLabelProps={{ style: { fontSize: "20px" } }} // Adjust font size here
                />
                <ErrorMessage
                  name="confirmPassword"
                  component={FormHelperText}
                  error
                />

                <Button type="submit" variant="contained" color="primary">
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
    </Box>
  );
};

export default SignUp;
