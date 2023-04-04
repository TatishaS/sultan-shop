import React, { FC } from "react";

type Props = {};

export const categories = [
  "Уход за телом",
  "Уход за руками",
  "Уход за ногами",
  "Уход за лицом",

  "Уход за волосами",
  "Средства для загара",
  "Средства для бритья",
  "Подарочные наборы",
  "Гигиеническая продукция",
  "Гигиена полости рта",
  "Бумажная продукция",
];

const Categories: FC = (props: Props) => {
  return (
    <div className="catalog__categories categories">
      <ul className="categories__list">
        {categories.map((cat, idx) => (
          <li className="categories__item" key={idx}>
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
