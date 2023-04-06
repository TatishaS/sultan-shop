import React from "react";
import { FC } from "react";

import { fetchProducts } from "../redux/products/slice";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { useParams } from "react-router-dom";
import Product from "./Product";
import ProductCard from "../components/ProductCard";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  let params = useParams();
  const productId = params.id;
  const { products, status, error } = useAppSelector((state) => state.products);

  const getProducts = async () => {
    try {
      await dispatch(fetchProducts());
    } catch (error) {
      console.error(error);
      alert("ОШИБКА:" + error);
    }
  };
  React.useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <div className="container">
      <div className="catalog">
        <div className="wrapper">
          <div className="catalog__title-wrapper">
            <h1 className="catalog__title page-title">Косметика и гигиена</h1>
            <Sort />
          </div>
          <Categories />
          <div className="catalog__inner">
            <Filters />
            <div className="catalog__products-wrapper">
              <section className="products">
                {status === "success" &&
                  products?.map((product: any) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                {status === "loading" && <h2>Идет загрузка...</h2>}
                {status === "error" && <h2>Произошла ошибка</h2>}
              </section>
              <Pagination />
              <p className="catalog__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                interdum ut justo, vestibulum sagittis iaculis iaculis. Quis
                mattis vulputate feugiat massa vestibulum duis. Faucibus
                consectetur aliquet sed pellentesque consequat consectetur
                congue mauris venenatis. Nunc elit, dignissim sed nulla
                ullamcorper enim, malesuada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
function addToCart(id: string): any {
  throw new Error("Function not implemented.");
}
