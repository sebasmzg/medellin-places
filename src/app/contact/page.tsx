import Image from "next/image";
import styles from "./contact.module.css";
import { Metadata } from "next";

const imgPathContact = "/assets/img/contact.png";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact us",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={imgPathContact} alt="contact image" fill />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder="Name and surname" />
          <input type="email" placeholder="Email adress" />
          <input type="tel" placeholder="Phone number" />
          <textarea cols={30} rows={10} placeholder="Mesaage"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
