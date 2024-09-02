import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

const PostUser = async ({ userId = "" }: { userId?: string }) => {
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img || "/assets/img/noavatar.png"}
        alt="avatar"
        height={50}
        width={50}
      />
      <div className={styles.texts}>
        <span className={styles.detailTitle}>Author:</span>
        <span className={styles.detailTitle}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
