import React from "react";
import Link from "next/link";

const Information = () => {
  return (
    <>
      <h1>Information</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};

export default Information;
