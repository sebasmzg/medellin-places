import styles from "./footer.module.css";

const Footer = () => {
return (
    <div className={styles.container}>
        <div className={styles.logo}>Urban Escapes</div>
        <div className={styles.text}>© All rights are reserved</div>
    </div>
);
};

export default Footer;