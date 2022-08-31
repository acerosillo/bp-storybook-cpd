import React from "react";
import Link from "next/link";

import styles from "../styles/Header.module.scss";


const Header = () => {
  return (
    <>
      <ul className={styles.menu}>
        <li className={styles.menuitem}>
          <Link href="/Page-a">
            <a>API Page</a>
          </Link>
        </li>
        {/* <li className={styles.menuitem}>
          <Link href="/Page-b">
            <a>Page 2</a>
          </Link>
        </li> */}
        {/* <li className={styles.menuitem}>
          <Link href="/Page-c">
            <a>Page 3</a>
          </Link>
        </li>
        <li className={styles.menuitem}>
          <Link href="/News">
            <a>News</a>
          </Link>
        </li>
        <li className={styles.menuitem}>
          <Link href="/Gallery">
            <a>Gallery</a>
          </Link>
        </li>
        <li className={styles.menuitem}>
          <Link href="/About">
            <a>About</a>
          </Link>
        </li>
        <li className={styles.menuitem}>
          <Link href="/Information">
            <a>Information</a>
          </Link>
        </li> */}
      </ul>
    </>
  );
};

export default Header;
