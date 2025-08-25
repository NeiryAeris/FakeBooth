import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true, unique: true },
    items: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: "products", required: true },
            quantity: { type: Number, required: true, min: 1, default: 1 },
        },
    ],
    updatedAt: { type: Date, default: Date.now },
})

const cartModel = mongoose.models.carts || mongoose.model("carts", cartSchema);
export default cartModel;