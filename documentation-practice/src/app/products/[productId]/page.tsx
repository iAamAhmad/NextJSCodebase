import React from "react";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return <div>Detail About Product {params.productId}</div>;
};

export default ProductDetails;
