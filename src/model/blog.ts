import { Schema, model } from "mongoose";

export default interface IBlog {
  title: string;
  content: string;
  imageUrl: string;
  postDate: Date;
  tags?: string[];
}

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, required: true },
    postDate: { type: Date, default: Date.now },
    tags: [{ type: String, require: false }],
  },
  { timestamps: true }
);

export const Blog = model<IBlog>("Blog", blogSchema);
