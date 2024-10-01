import mongoose, { mongo } from "mongoose";

const artworkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: [String], required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  comments: { type: [String] },
});

const artworkModel = mongoose.models.artworks || mongoose.model("artworks", artworkSchema);

export default artworkModel;
