import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import User from '../models/user';

const router = express.Router();

mongoose.connect('mongodb://localhost/mydatabase')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

router.put('/api/users', async (req: Request, res: Response) => {
  try {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: "No token, authorization denied" });
    }

    
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    
    const userId = (decoded as any).id;

    const { firstName, lastName, email, password } = req.body;

    
    const user = await User.findByIdAndUpdate(userId, { firstName, lastName, email, password }, { new: true });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json(user);
  } catch (err) {
    console.error("Error during user update:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
