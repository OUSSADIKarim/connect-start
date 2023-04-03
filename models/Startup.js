import mongoose from "mongoose";

const Schema = mongoose.Schema;

const startupSchema = new Schema({
  founder: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  name: {
    type: String,
    required: true,
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

  investors: [
    {
      type: Schema.Types.ObjectId,
      ref: "Investor",
    },
  ],
});

export const Startup = mongoose.model("Startup", startupSchema);
