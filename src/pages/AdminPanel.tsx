import React, { useState } from "react";
import { FC } from "react";

import { fetchProducts, setProductsSorted } from "../redux/products/slice";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { useParams } from "react-router-dom";
import Product from "./Product";
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
import AdminProductCard from "../components/AdminProductCard";
import { deleteAdminItem, setAdminItems } from "../redux/admin/slice";

const AdminPanel: FC = () => {
  const dispatch = useAppDispatch();
  const { products, error, status } = useAppSelector((state) => state.products);
  const { adminItems } = useAppSelector((state) => state.admin);
  const { searchValue } = useAppSelector((state) => state.filter);
  const [currentPage, setCurrentPage] = useState<number>(1);

  React.useEffect(() => {
    if (adminItems.length === 0) {
      console.log("Если в админке пусто");
      dispatch(fetchProducts());
      status === "success" && dispatch(setAdminItems(products));
    }
    console.log(adminItems);
  }, []);

  /* Search */
  const handleClearSearch = () => {
    dispatch(setSearchValue(""));
  };

  const handleClickDeleteItem = (id: number) => {
    dispatch(deleteAdminItem(id));
  };

  /* Pagination */
  /*  const productsPerPage = 12;
  const pagesTotal = Math.ceil(adminItems.length / productsPerPage);

  const lastProductToShowIndex = productsPerPage * currentPage;
  const firstProductToShowIndex = lastProductToShowIndex - productsPerPage;
  const currentItems = adminItems.slice(
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

  const items = currentItems; */

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
            </div>

            <div className="catalog__inner">
              <Filters />
              <div className="catalog__products-wrapper">
                <section className="products">
                  {adminItems?.map((product: any) => (
                    <AdminProductCard
                      key={product.id}
                      {...product}
                      handleClickDeleteItem={handleClickDeleteItem}
                    />
                  ))}
                  {status === "loading" && <h2>Идет загрузка...</h2>}
                  {status === "error" && <h2>Произошла ошибка</h2>}
                </section>
                {/*                 <Pagination
                  pagesTotal={pagesTotal}
                  currentPage={currentPage}
                  handlePageNext={handlePageNext}
                  handlePagePrev={handlePagePrev}
                  handleSwitchPage={handleSwitchPage}
                /> */}
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

export default AdminPanel;
