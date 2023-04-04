import React from "react";
import arrowRight from "../assets/images/icon-arrow-right.svg";

const Pagination = () => {
  return (
    <div className="catalog__pagination pagination">
      <a className="pagination__arrow pagination__arrow" href="#">
        <img
          className="pagination__icon-arrow pagination__icon-arrow--left"
          src={arrowRight}
          alt="arrow icon"
        />
      </a>

      <ul className="pagination__list">
        <li className="pagination__list-item">
          <a className="pagination__list-num active" href="#">
            1
          </a>
        </li>
        <li className="pagination__list-item">
          <a className="pagination__list-num" href="#">
            2
          </a>
        </li>
      </ul>

      <a className="pagination__arrow" href="#">
        <img
          className="pagination__icon-arrow"
          src={arrowRight}
          alt="arrow icon"
        />
      </a>
    </div>
  );
};

export default Pagination;
