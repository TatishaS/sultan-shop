import React, { FC } from "react";
import { Navigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { setCart } from "../redux/cart/slice";
import Spinner from "../components/Spinner.js";
import ErrorBlock from "../components/ErrorBlock";
import CartItem from "../components/CartItem";

const Cart: FC = () => {
  const dispatch = useAppDispatch();
  const { cartItems, totalPrice, status, error } = useAppSelector(
    (state) => state.cart
  );

  return (
    <div className="container">
      <section className="cart">
        <div className="wrapper">
          <h1 className="cart__title page-title">Корзина</h1>
          <ul className="cart__items">
            {cartItems.map((item) => (
              <CartItem />
            ))}
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </ul>
          <div className="cart__total">
            <button type="submit" className="cart__btn-total btn">
              Оформить заказ
            </button>
            <span className="cart__price-total">1 348,76 ₸</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
