import React, { FC } from "react";
import { Link } from "react-router-dom";
import bottle from "../assets/images/icon-bottle.svg";
import box from "../assets/images/icon-box.svg";
import deleteIcon from "../assets/images/icon-delete.svg";
import editIcon from "../assets/images/icon-edit.svg";

type AdminCardProps = {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  size: string;
  sizeType: string;
  barcode: string;
  producer: string;
  brand: string;
  description: string;
  category: string[];
  handleClickDeleteItem: (id: number) => void;
  handleEditModal: (id: number) => void;
};

const AdminProductCard: FC<AdminCardProps> = ({
  id,
  imageUrl,
  title,
  price,
  size,
  sizeType,
  barcode,
  producer,
  brand,
  description,
  category,
  handleClickDeleteItem,
  handleEditModal,
}) => {
  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img src={imageUrl} alt="фото товара" className="card__img" />
      </div>
      <div className="card__content">
        <p className="card__volume">
          <img
            src={sizeType === "volume" ? bottle : box}
            alt=""
            className={
              sizeType === "volume"
                ? "card__volume-img card__volume-img--bottle"
                : "card__volume-img"
            }
          />
          {size}
        </p>
        <Link to={`/product/${id}`}>
          <p className="card__name">{title}</p>
        </Link>
        <div className="card__row-wrapper">
          <span className="card__row-name">Штрихкод:</span>
          <span className="card__row-value">{barcode}</span>
        </div>
        <div className="card__row-wrapper">
          <span className="card__row-name">Производитель:</span>
          <span className="card__row-value">{producer}</span>
        </div>
        <div className="card__row-wrapper">
          <span className="card__row-name">Бренд:</span>
          <span className="card__row-value">{brand}</span>
        </div>
        <div className="card__row-wrapper">
          <span className="card__row-name">Категория:</span>
          <span className="card__row-value">
            {category.map((cat, i) => {
              if (i !== category.length - 1) {
                return `${cat}, `;
              } else {
                return `${cat}`;
              }
            })}
          </span>
        </div>
      </div>
      <div className="card__bottom">
        <div className="card__price">{price}₸</div>
        <div className="card__bottom-btns">
          <button
            className="card__edit-btn"
            onClick={() => handleEditModal(id)}
          >
            <img className="card__btn-img" src={editIcon} />
          </button>
          <button
            className="card__delete-btn"
            onClick={() => handleClickDeleteItem(id)}
          >
            <img className="card__btn-img" src={deleteIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProductCard;
