import "dotenv/config";
import mongoose from "mongoose";

const dbConnect = () => {
  try {
    mongoose.connect(process.env.DB_URL);
  } catch (error) {
    console.log("There is smt wrong with Mongo connection")
    console.log(error)
  }
};
export default dbConnect;
