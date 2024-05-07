import React from "react";

const ProductDetails = ({ params }: { params: { reviewId: string } }) => {
  return <div>Review About Product {params.reviewId}</div>;
};

export default ProductDetails;
