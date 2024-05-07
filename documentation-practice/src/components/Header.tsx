import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className='flex justify-center gap-2'>
        <Link href={"/"} className='bg-slate-100 p-2 rounded-xl'>
          Home
        </Link>
       
        <Link href={"/about"} className='bg-slate-100 p-2 rounded-xl'>
          About
        </Link>
        <Link href={"/profile"} className='bg-slate-100 p-2 rounded-xl'>
          Profile
        </Link>
        <Link href={"/products"} className='bg-slate-100 p-2 rounded-xl'>
          Products
        </Link>
        <Link href={"/blog"} className='bg-slate-100 p-2 rounded-xl'>
          Blog
        </Link>
       
      </div>
    </div>
  );
};

export default Header;
