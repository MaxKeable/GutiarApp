import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { ErrorMessage, Field, Form, Formik } from "formik";
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
  return (
    <Paper
      sx={{
        width: "600px",
        height: "600px",
        position: "absolute",
        right: "0",
        background: "rgba(255, 255, 255, 0.5)",
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
      <Typography>HELLOOOOEOEOOE</Typography>
      <ButtonGroup>
        <Button>Save</Button>
      </ButtonGroup>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        }}
        // validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}>
        <Form>
          <Box width="450px">
            <Field
              component={TextField}
              name="firstName"
              type="text"
              label="First Name"
            />
            <ErrorMessage name="firstName" component="div" />

            <Field
              component={TextField}
              name="lastName"
              type="text"
              label="Last Name"
            />
            <ErrorMessage name="lastName" component="div" />

            <Field
              component={TextField}
              fullWidth
              name="email"
              type="email"
              label="Email"
            />
            <ErrorMessage name="email" component="div" />

            <Field
              component={TextField}
              name="password"
              type="password"
              label="Password"
            />
            <ErrorMessage name="password" component="div" />

            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Form>
      </Formik>
    </Paper>
  );
};

export default SidePod;
