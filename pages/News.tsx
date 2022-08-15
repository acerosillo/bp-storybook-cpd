import React from "react";
import Link from "next/link";

const News = () => {
  return (
    <>
      <h1>News</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};

export default News;
