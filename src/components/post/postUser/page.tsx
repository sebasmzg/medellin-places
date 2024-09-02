import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

const PostUser = ({ userId = "" }: { userId?: string }) => {
  const user = getUser(userId);
  return (
    <div className={styles.container}>
      <span className={styles.detailTitle}>Author:</span>
      <span className={styles.detailTitle}>{user?.name}</span>
    </div>
  );
};

export default PostUser;
