import React from "react";
import Link from "next/link";

const Gallery = () => {
  return (
    <>
      <h1>Gallery</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};

export default Gallery;
