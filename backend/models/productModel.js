import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  avilable: { type: Boolean, default: true },
});

const productModel = mongoose.models.products || mongoose.model("users", productSchema);

export default productModel;
