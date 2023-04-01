import React from "react";
import { FC } from "react";

import { fetchProducts } from "../redux/products/slice";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { useParams } from "react-router-dom";
import Product from "./Product";
import ProductCard from "../components/ProductCard";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  let params = useParams();
  const productId = params.id;
  const { products, status, error } = useAppSelector((state) => state.products);

  const getProducts = () => {
    try {
      dispatch(fetchProducts());
    } catch (error) {
      console.error(error);
      alert("ОШИБКА:" + error);
    }
  };
  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products?.map((product) => (
        <ProductCard />
      ))}
    </>
  );
};

export default Home;
