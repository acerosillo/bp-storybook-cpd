import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/Page-a">
            <a>API Page</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/Page-b">
            <a>Page 2</a>
          </Link>
        </li> */}
        {/* <li>
          <Link href="/Page-c">
            <a>Page 3</a>
          </Link>
        </li>
        <li>
          <Link href="/News">
            <a>News</a>
          </Link>
        </li>
        <li>
          <Link href="/Gallery">
            <a>Gallery</a>
          </Link>
        </li>
        <li>
          <Link href="/About">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/Information">
            <a>Information</a>
          </Link>
        </li> */}
      </ul>
    </>
  );
};

export default Footer;
