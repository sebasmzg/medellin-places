"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }: { item: any }) => {
  const pathName = usePathname();

  return (
    // Create a Link component with the specified path
    <Link
      href={item.path}
      // Add the "container" class from the styles module
      // Add the "active" class if the current path matches the item's path
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
