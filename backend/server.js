import express from "express";
import dbConnect from "./dbContext.js";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import cors from "cors";
import { equal } from "assert";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";

const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());

dbConnect();

app.use("/products", productRouter);
app.use("/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("Express App is running");
  console.log("Express is running");
});

app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
