import express from "express";
import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userConttroller.js";

export const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/register", createUser);
userRouter.get("/:id", getUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
