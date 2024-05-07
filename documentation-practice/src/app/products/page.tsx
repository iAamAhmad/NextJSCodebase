

import Link from "next/link";
import React from "react";

const FirstBlog = () => {
  const products = [
    { id: 1, name: "First Product" },
    { id: 2, name: "Second Product" },
    { id: 3, name: "Third Product" },
  ];
  return (
    <div>
      <Link href={"/"} className='bg-slate-300 p-1'>
        Go Back To Home
      </Link>
      {products.map((product) => (
        <p key={product.id}>
          <Link href={`/products/${product.id}`}>{product.name} Detail</Link>
        </p>
      ))}
    </div>
  );
};

export default FirstBlog;
