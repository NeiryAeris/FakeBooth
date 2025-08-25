import express from "express";
import dbConnect from "./dbContext.js";
import cors from "cors";
import productRouter from "./routes/productRoutes.js";
import artworkRouter from "./routes/artworkRoutes.js";
import userRouter from "./routes/userRoutes.js";
// import cartRouter from './routes/cartRoutes.js'

const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());

dbConnect();

app.use("/products", productRouter);
app.use("/artworks", artworkRouter);
app.use("/users", userRouter);
// app.use("/cart", cartRouter);
app.use("/images", express.static("./upload/images"));
app.get("/", (req, res) => {
  res.send("Express App is running");
  console.log("Express is running");
});

app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
