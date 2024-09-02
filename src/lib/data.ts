import { Post, User } from "./models";
import { connectToDB } from "./services";

export const getPosts = async () => {
  try {
    await connectToDB();
    const posts = await Post.find().exec();
    return posts;
  } catch (error) {
    console.error("Error getting posts", error);
    throw new Error("Error getting posts");
  }
};

export const getPost = async (slug: string) => {
  try {
    await connectToDB();
    const post = await Post.findOne({ slug }).exec();
    if (!post) {
      throw new Error("Post not found");
    }
    return post;
  } catch (error) {
    console.error("Error getting post", error);
    throw new Error("Error getting post");
  }
};

export const getUser = async (id: string) => {
  try {
    await connectToDB();
    const user = await User.findById(id).exec();
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.error("Error getting user", error);
    throw new Error("Error getting user");
  }
};

export const getUsers = async () => {
  try {
    await connectToDB();
    const users = await User.find().exec();
    return users;
  } catch (error) {
    console.error("Error getting users", error);
    throw new Error("Error getting users");
  }
};
