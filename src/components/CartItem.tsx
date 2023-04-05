import React from "react";
import cartImg from "../assets/images/card-1.png";
import bottle from "../assets/images/icon-bottle.svg";
import box from "../assets/images/icon-box.svg";

const CartItem = () => {
  return (
    <li className="cart-item">
      <div className="cart-item__inner">
        <div className="cart-item__img-wrapper">
          <img src={cartImg} alt="Фото товара" className="cart-item__img" />
        </div>

        <div className="cart-item__info">
          <p className="cart-item__volume">
            <img
              src={bottle}
              alt=""
              className="cart-item__volume-img cart-item__volume-img--bottle"
            />
            450 мл
          </p>

          <p className="cart-item__name">
            AOS средство для мытья посуды Crystal
          </p>
          <p className="cart-item__descr">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis
            vulputate feugiat massa vestibulum duis.
          </p>
        </div>
        <div className="cart-item__count-wrapper">
          <button className="cart-item__btn-count cart-item__btn-count--minus">
            -
          </button>
          <span className="cart-item__count">1</span>
          <button className="cart-item__btn-count cart-item__btn-count--plus">
            +
          </button>
        </div>
        <div className="cart-item__price">48,76 ₸</div>
        <button className="cart-item__btn btn btn--clear"></button>
      </div>
    </li>
  );
};

export default CartItem;
