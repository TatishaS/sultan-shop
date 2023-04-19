import React, { FC } from "react";
import arrowRight from "../assets/images/icon-arrow-right.svg";

type PaginationProps = {
  pagesTotal: number;
  currentPage: number;
  handlePagePrev: () => void;
  handlePageNext: () => void;
  handleSwitchPage: (num: number) => void;
};

const Pagination: FC<PaginationProps> = ({
  pagesTotal,
  currentPage,
  handlePagePrev,
  handlePageNext,
  handleSwitchPage,
}) => {
  const pageNumbers: any = [];

  for (let i = 1; i <= pagesTotal; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="catalog__pagination pagination">
      <a
        className="pagination__arrow pagination__arrow"
        onClick={handlePagePrev}
      >
        <img
          className="pagination__icon-arrow pagination__icon-arrow--left"
          src={arrowRight}
          alt="arrow icon"
        />
      </a>

      <ul className="pagination__list">
        {pageNumbers.map((num: any) => (
          <li
            className="pagination__list-item"
            key={num}
            onClick={() => handleSwitchPage(num)}
          >
            <a
              className={
                num === currentPage
                  ? "pagination__list-num active"
                  : "pagination__list-num"
              }
            >
              {num}
            </a>
          </li>
        ))}
      </ul>

      <a className="pagination__arrow" onClick={handlePageNext}>
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
