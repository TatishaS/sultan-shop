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
    <>
      {cartItems.map((item) => (
        <CartItem />
      ))}
    </>
  );
};

export default Cart;
