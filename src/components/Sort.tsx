import React, { FC } from "react";
import arrow from "../assets/images/icon-arrow.svg";
import { useAppDispatch } from "../utils/hooks";
import { setSortBy } from "../redux/filter/slice";

type SortProps = {
  sortBy: string;
};

export const sort = [
  { sortType: "nameAsc", sortName: "по названию (А - Я)", arrowType: "asc" },
  { sortType: "nameDesc", sortName: "по названию (Я - А)", arrowType: "desc" },
  {
    sortType: "priceAsc",
    sortName: "по цене (сначала дешевые)",
    arrowType: "asc",
  },
  {
    sortType: "priceDesc",
    sortName: "по цене (сначала дорогие)",
    arrowType: "desc",
  },
  {
    sortType: "defaultAsc",
    sortName: "по умолчанию",
    arrowType: "asc",
  },
];

const Sort: FC<SortProps> = ({ sortBy }) => {
  const dispatch = useAppDispatch();
  const [openSortPopup, setOpenSortPopup] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleSortPopup = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpenSortPopup(false);
      }
    };
    document.body.addEventListener("click", handleSortPopup);

    return () => {
      document.body.removeEventListener("click", handleSortPopup);
    };
  }, []);

  const handleChangeSort = (name: string) => {
    dispatch(setSortBy(name));
  };
  return (
    <div className="catalog__sort sort" ref={sortRef}>
      <div className="sort__label">
        <b>Сортировка:</b>
        <p onClick={() => setOpenSortPopup(!openSortPopup)}>
          {sortBy.length > 20 ? `${sortBy.substring(0, 15)}...` : sortBy}
          <img
            src={arrow}
            className={
              sortBy === "по названию (А - Я)" ||
              sortBy === "по цене (сначала дешевые)"
                ? "sort__item-arrow"
                : "sort__item-arrow sort__item-arrow--desc"
            }
          />
        </p>
      </div>
      {openSortPopup && (
        <div className="sort__popup">
          <ul>
            {sort.map((item) => (
              <li
                className="sort__popup-item active"
                key={item.sortType}
                onClick={() => handleChangeSort(item.sortName)}
              >
                {item.sortName}
                <img
                  src={arrow}
                  alt={item.sortName}
                  className={
                    item.arrowType === "desc"
                      ? "sort__item-arrow"
                      : "sort__item-arrow sort__item-arrow--desc"
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
