import React, { useState } from "react";
import { FC } from "react";
import Select, { OnChangeValue } from "react-select";

import { fetchProducts } from "../redux/products/slice";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import Pagination from "../components/Pagination";
import { setSearchValue } from "../redux/filter/slice";
import Breadcrumbs from "../components/Breadcrumbs";
import AdminProductCard from "../components/AdminProductCard";
import {
  addNewAdminItem,
  deleteAdminItem,
  deleteAllAdminItems,
  setAdminItems,
} from "../redux/admin/slice";
import { categories } from "../components/Categories";
import { AddNewItemForm, IOption } from "../types";
import EditModal from "../components/EditModal";

export const selectOptions: IOption[] = categories.map((item) => {
  return {
    value: item,
    label: item,
  };
});

const AdminPanel: FC = () => {
  const dispatch = useAppDispatch();

  const [fields, setFields] = useState<AddNewItemForm>({
    id: 0,
    title: "",
    imageUrl: "",
    sizeType: "weight",
    size: "",
    barcode: "",
    price: 0,
    producer: "",
    brand: "",
    description: "",
    category: [],
  });
  const [showModal, setShowModal] = useState(false);
  const [editItemId, setEditItemId] = React.useState<number>(0);
  const { products, error, status } = useAppSelector((state) => state.products);
  const { adminItems } = useAppSelector((state) => state.admin);
  const { searchValue } = useAppSelector((state) => state.filter);
  const [currentPage, setCurrentPage] = useState<number>(1);

  React.useEffect(() => {
    if (adminItems.length === 0) {
      dispatch(fetchProducts());
      status === "success" && dispatch(setAdminItems(products));
    }
  }, []);

  /* Handling form fields */
  const getSelectValue = () => {
    if (fields.category) {
      return selectOptions.filter(
        (opt) => fields.category.indexOf(opt.value) >= 0
      );
    } else {
      return [];
    }
  };
  const isRadioSelected = (value: string): boolean => fields.sizeType === value;

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      sizeType: event.currentTarget.value,
    });
  };

  const handleChangeSelect = (newValue: OnChangeValue<IOption, boolean>) => {
    setFields({
      ...fields,
      category: (newValue as IOption[]).map((option) => option.value),
    });
  };

  const handleChangeField = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  /* CRUD Operations */
  const handleClickDeleteItem = (id: number) => {
    dispatch(deleteAdminItem(id));
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllAdminItems());
  };

  const handleClickAddItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      fields.title &&
      fields.imageUrl &&
      fields.size &&
      fields.barcode &&
      fields.price &&
      fields.producer &&
      fields.brand &&
      fields.category &&
      fields.description
    ) {
      const newItem = {
        id: adminItems.length + 1,
        title: fields.title,
        imageUrl: fields.imageUrl,
        sizeType: fields.sizeType,
        size: fields.size,
        barcode: fields.barcode,
        price: fields.price,
        producer: fields.producer,
        brand: fields.brand,
        description: fields.description,
        category: fields.category,
      };

      try {
        dispatch(addNewAdminItem(newItem));
      } catch (error) {
        console.error(error);
        alert("ОШИБКА ПРИ ДОБАВЛЕНИИ ДАННЫХ" + error);
      }

      setFields({
        id: 0,
        title: "",
        imageUrl: "",
        sizeType: "weight",
        size: "",
        barcode: "",
        price: 0,
        producer: "",
        brand: "",
        description: "",
        category: [],
      });
    } else {
      alert("Заполните все поля");
    }
  };

  /* Edit modal handling*/
  const handleShowModal = (status: boolean) => {
    setShowModal(status);
  };
  const handleEditModal = (id: number) => {
    setEditItemId(id);
    setShowModal(true);
  };

  /* Search */
  const handleClearSearch = () => {
    dispatch(setSearchValue(""));
  };

  /* Pagination */
  const productsPerPage = 12;
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

  const items = currentItems;

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
              <div className="catalog__delete-all-wrapper">
                <button
                  className="catalog__delete-all-btn btn"
                  onClick={handleDeleteAll}
                >
                  Удалить все продукты
                </button>
              </div>
              <div className="catalog__products-wrapper">
                <form
                  className="catalog__add-form add-form"
                  onSubmit={handleClickAddItem}
                >
                  <label className="add-form__label" htmlFor="title">
                    Название:
                  </label>
                  <input
                    className="add-form__input"
                    type="text"
                    name="title"
                    id="title"
                    value={fields.title}
                    onChange={handleChangeField}
                  />

                  <label className="add-form__label" htmlFor="imageUrl">
                    Ссылка на изображение товара:
                  </label>
                  <input
                    className="add-form__input"
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    value={fields.imageUrl}
                    onChange={handleChangeField}
                  />

                  <fieldset className="add-form__fieldset">
                    <p className="add-form__title">Тип упаковки:</p>
                    <ul className="add-form__list-radio">
                      <li>
                        <input
                          type="radio"
                          name="sizeType"
                          id="weight"
                          value="weight"
                          onChange={handleChangeRadio}
                          checked={isRadioSelected("weight")}
                        />
                        <label htmlFor="weight">Weight</label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="sizeType"
                          id="volume"
                          value="volume"
                          onChange={handleChangeRadio}
                          checked={isRadioSelected("volume")}
                        />
                        <label htmlFor="volume">Volume</label>
                      </li>
                    </ul>
                  </fieldset>

                  <label className="add-form__label " htmlFor="size">
                    Вес или объем:
                  </label>
                  <input
                    className="add-form__input add-form__input--weight"
                    type="text"
                    name="size"
                    id="size"
                    value={fields.size}
                    onChange={handleChangeField}
                  />

                  <label className="add-form__label" htmlFor="barcode">
                    Штрихкод:
                  </label>
                  <input
                    className="add-form__input"
                    type="text"
                    name="barcode"
                    id="barcode"
                    value={fields.barcode}
                    onChange={handleChangeField}
                  />

                  <label className="add-form__label" htmlFor="price">
                    Цена:
                  </label>
                  <input
                    className="add-form__input add-form__input--price"
                    type="text"
                    name="price"
                    id="price"
                    value={fields.price}
                    onChange={handleChangeField}
                  />

                  <label className="add-form__label" htmlFor="producer">
                    Производитель:
                  </label>
                  <input
                    className="add-form__input"
                    type="text"
                    name="producer"
                    id="producer"
                    value={fields.producer}
                    onChange={handleChangeField}
                  />

                  <label className="add-form__label" htmlFor="brand">
                    Бренд:
                  </label>
                  <input
                    className="add-form__input"
                    type="text"
                    name="brand"
                    id="brand"
                    value={fields.brand}
                    onChange={handleChangeField}
                  />

                  <Select
                    className="add-form__select"
                    options={selectOptions}
                    isMulti
                    placeholder="Категория товара..."
                    name="category"
                    value={getSelectValue()}
                    onChange={handleChangeSelect}
                  />

                  <label
                    className="add-form__textarea-label"
                    htmlFor="description"
                  >
                    Описание товара:
                  </label>

                  <textarea
                    placeholder="Описание..."
                    name="description"
                    className="add-form__textarea"
                    rows={8}
                    id="description"
                    value={fields.description}
                    onChange={handleChangeField}
                  ></textarea>
                  <button className="add-form__btn btn" type="submit">
                    Добавить товар
                  </button>
                </form>
                <section className="products">
                  {adminItems.length === 0 && <h2>Продукты отсутствуют</h2>}
                  {items?.map((product: any) => (
                    <AdminProductCard
                      key={product.id}
                      {...product}
                      handleClickDeleteItem={handleClickDeleteItem}
                      handleEditModal={handleEditModal}
                    />
                  ))}

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
            {showModal && (
              <EditModal
                editId={editItemId}
                handleShowModal={handleShowModal}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
