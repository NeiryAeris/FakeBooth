// require("dotenv").config();
import "dotenv/config";
import express from "express";
// const express = require("express");
import mongoose from "mongoose";
// const mongoose = require("mongoose");
import jwt from "jsonwebtoken";
// const jwt = require("jsonwebtoken");
import multer from "multer";
// const multer = require("multer");
import path from "path";
// const path = require("path");
import cors from "cors";
// const cors = require("cors");
import { equal } from "assert";
// const { equal } = require("assert");

import dbConnect from './dbContext.js'

const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());

//Connect to database
dbConnect()
// mongoose.connect(process.env.DB_URL);

//Create API
app.get("/", (req, res) => {
  res.send("Express App is running ");
});
//Store img
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage: storage });
//Create upload endpoint
app.use("/images", express.static("./upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});
//Schema Product
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avilable: {
    type: Boolean,
    default: true,
  },
});
//Schema Users
const Users = mongoose.model("Users", {
  // id: {
  //   type: Number,
  //   required: true,
  // },
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Endpoint make user
app.post("/signup", async (req, res) => {
  let users = await Users.find({});
  // let id;
  // if (users.length > 0) {
  //   let last_user_array = users.slice(-1);
  //   let last_user = last_user_array[0];
  //   id = last_user.id + 1;
  // } else {
  //   id = 1;
  // }
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({ success: false, errors: "User already exist" });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.name,
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
});
//fetch user
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

//End point login
app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
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
});
//API thêm product
app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log("SAVED");
  res.json({
    success: true,
    name: req.body.name,
  });
});
//API xóa product
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});
//API lấy all product
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All product fetched");
  res.send(products);
});
//end point newcollection
app.get("/newcollection", async (req, res) => {
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  console.log("New Collection fetched");
  res.send(newcollection);
});
//popular with gallery
app.get("/populargallery", async (req, res) => {
  let products = await Product.find({ category: "gallery" });
  let populargallery = products.slice(0, 4);
  console.log("Popular gallery fetched");
  res.send(populargallery);
});
//endpoint addtocart
app.post("/addtocart", fetchUser, async (req, res) => {
  console.log(req.body, req.user);
  try {
    let userData = await Users.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.json({ message: "Added" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
//endpoint xóa khỏi cart
app.post("/removefromcart", fetchUser, async (req, res) => {
  try {
    console.log("removed", req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });
    if (userData.cartData[req.body.itemId] > 0) userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.json({ message: "Removed" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
// Lấy cart
app.post("/getcart", fetchUser, async (req, res) => {
  try {
    console.log("get cart");
    let userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on Port: " + port);
  } else {
    console.log("Error: " + error);
  }
});
