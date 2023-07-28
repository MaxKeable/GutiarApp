import {
  Box,
  Button,
  ButtonGroup,
  FormHelperText,
  Grid,
  IconButton,
  Paper,
  TextField
} from "@mui/material";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must contain at least 6 characters")
    .required("Required")
});

const SidePod = (props: { setIsSidePodOpen: Function }) => {
  const updateUser = async (values: any, token: any) => {
    try {
      const response = await fetch("/api/updateUserInfo", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ values })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const user = await response.json();
      console.log(user);
    } catch (error) {
      console.error("An error occurred while updating the user:", error);
    }
  };

  const handleUpdateUser = (values: any) => {
    updateUser(values, localStorage.getItem("token"));
  };

  return (
    <Paper
      sx={{
        width: "500px",
        position: "absolute",
        right: "0",
        background: "rgba(25, 25, 25, 0.9)",
        boxShadow: "0 8px 32px 0 rgba(250, 238, 235, 0.37)",
        zIndex: 1000
      }}>
      <Box display="flex" justifyContent="flex-end">
        {" "}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="close"
          onClick={() => {
            props.setIsSidePodOpen(false);
          }}>
          <DisabledByDefaultIcon sx={{ fontSize: "2em" }} />
        </IconButton>
      </Box>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleUpdateUser(values);
        }}>
        {({ values, handleBlur, handleChange, errors, touched }) => (
          <Form>
            <Grid container mt={3}>
              <Grid item xs={6} pl={3}>
                <TextField
                  name="firstName"
                  size="small"
                  label="First Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName && errors.firstName ? true : false}
                />
                {touched.firstName && errors.firstName && (
                  <FormHelperText error>{errors.firstName}</FormHelperText>
                )}
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="lastName"
                  size="small"
                  label="Last Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && errors.lastName ? true : false}
                />
                {touched.lastName && errors.lastName && (
                  <FormHelperText error>{errors.lastName}</FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} pl={3} pr={7} mt={4}>
                <TextField
                  fullWidth
                  name="email"
                  size="small"
                  label="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && errors.email ? true : false}
                />
                {touched.email && errors.email && (
                  <FormHelperText error>{errors.email}</FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} mt={4} pl={3} pr={7}>
                <TextField
                  fullWidth
                  name="password"
                  size="small"
                  label="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && errors.password ? true : false}
                />
                {touched.password && errors.password && (
                  <FormHelperText error>{errors.password}</FormHelperText>
                )}
              </Grid>
              <Grid
                item
                xs={12}
                mt={3}
                mb={3}
                display="flex"
                justifyContent="flex-end"
                pr={3}>
                <ButtonGroup>
                  <Button type="submit" variant="contained" color="primary">
                    Save
                  </Button>
                  <Button>Cancel</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default SidePod;
