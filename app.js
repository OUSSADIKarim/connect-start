import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/userRoutes.js";

dotenv.config();
const port = process.env.PORT;
const dbURI = process.env.DBURI;

const app = express();

try {
  await mongoose.connect(dbURI);
  app.listen(port, () => {
    console.log(`this app is running on: http://localhost:${port}`);
  });
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("hello world from ConnectStart");
});
