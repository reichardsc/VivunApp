import React from "react";

const Product = ({ index, product }) => {
  return (
    <div>
      <div title={product.name}>
        {product.name}
      </div>
      <div>
        <div>{product.price}</div>
      </div>
    </div>
  );
};

export default Product;
