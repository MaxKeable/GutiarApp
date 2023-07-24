import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isCorrectPassword: Function 
  // You can add more fields as needed (e.g., password, role, etc.)
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type:String, required: true }
  // Add more fields here as needed
});

userSchema.methods.isCorrectPassword = async function (password: string) {
    return await bcrypt.compare(password, this.password);
  };
  
  // set up pre-save middleware to create password
  userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
      const saltRounds = 16;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
  });

const User = model<IUser>("User", userSchema);

export default User;
