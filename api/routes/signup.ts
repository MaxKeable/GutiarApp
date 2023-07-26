// signup.ts

import express, { Request, Response } from "express";
import User from "../models/user"; // Make sure to provide the correct path to your User model

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
      name: name,
      email: email,
      password: password,
    });

    // Save the new user to the database
    await newUser.save();

    // Return the registered user as the response
    res.status(200).json({ message: "Signup successful" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({  "message" : error.message });
  }
});

export default router;
