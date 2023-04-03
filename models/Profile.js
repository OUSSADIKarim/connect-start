import mongoose from "mongoose";

const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    bio: {
      type: String,
      maxlength: 200,
    },

    address: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    website: {
      type: String,
    },

    socials: {
      twitter: {
        type: String,
      },
      facebook: {
        type: String,
      },
      instagram: {
        type: String,
      },
      linkedin: {
        type: String,
      },
    },
  },

  { timestamps: true }
);

export const Profile = mongoose.model("Profile", profileSchema);
