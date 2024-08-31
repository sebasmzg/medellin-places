"use client";

import styles from "./navbar.module.css";
import Links from "./links/links";
import Link from "next/link";

// Define the NavBar component
const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Urban Escapes</Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default NavBar; // Export the NavBar component
