"use client";

import axios from "axios";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
}
const FirstBlog = () => {
  function truncateDescription(description: string) {
    const maxWords = 12;
    const words = description.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "";
    } else {
      return description;
    }
  }
  function truncateTitle(description: string) {
    const maxWords = 3;
    const words = description.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "";
    } else {
      return description;
    }
  }
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log("The Response From API", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className='flex flex-wrap'>
      {products.map((product) => (
        <div
          key={product.id}
          className='bg-slate-100 border w-48 my-2 mx-2 flex-grow'>
          <Image
            src={product.image}
            alt={product.title}
            width={100}
            height={100}
            className='object-fill h-48 w-96'
          />
          <div className='p-2 '>
            <p className='font-bold'>{truncateTitle(product.title)}</p>
            <p>{truncateDescription(product.description)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FirstBlog;
