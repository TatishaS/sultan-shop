import React, { FC } from "react";

type CategoriesProps = {
  value: string | null;
  handleChangeCategory: (name: string) => void;
};

export const categories = [
  "Уход за телом",
  "Уход за руками",
  "Уход за ногами",
  "Уход за лицом",
];

const Categories: FC<CategoriesProps> = ({ handleChangeCategory, value }) => {
  return (
    <div className="catalog__categories categories">
      <ul className="categories__list">
        {categories.map((cat, idx) => (
          <li
            className={
              cat === value ? "categories__item active" : "categories__item"
            }
            key={idx}
            onClick={() => handleChangeCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
