import express from "express";
import loginRoute from "./login";
import signupRoute from "./signup"; // Updated import statement

const router = express.Router();

router.use("/login", loginRoute);
router.use("/signup", signupRoute); // Updated route path

export default router;
