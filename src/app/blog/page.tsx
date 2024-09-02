import { getPosts } from "@/lib/data";
import styles from "./blog.module.css";
import PostList from "@/components/post/postList/postList";
/* const getData= async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if(!res.ok){
    throw new Error('Something went wrong')
  }
  return res.json()
} */

const BlogPage = async () => {
  
  const post = await getPosts();

  return (
    <div className={styles.container}>
      <PostList posts={post} />
    </div>
  );
};

export default BlogPage;
