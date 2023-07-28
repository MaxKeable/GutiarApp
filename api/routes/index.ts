import express from "express";
import loginRoute from "./login";
import signupRoute from "./signup"; // Updated import statement
import updateUserInfoRoute from "./updateUserInfo";

const router = express.Router();

router.use("/login", loginRoute);
router.use("/signup", signupRoute); // Updated route path
router.use("/updateUserInfo", updateUserInfoRoute); 

export default router;
