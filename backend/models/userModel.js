import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, unique: true },
  password: { type: String, require: true },
  cartData: { type: Object },
  date: { type: Date, default: Date.now },
});

const userModel = mongoose.models.users || mongoose.model("users", userSchema);

export default userModel