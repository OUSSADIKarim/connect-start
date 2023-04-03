import mongoose from "mongoose";
import "mongoose-type-email";
import { hashPassword } from "./../utils/hash.js";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    role: {
      type: String,
      enum: ["admin", "user", "startup owner", "investor", "service provider"],
      default: "user",
      required: true,
    },

    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: mongoose.SchemaTypes.Email,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    const hashedPassword = await hashPassword(this.password);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

export const User = mongoose.model("User", userSchema);
