import { getPosts } from "@/lib/data";
import styles from "./blog.module.css";
import PostList from "@/components/post/postList/postList";
import { Metadata } from "next";
/* const getData= async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if(!res.ok){
    throw new Error('Something went wrong')
  }
  return res.json()
} */

  export const metadata: Metadata = {
    title: "Blog",
    description: "Our blog",
  };
  
  const BlogPage = async () => {
    try {
      const posts = await getPosts();
      return (
        <div className={styles.container}>
          <PostList posts={posts} />
        </div>
      );
    } catch (error) {
      console.error("Error al cargar los posts:", error);
      return <p>Failed to load posts.</p>;
    }
  };

export default BlogPage;
