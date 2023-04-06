import React, { FC } from "react";
import cartImg from "../assets/images/card-1.png";
import bottle from "../assets/images/icon-bottle.svg";
import box from "../assets/images/icon-box.svg";
import { useAppDispatch } from "../utils/hooks";
import {
  addToCart,
  decreaseCartItem,
  deleteFromCart,
} from "../redux/cart/slice";
import { ICartItem } from "../redux/cart/types";

type CartItemProps = {
  item: ICartItem;
};

const CartItem: FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleClickPlus = () => {
    dispatch(addToCart(item));
  };

  const handleClickMinus = () => {
    dispatch(decreaseCartItem(item.id));
  };

  const handleClickDelete = () => {
    dispatch(deleteFromCart(item.id));
  };
  return (
    <li className="cart-item">
      <div className="cart-item__inner">
        <div className="cart-item__img-wrapper">
          <img
            src={item.imageUrl}
            alt="Фото товара"
            className="cart-item__img"
          />
        </div>

        <div className="cart-item__info">
          <p className="cart-item__volume">
            <img
              src={item.sizeType === "volume" ? bottle : box}
              alt=""
              className={
                item.sizeType === "volume"
                  ? "cart-item__volume-img cart-item__volume-img--bottle"
                  : "cart-item__volume-img"
              }
            />
            {item.size}
          </p>

          <p className="cart-item__name">{item.title.substring(0, 50)}...</p>
          <p className="cart-item__descr">
            {item.description.substring(0, 150)}...
          </p>
        </div>
        <div className="cart-item__right">
          <div className="cart-item__count-wrapper">
            <button
              className="cart-item__btn-count cart-item__btn-count--minus"
              onClick={handleClickMinus}
            >
              -
            </button>
            <span className="cart-item__count">{item.count}</span>
            <button
              className="cart-item__btn-count cart-item__btn-count--plus"
              onClick={handleClickPlus}
            >
              +
            </button>
          </div>
          <div className="cart-item__price">{item.price} ₸</div>
          <button
            className="cart-item__btn btn btn--clear"
            onClick={handleClickDelete}
          ></button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
