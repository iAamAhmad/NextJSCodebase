import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div>
      <Link href={"/"} className='bg-slate-300 p-1'>
        Go Back To Home
      </Link>

      <p>Blog Page!</p>
    </div>
  );
};

export default Blog;
