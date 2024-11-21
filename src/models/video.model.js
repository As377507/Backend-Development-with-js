// videoSchema.js
import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // cloudinary
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, // cloudinary url
      required: true,
    },
    views: {
      type: Number, // cloudinary
      default: 0,
    },
    isPublished: {
      type: Boolean, // cloudinary
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User", // Make sure this points to the correct 'User' model
    },
  },
  {
    timestamps: true,
  }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema, "videos"); // Ensure 'videos' is the correct collection name
