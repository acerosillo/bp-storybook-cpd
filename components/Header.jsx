import React from "react";
import Link from "next/link";

import styles from "../styles/Header.module.scss";


const Header = () => {
  return (
    <>
      <ul className={styles.menu}>
        <li className={styles.menuitem}>
          <Link href="/page-a">
            <a>Page 1</a>
          </Link>
        </li>
        <li className={styles.menuitem}>
          <Link href="/page-b">
            <a>Page 2</a>
          </Link>
        </li>
        <li className={styles.menuitem}>
          <Link href="/page-c">
            <a>Page 3</a>
          </Link>
        </li>
        <li className={styles.menuitem}>
          <Link href="/news">
            <a>News</a>
          </Link>
        </li>
        <li className={styles.menuitem}>
          <Link href="/gallery">
            <a>Gallery</a>
          </Link>
        </li>
        <li className={styles.menuitem}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className={styles.menuitem}>
          <Link href="/information">
            <a>Information</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
