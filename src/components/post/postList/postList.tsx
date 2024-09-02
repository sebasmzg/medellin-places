import { PostListProps } from "@/app/models/postCardProps";
import PostCard from "../postCard/postCard";
import styles from "./postList.module.css";



const PostList = ({posts }:PostListProps) => {
  return (
    <div className={styles.container}>
      {posts.map((post, index) => (
        <PostCard
          key={index}
          imageSrc={post.imageSrc}
          title={post.title}
          description={post.description}
          id={post.id}
          userId={post.userId}
        />
      ))}
    </div>
  );
};

export default PostList;