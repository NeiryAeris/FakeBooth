import mongoose, { Schema, Types } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const commentSchema = new mongoose.Schema(
  {
    author: { type: Types.ObjectId, ref: "User", required: true, index: true },
    text: { type: String, required: true, trim: true, maxlength: 2000 },
  },
  { _id: false, timestamps: { createdAt: true, updatedAt: false } }
);

const artworkSchema = new mongoose.Schema({
  publicId: { type: String, default: uuidv4, unique: true, index: true }, // Unique public identifier
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
  date: { type: Date, default: Date.now },
  comments: { type: [commentSchema], default: [] },
});

const artworkModel = mongoose.models.artworks || mongoose.model("artworks", artworkSchema);

export default artworkModel;
