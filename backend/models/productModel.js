import mongoose, { Schema, Types } from "mongoose";
import { v4 as uuidv4 } from "uuid";

// const commentSchema = new mongoose.Schema(
//   {
//     author: { type: Types.ObjectId, ref: "User", required: true, index: true },
//     text: { type: String, required: true, trim: true, maxlength: 2000 },
//   },
//   { _id: false, timestamps: { createdAt: true, updatedAt: false } }
// );

const productSchema = new mongoose.Schema({
  publicId: { type: String, default: uuidv4, unique: true, index: true },
  author: { type: Types.ObjectId, ref: "User", required: true, index: true },
  title: { type: String, required: true, trim: true, maxlength: 200 },
  description: { type: String, trim: true, maxlength: 2000 },

  category: {
    type: String,
    required: true,
    trim: true,
    // enum: ["digital", "photo", "sketch", "painting"] // optional: constrain categories
  },

  mainImage: { type: String, required: true, trim: true },
  additionalImages: { type: [String], default: [] },
  new_price: { type: Number, required: true },
  base_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  avilable: { type: Boolean, default: true },
});

const productModel = mongoose.models.products || mongoose.model("products", productSchema);

export default productModel;
