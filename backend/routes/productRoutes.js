import multer from "multer";
import express from "express";
import { upload, addProduct, removeProduct, allProduct } from "../controllers/productController.js";

const productRouter = express.Router();
// const upload = multer({ storage: storage });

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

productRouter.post("/upload", upload.single("product"), upload);
productRouter.post("/addproduct", addProduct);
productRouter.post("/removeproduct", removeProduct);
productRouter.get("/allproducts", allProduct);

export default productRouter;
