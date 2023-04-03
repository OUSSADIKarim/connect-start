import mongoose from "mongoose";

const Schema = mongoose.Schema;

const investorSchema = new Schema({
  founder: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  name: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
  },

  logo: {
    type: String,
    required: true,
  },

  website: {
    type: String,
  },

  team: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export const Investor = mongoose.model("Investor", investorSchema);
