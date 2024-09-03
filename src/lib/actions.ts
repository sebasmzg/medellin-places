"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDB } from "./services";
import { signIn, signOut } from "../../auth";

//add a new post to db
export const addPost = async (formData: FormData) => {
  const { title, description, img, userId, slug } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const newPost = new Post({
      title,
      description,
      img,
      userId,
      slug,
      createdAt: new Date(),
    });

    await newPost.save();
    console.log("Post added successfully", newPost);
    revalidatePath("/blog");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add post");
  }
};

//delete a post from db
export const deletePost = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    const deletedPost = await Post.findByIdAndDelete(id);
    console.log("Post deleted successfully", deletedPost);
    revalidatePath("/blog");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete post");
  }
};

//update a post in db
export const updatePost = async (formData: FormData) => {
    const { id, title, description, img, userId, slug } =
        Object.fromEntries(formData);
    
    try {
        connectToDB();
    
        const updatedPost = await Post.findByIdAndUpdate(id, {
            title,
            description,
            img,
            userId,
            slug,
            updatedAt: new Date(),
        }, { new: true });
        console.log("Post updated successfully", updatedPost);
        revalidatePath("/blog");
    } catch (error) {
        console.error(error);
        throw new Error("Failed to update post");
    }
}

//github login
export const handleGithubLogin = async () => {
  await signIn("github");
}

//github logout
export const handleLogout = async () => {
  await signOut();
  console.log("Logged out");
}