import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js"; // fix path

const userSignUp = async (req, res) => {
  const { username, name, email, password } = req.body;
  const finalUsername = username ?? name; // accept either 'username' or 'name'

  if (!finalUsername || !email || !password) {
    return res.status(400).json({ success: false, errors: "username, email, password are required" });
  }

  const exists = await userModel.findOne({ $or: [{ email }, { username: finalUsername }] });
  if (exists) {
    return res.status(409).json({ success: false, errors: "User already exist" }); // fix status.json
  }

  const cart = Object.fromEntries(Array.from({ length: 300 }, (_, i) => [i, 0]));

  const user = await userModel.create({
    username: finalUsername,
    email,
    password, // plain for now (you said you'll handle security later)
    cartData: cart,
  });

  const token = jwt.sign({ user: { id: user.id } }, "secret_ecom");
  res.json({ success: true, token });
  console.log("New user signed up:", user.username);
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  // password is select:false in the model -> must select it explicitly
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) return res.json({ success: false, errors: "Email does not exist" });

  const ok = password === user.password; // dev-only compare
  if (!ok) return res.json({ success: false, errors: "Wrong password" });

  const token = jwt.sign({ user: { id: user.id } }, "secret_ecom");
  res.json({ success: true, token });
  console.log("User logged in:", user.username);
};

const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send({ errors: "Unauthorized" });
  try {
    const data = jwt.verify(token, "secret_ecom");
    req.user = data.user;
    next();
  } catch {
    res.status(401).send({ errors: "Unauthorized" });
  }
};

export { userLogin, userSignUp, fetchUser };
