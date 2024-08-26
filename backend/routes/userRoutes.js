import express from "express";
import { userLogin, userSignUp } from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.post("/login", userLogin);
userRouter.post("/signup", userSignUp);

export default userRouter;