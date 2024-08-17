import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      types: String, // cloudinary
      required: true,
    },
    thumbnail: {
      types: String,
      required: true,
    },
    title: {
      types: String,
      required: true,
    },
    description: {
      types: String,
      required: true,
    },
    duration: {
      types: Number, //cloudinary url
      required: true,
    },
    views: {
      types: Number, // cloudinary
      default: 0,
    },
    isPublished: {
      types: Boolean, // cloudinary
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", userSchema);
