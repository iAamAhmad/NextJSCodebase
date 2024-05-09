import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
 // Assuming you have a rootReducer
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "@/lib/redux/reducers/user/1_productsReducer";
import { AppDispatch } from "@/lib/redux/store";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
}

const FirstBlog = () => {
  const dispatch = useDispatch.withTypes<AppDispatch>();
  const products = useSelector((state:any) => state.products.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleDeleteProduct = async (productId: number) => {
    await dispatch(deleteProduct(productId));
  };

  const handleAddProduct = async () => {
    await dispatch(addProduct());
  };

  const handleUpdateProduct = async (productId: number) => {
    await dispatch(updateProduct(productId));
  };

  return (
    <div className='flex flex-wrap'>
      <button
        className='bg-green-500 text-white p-4'
        onClick={handleAddProduct}>
        Add New Product
      </button>
      {products.map((product: Product) => (
        <div
          key={product.id}
          className='bg-slate-100 border w-48 my-2 mx-2 flex-grow'>
          {/* Your UI code */}
          <button
            className='p-2 bg-green-800 text-white rounded-lg mb-2 mr-2'
            onClick={() => handleUpdateProduct(product.id)}>
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

export default FirstBlog;
