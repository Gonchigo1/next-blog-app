import connectToDb from "@/db";
import { Blog } from "@/model/blog";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddBlogPost = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  imageUrl: Joi.string().required(),
  postDate: Joi.date().required(),
  tags: Joi.array(),
});

export async function post(req: Request) {
  try {
    await connectToDb();
    const extractBlogPost = await req.json();
    const { title, content, imageUrl, postDate, tags } = extractBlogPost;
    const { error } = AddBlogPost.validate({
      title,
      content,
      imageUrl,
      postDate,
      tags,
    });

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const newBlogPost = await Blog.create(extractBlogPost);

    if (newBlogPost) {
      return NextResponse.json({
        success: true,
        message: "Blog post added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Validated blog post data failed to be added to database ",
      });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      success: false,
      message: "Failed to add a blog post",
    });
  }
}
