import Image from "next/image";
import styles from "./singlePost.module.css";
import { getPost } from "@/lib/data";
import PostUser from "@/components/post/postUser/page";
import { Suspense } from "react";

export const generateMetadata = async ({ params }: { params: any }) => {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post not found",
      description: "The post you are looking for does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.description || "A detailed post about something interesting.",
  };
};

const SinglePostPage = async ({ params }: { params: any }) => {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={post?.img || ""}
          alt={post?.title || "post image"}
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post?.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published:</span>
            <span className={styles.detailTitle}>
              {post?.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post?.description}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
