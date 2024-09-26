import usermodel from "../models/userModel.js";

const addToCart = async (req, res) => {
  try {
    let userData = await usermodel.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemID]) {
      cartData[req.body.itemID] = 1;
    } else {
      cartData[req.body.itemID] += 1;
    }
    await usermodel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const removefromcart = async (req, res) => {
  try {
    let userData = await usermodel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.itemID] > 0) {
      cartData[req.body.itemID] -= 1;
    }
    await usermodel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Removed From Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData: cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCart };
