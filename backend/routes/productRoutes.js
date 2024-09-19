import multer from "multer";
import express from "express";
import { addProduct, removeProduct, allProduct } from "../controllers/productController.js";
import path from "path";

const productRouter = express.Router();

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

productRouter.post("/upload", upload.single("product"), (req, res) => {
  // Handle file upload response
  res.send("File uploaded successfully");
});
productRouter.post("/addproduct", addProduct);
productRouter.post("/removeproduct", removeProduct);
productRouter.get("/allproducts", allProduct);

export default productRouter;
