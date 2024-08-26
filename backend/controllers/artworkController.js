import multer from "multer";
import path from "path";
import artworkModel from "../models/artworkModel.js";

const upload = async (req,res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  })
}

const addArtwork = async (res, req) => {
  try {
    let artworks = await artworkModel.find({});
    if (artworks.length > 0) {
      let last_artwork_array = products.slice(-1);
      let last_artwork = last_artwork_array[0];
      id = last_artwork.id + 1;
    } else {
      id = 1;
    }
    let image_filename = `${req.file.filename}`;
    const artwork = new artworkModel({
      id: id,
      name: req.body.name,
      image: image_filename,
      category: req.body.category,
    });
    console.log(artwork);
    await artwork.save();
    console.log("SAVED");
    res.json({ success: true, message: "Artwork Added", name: req.body.name });
  } catch (error) {
    console.log(error);
  }
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
};

const removeArtwork = async (req, res) => {
  await artworkModel.findByIdAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({ success: true, name: req.body.name });
};


const allArtwork = async (req,res) => {
  let artworks = await artworkModel.find({});
  console.log('All product fetcheted!');
  res.send(artworks);
}

export {upload,addArtwork,removeArtwork,allArtwork}