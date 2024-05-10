"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import axios from "axios";
import { add } from "../store/productSlice";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
}

const ProductsPage = () => {
  const dispatch = useDispatch.withTypes<AppDispatch>();
  const [apiProducts, setApiProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data);
        setApiProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  function handleAddProduct(product: any) {
    dispatch(add(product));
  }
  return (
    <div className='flex flex-wrap'>
      <button
        className='bg-green-500 text-white p-4'
        onClick={handleAddProduct}>
        Add New Product
      </button>
      {apiProducts.map((product: Product) => (
        <div
          key={product.id}
          className='bg-slate-100 border w-48 my-2 mx-2 flex-grow'>
          {/* Your UI code */}
          <button
            className='p-2 bg-green-800 text-white rounded-lg mb-2 mr-2'
            onClick={() => handleUpdateProduct()}>
            Edit
          </button>
          <button
            className='p-2 bg-red-800 text-white rounded-lg mb-2'
            onClick={() => handleDeleteProduct(product.id)}>
            Delete
          </button>
         </div>
      ))}
    </div>
  );
};

export default ProductsPage;
