"use client"; // This file will be processed as client side code

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/actions";

//links to be displayed in the navbar and their paths
const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

//Links component

//state to manage the mobile menu
const Links = ({session}: {session: any}) => {
  const [open, setOpen] = useState(false);

  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {/* Render each link in the navbar */}
        {links.map((link) => {
          return <NavLink item={link} key={link.title} />;
        })}
        {/* Render admin link and logout button if user is logged in */}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          // Render login link if user is not logged in
          <NavLink item={{ title: "login", path: "/login" }} />
        )}
      </div>
      {/* Render mobile menu button */}
      <Image className={styles.menuButton} src="/assets/img/menu.png" alt="menu" width={30} height={30} onClick={()=>setOpen((prev)=>!prev)}/>
      {/* Render mobile links if mobile menu is open */}
      {open && (
        <div className={styles.mobileLinks}>
          {/* Render each link in the mobile menu */}
          {links.map((link) => {
            return <NavLink item={link} key={link.title} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Links;
