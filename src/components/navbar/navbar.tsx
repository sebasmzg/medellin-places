"use client";

import Link from "next/link";
import Links from "./links/links";

const NavBar = () => {
  return (
    <div>
      <div>Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default NavBar;
