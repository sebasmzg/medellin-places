"use client";

import styles from "./navbar.module.css";
import Links from "./links/links";
import Link from "next/link";
import { auth } from "../../../auth";

// Define the NavBar component
const NavBar = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Urban Escapes</Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default NavBar; // Export the NavBar component
