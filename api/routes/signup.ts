import express, { Request, Response } from "express";
import User from "../models/user";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    // Extract the user information from the request body
    const { name, email, password } = req.body;

    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(401).json({ error: "User already exists" });
    }

    // Create a new user document based on the User model
    const newUser = new User({
      name,
      email,
      password,
    });

    // Save the new user to the database
    await newUser.save();

    // Return the registered user as the response
    res.json(newUser);
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
