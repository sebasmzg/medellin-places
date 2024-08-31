import styles from "./blog.module.css";
import PostList from "@/components/post/postList/postList";

const post = [
  {
    imageSrc: "/assets/img/post1.jpg",
    title: "Title 1",
    description: "Description 1",
    link: "/blog/post1",
  },
  {
    imageSrc: "/assets/img/post2.jpg",
    title: "Title 2",
    description: "Description 2",
    link: "/blog/post2",
  },
  {
    imageSrc: "/assets/img/post3.jpg",
    title: "Title 3",
    description: "Description 3",
    link: "/blog/post3",
  },
  {
    imageSrc: "/assets/img/post4.jpg",
    title: "Title 4",
    description: "Description 4",
    link: "/blog/post4",
  },
];

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <PostList posts={post} />
    </div>
  );
};

export default BlogPage;
