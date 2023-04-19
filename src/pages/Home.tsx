import React, { useState } from "react";
import { FC } from "react";

import {
  fetchProducts,
  setProducts,
  setProductsSorted,
} from "../redux/products/slice";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { useParams } from "react-router-dom";
import Product from "./Product";
import ProductCard from "../components/ProductCard";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import {
  setActiveCategory,
  setSearchValue,
  setSortBy,
} from "../redux/filter/slice";
import { IProductItem } from "../redux/products/types";
import Breadcrumbs from "../components/Breadcrumbs";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { products, status, error } = useAppSelector((state) => state.products);
  const { adminItems } = useAppSelector((state) => state.admin);
  const { activeCategory, sortBy, searchValue } = useAppSelector(
    (state) => state.filter
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  /* Pagination */
  const productsPerPage = 12;
  const pagesTotal = Math.ceil(products.length / productsPerPage);

  const lastProductToShowIndex = productsPerPage * currentPage;
  const firstProductToShowIndex = lastProductToShowIndex - productsPerPage;
  const currentProducts = products.slice(
    firstProductToShowIndex,
    lastProductToShowIndex
  );

  const handlePageNext = () => {
    currentPage < pagesTotal &&
      setCurrentPage((currentPage) => currentPage + 1);
  };
  const handlePagePrev = () => {
    currentPage > 1 && setCurrentPage((currentPage) => currentPage - 1);
  };
  const handleSwitchPage = (num: number) => {
    setCurrentPage(num);
  };

  /* Categories */
  const handleChangeCategory = (name: string) => {
    dispatch(setActiveCategory(name));
  };

  /* Search */
  const handleClearSearch = () => {
    dispatch(setSearchValue(""));
  };

  /* Getting data */
  const getProducts = async () => {
    try {
      await dispatch(fetchProducts());
    } catch (error) {
      console.error(error);
      alert("ОШИБКА:" + error);
    }
  };

  React.useEffect(() => {
    if (adminItems.length > 0) {
      dispatch(setProducts(adminItems));
    } else {
      getProducts();
    }
    dispatch(setSortBy("по умолчанию"));
  }, [searchValue]);

  React.useEffect(() => {
    dispatch(setProductsSorted(sortBy));
  }, [sortBy]);

  const filteredProducts = products.filter(
    (product) => activeCategory && product.category.includes(activeCategory)
  );

  const items = activeCategory ? filteredProducts : currentProducts;

  return (
    <>
      <Breadcrumbs />
      <div className="container">
        <div className="catalog">
          <div className="wrapper">
            <div className="catalog__title-wrapper">
              <h1 className="catalog__title page-title">Косметика и гигиена</h1>
              {searchValue ? (
                <button
                  className="catalog__clear-search-btn btn"
                  onClick={handleClearSearch}
                >
                  <span>Очистить поиск</span>
                </button>
              ) : null}
              <Sort sortBy={sortBy} />
            </div>
            <Categories
              value={activeCategory}
              handleChangeCategory={handleChangeCategory}
            />
            <div className="catalog__inner">
              <Filters
                value={activeCategory}
                handleChangeCategory={handleChangeCategory}
              />
              <div className="catalog__products-wrapper">
                <section className="products">
                  {status === "success" &&
                    items
                      ?.filter((item) =>
                        item.title
                          .toLowerCase()
                          .includes(searchValue.toLowerCase())
                      )
                      .map((product: any) => (
                        <ProductCard key={product.id} {...product} />
                      ))}
                  {status === "loading" && <h2>Идет загрузка...</h2>}
                  {status === "error" && <h2>Произошла ошибка</h2>}
                </section>
                <Pagination
                  pagesTotal={pagesTotal}
                  currentPage={currentPage}
                  handlePageNext={handlePageNext}
                  handlePagePrev={handlePagePrev}
                  handleSwitchPage={handleSwitchPage}
                />
                <p className="catalog__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam interdum ut justo, vestibulum sagittis iaculis iaculis.
                  Quis mattis vulputate feugiat massa vestibulum duis. Faucibus
                  consectetur aliquet sed pellentesque consequat consectetur
                  congue mauris venenatis. Nunc elit, dignissim sed nulla
                  ullamcorper enim, malesuada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
