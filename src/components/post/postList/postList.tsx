import { PostListProps } from "@/app/models/postCardProps";
import PostCard from "../postCard/postCard";
import styles from "./postList.module.css";



const PostList = ({posts }:PostListProps) => {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          imageSrc={post.imageSrc}
          title={post.title}
          description={post.description}
          id={post.id}
          userId={post.userId}
          slug={post.slug}
        />
      ))}
    </div>
  );
};

export default PostList;