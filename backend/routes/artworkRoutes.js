import express from "express";
import multer from "multer";
import path from "path";
import artworkModel from "../models/artworkModel.js";
import { addArtwork, removeArtwork, allArtwork } from "../controllers/artworkController.js";

const artworkRouter = express.Router();

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },


});

const upload = multer({ storage: storage });

artworkRouter.post("/upload", upload.array("artwork",5), (req, res) => {
    res.send("File uploaded successfully");
})

artworkRouter.post("/addartwork", upload.array("image",5), addArtwork);
artworkRouter.post("/removeartwork", removeArtwork);
artworkRouter.get("/allartworks", allArtwork);

export default artworkRouter;