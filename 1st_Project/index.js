import express, { urlencoded } from "express";
import mongoose from "mongoose";

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));







app.listen(PORT, () => {
  console.log("Listening at the port", PORT);
});
