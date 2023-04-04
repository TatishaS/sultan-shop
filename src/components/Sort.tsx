import React, { FC } from "react";
import arrow from "../assets/images/icon-arrow.svg";

type Props = {};

const Sort: FC = () => {
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
  return (
    <div className="catalog__sort sort" ref={sortRef}>
      <div className="sort__label">
        <b>Сортировка:</b>
        <span onClick={() => setOpenSortPopup(!openSortPopup)}>Название</span>
      </div>
      {openSortPopup && (
        <div className="sort__popup">
          <ul>
            <li className="sort__popup-item active">
              Название по возрастанию
              <img
                src={arrow}
                alt="по возрастанию"
                className="sort__item-arrow"
              />
            </li>
            <li className="sort__popup-item">
              Название по убыванию
              <img
                src={arrow}
                alt="по возрастанию"
                className="sort__item-arrow sort__item-arrow--desc"
              />
            </li>
            <li className="sort__popup-item">
              Цена по возрастанию
              <img
                src={arrow}
                alt="по возрастанию"
                className="sort__item-arrow"
              />
            </li>
            <li className="sort__popup-item">
              Цена по убыванию
              <img
                src={arrow}
                alt="по возрастанию"
                className="sort__item-arrow sort__item-arrow--desc"
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
