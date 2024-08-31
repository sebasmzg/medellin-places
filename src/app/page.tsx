import Image from "next/image";
import styles from "./home.module.css";

const imgPathHero = "/assets/img/pngegg.png";

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Discover the hidden natural gems in your city
          </h1>
          <p className={styles.description}>
            Explore stunning waterfalls, scenic trails, and majestic hills that
            offer the perfect escape into nature.
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}>Learn more</button>
            <button className={styles.button}>Contact</button>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={imgPathHero}
            alt="duck walking"
            fill
            className={styles.heroImg}
          />
        </div>
      </div>
    </main>
  );
}
