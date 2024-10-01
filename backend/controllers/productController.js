import productModel from "../models/productModel.js";
const port = 4000;
let id = 0;

const addProduct = async (req, res) => {
  try {
    let products = await productModel.find({});
    if (products.length > 0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id + 1;
    } else {
      id = 1;
    }

    // let image_filename = `${req.file.filename}`;
    let image_filenames = req.files.map(file  => file.filename);

    const product = new productModel({
      id: id,
      name: req.body.name,
      image: image_filenames,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    console.log(product);
    await product.save();
    console.log("SAVED");

    res.json({
      success: true,
      message: "Product Added",
      name: req.body.name,
      image_url: image_filenames.map(filename =>`http://localhost:${port}/images/${image_filename}`),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to add product" });
  }
};

const removeProduct = async (req, res) => {
  try {
    await productModel.findOneAndDelete({ id: req.body.id });
    console.log("Removed");
    res.json({ success: true, name: req.body.name });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to remove product" });
  }
};

const allProduct = async (req, res) => {
  try {
    let products = await productModel.find({});
    console.log("All products fetched!");
    res.send(products);
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch products" });
  }
};

export { addProduct, removeProduct, allProduct };