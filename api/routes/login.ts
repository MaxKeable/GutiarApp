import express, { Request, Response } from "express";
import User from "../models/user"; // Assuming you have a User model defined using Mongoose
import { Auth } from "../utils/auth"

const router = express.Router();


router.post("/", async (req: Request, res: Response) => {
    try {
  
         const { email, password } = req.body;
  
      // Check if the email field is present in the request
      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }
  
      // Find the user in the database by email
      const user = await User.findOne({ email });
  
      // If the user is not found, return a 401 Unauthorized error
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      // You can add any additional login validation here, such as checking passwords, etc.
      const isMatch = await user.isCorrectPassword(password);
      if (!isMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
        }

        const accessToken = Auth.signToken({ id: user._id })
      // If the user is found, you can send back the user data in the response

      return  res.status(200).json({message: "Login successful", accessToken: accessToken});
      

     
    } catch (err) {
      console.error("Error during login:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  
  export default router;
