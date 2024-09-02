import Image from "next/image";
import styles from "./about.module.css";
import { Metadata } from "next";
const aboutImgPath = "/assets/img/pngwing.com.png";

export const metadata: Metadata = {
  title: "About",
  description: "About us",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Us</h2>
        <h1 className={styles.title}>Welcome to Urban Escapes</h1>
        <p className={styles.description}>
          Your go-to resource for discovering the hidden natural spots right
          outside your city. Whether you're seeking a peaceful park, a scenic
          trail, or a breathtaking waterfall, we make it easy for you to find
          the perfect escape into nature, all within a short drive.
        </p>
      </div>
      <div className={styles.imgContainer}>
        <Image src={aboutImgPath} alt="two people trekking" fill />
      </div>
    </div>
  );
};

export default AboutPage;
