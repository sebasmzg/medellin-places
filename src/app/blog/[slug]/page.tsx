import Image from "next/image";
import styles from "./singlePost.module.css";
import { PostCardProps } from "@/app/models/postCardProps";

const image = {
  src: "/assets/img/post1.jpg",
  alt: "post1",
};

const post: PostCardProps = {
  title: "Title",
  description: "Description",
  link: "",
  imageSrc: image.src,
};

const SinglePostPAge = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={post.imageSrc}
          alt={image.alt}
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="/assets/img/noavatar.png"
            alt="avatar"
            height={50}
            width={50}
          />
            <div className={styles.detailText}>
                <span className={styles.detailTitle}>Author:</span>
                <span className={styles.detailTitle}>Pacho Perez</span>
            </div>
            <div className={styles.detailText}>
                <span className={styles.detailTitle}>Published:</span>
                <span className={styles.detailTitle}>01.01.2024</span>
            </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quam
          excepturi odio rerum magni. Sunt dignissimos voluptas modi voluptatum
          molestias at reprehenderit eaque ex, esse magnam ratione, vel tempore
          aut. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error distinctio praesentium at nihil quae nostrum animi impedit aut laborum, ut, quod, quidem temporibus cum fugit nobis doloribus ab quisquam vitae.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPAge;
