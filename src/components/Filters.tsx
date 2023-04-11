import React from "react";
import { categories } from "./Categories";

const Filters = () => {
  return (
    <aside className="catalog__filters filters">
      <h2 className="filters__title">ПОДБОР ПО ПАРАМЕТРАМ</h2>
      <form className="filters__form">
        <div className="filters__price-block">
          <div className="filters__price-title">Цена ₸</div>
          <div className="filters__price-fields">
            <input
              type="number"
              className="filters__price-input filters__price-input--min"
              value="0"
              placeholder="0"
              id="min-price"
              name="minPrice"
            />

            <div className="filters__price-divider">-</div>

            <input
              type="number"
              className="filters__price-input filters__price-input--max"
              value="10000"
              placeholder="10000"
              id="max-price"
              name="maxPrice"
            />
          </div>
        </div>
        <fieldset className="filters__fieldset">
          <legend className="filters__legend">Производитель:</legend>
          <div className="filters__search-wrapper search">
            <input
              type="text"
              className="filters__search search__input"
              placeholder="Поиск..."
            />
            <button className="filters__search-btn search__btn"></button>
          </div>

          <ul className="filters__options">
            <li className="filters__option">
              <input
                className="visually-hidden filters__filter-input filters__filter-input-checkbox"
                id="Производитель1"
                type="checkbox"
                name="Производитель1"
                checked
              />
              <label className="filters__option-label" htmlFor="Производитель1">
                Производитель1{" "}
                <span className="filters__label-quantity">(66)</span>
              </label>
            </li>
            <li className="filters__option">
              <input
                className="visually-hidden filters__filter-input filters__filter-input-checkbox"
                id="Производитель2"
                type="checkbox"
                name="Производитель2"
              />
              <label className="filters__option-label" htmlFor="Производитель2">
                Производитель2
                <span className="filters__label-quantity">(44)</span>
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset className="filters__fieldset">
          <legend className="filters__legend">Бренд:</legend>
          <div className="filters__search-wrapper search">
            <input
              type="text"
              className="filters__search search__input"
              placeholder="Поиск..."
            />
            <button className="filters__search-btn search__btn"></button>
          </div>

          <ul className="filters__options">
            <li className="filters__option">
              <input
                className="visually-hidden filters__filter-input filters__filter-input-checkbox"
                id="Бренд1"
                type="checkbox"
                name="Бренд1"
                checked
              />
              <label className="filters__option-label" htmlFor="Бренд1">
                Бренд1
                <span className="filters__label-quantity">(12)</span>
              </label>
            </li>
            <li className="filters__option">
              <input
                className="visually-hidden filters__filter-input filters__filter-input-checkbox"
                id="Бренд2"
                type="checkbox"
                name="Бренд2"
              />
              <label className="filters__option-label" htmlFor="Бренд2">
                Бренд2
                <span className="filters__label-quantity">(4)</span>
              </label>
            </li>
          </ul>
        </fieldset>
        <div className="filters__btns">
          <button className="filters__btn btn" type="submit">
            Показать
          </button>
          <button
            className="filters__btn-clear btn--clear btn"
            type="submit"
          ></button>
        </div>
      </form>
      <ul className="filters__categories-list">
        {categories.map((cat, idx) => (
          <li className="filters__categories-item" key={idx}>
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Filters;
