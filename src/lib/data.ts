import { PostCardProps } from "@/app/models/postCardProps";
import {Post, User } from "./models";
import { connectToDB } from "./services";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async (): Promise<PostCardProps[]> => {
  try {
    await connectToDB();
    console.log("Conectado a la base de datos");
    const posts = await Post.find();
    console.log("Posts obtenidos:", posts);

    // Mapea los documentos de Mongoose a PostCardProps
    const mappedPosts: PostCardProps[] = posts.map(post => ({
      id: (post._id as string).toString(), //convertir ObjectId a string
      imageSrc: post.img || '', // Mapea 'img' a 'imageSrc'
      title: post.title,
      description: post.description,
      userId: post.userId,
      slug: post.slug
    }));

    return mappedPosts;
  } catch (error: any) {
    console.error("Error obteniendo posts:", error);
    throw new Error(`Error obteniendo posts: ${error.message}`);
  }
};

export const getPost = async (slug: string) => {
  
  try {
    await connectToDB();
    const post = await Post.findOne({slug});
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
  noStore();
  try {
    await connectToDB();
    const user = await User.findById(id);
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
    const users = await User.find();
    return users;
  } catch (error) {
    console.error("Error getting users", error);
    throw new Error("Error getting users");
  }
};
