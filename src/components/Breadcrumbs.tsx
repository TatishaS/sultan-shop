import React, { FC } from "react";

const Breadcrumbs: FC = () => {
  return (
    <nav className="breadcrumbs">
      <div className="container">
        <div className="wrapper">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="index.html">
                Главная
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link active">Косметика и гигиена</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
