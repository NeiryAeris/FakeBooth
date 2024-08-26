import multer from "multer";
import path from "path";
import productModel from "../models/productModel.js";

const upload = async (req,res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/products/${req.file.filename}`,
  })
}

const addProduct = async (res, req) => {
  try {
    let products = await productModel.find({});
    if (products.length > 0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id + 1;
    } else {
      id = 1;
    }
    let image_filename = `${req.file.filename}`;
    const product = new productModel({
      id: id,
      name: req.body.name,
      image: image_filename,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("SAVED");
    res.json({ success: true, message: "Product Added", name: req.body.name });
  } catch (error) {
    console.log(error);
  }
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
};

const removeProduct = async (req, res) => {
  await productModel.findByIdAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({ success: true, name: req.body.name });
};


const allProduct = async (req,res) => {
  let products = await productModel.find({});
  console.log('All product fetcheted!');
  res.send(products);
}

export {upload,addProduct,removeProduct,allProduct}