const mongoose = require("mongoose");
const { GridFSBucket } = require('mongodb');
const fs = require('fs');
require("dotenv").config();

const DB_URL = process.env.DB_URL;

async function uploadImageToGridFS(filePath, fileName) {
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Successfully connected to MongoDB Atlas!");

    const conn = mongoose.connection;
    const gfs = new GridFSBucket(conn.db);

    const uploadStream = gfs.openUploadStream(fileName);

    fs.createReadStream(filePath).pipe(uploadStream);

    uploadStream.on('error', (error) => {
      console.error("Error uploading image:", error);
      mongoose.disconnect();
    });

    uploadStream.on('finish', () => {
      console.log("Image uploaded successfully!");
      mongoose.disconnect();
    });
  } catch (error) {
    console.log("Unable connecting to MongoDB Atlas:", error);
  }
}

async function dbLoad() {
  try {
    await uploadImageToGridFS('../Components/Assets/banner_booth.jpg', 'banner_booth.jpg');

    // Other database operations...
  } catch (error) {
    console.error("Error:", error);
  }
}

dbLoad();
