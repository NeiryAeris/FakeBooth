import express from "express";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import cors from "cors";
import { equal } from "assert";

const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (res, req) = () => {
    res.send('Express App is running')
})