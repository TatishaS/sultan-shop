import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <Link to={`/products/2`}>
      <div>Карточка товара</div>
    </Link>
  );
};

export default ProductCard;
