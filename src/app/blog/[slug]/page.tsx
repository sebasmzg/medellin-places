import Image from "next/image";
import styles from "./singlePost.module.css";
import { PostCardProps } from "@/app/models/postCardProps";
import { getPost } from "@/lib/data";
import PostUser from "@/components/post/postUser/page";
import { Suspense } from "react";

const SinglePostPage = async ({ params }:{params:any}) => {
  const { slug } = params;

  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post?.imageSrc ?? ""} alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="/assets/img/noavatar.png"
            alt="avatar"
            height={50}
            width={50}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post?.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published:</span>
            <span className={styles.detailTitle}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          {post?.description}
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
