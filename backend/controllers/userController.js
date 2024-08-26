import jwt from "jsonwebtoken";
import userModel from "../models/userModel";

const userSignUp = async (req, res) => {
  let check = await userModel.findOne({ email: req.body.email });
  if (check) {
    return res.status.json({ success: false, errors: "User already exist" });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new userModel({
    username: req.body.name,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();
  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token });
};

const userLogin = async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "Wrong pasword" });
    }
  } else {
    res.json({ success: false, errors: "Email does not exist" });
  }
};

const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send({ errors: "Use the right username" });
  }
  try {
    const data = jwt.verify(token, "secret_ecom");
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ errors: "Use the right username" });
  }
};

export { userLogin, userSignUp, fetchUser };
