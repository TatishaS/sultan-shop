import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { clearCart, setCart } from "../redux/cart/slice";

import CartItem from "../components/CartItem";
import CartEmpty from "../components/CartEmpty";
import ThanksForOrder from "../components/ThanksForOrder";
import Breadcrumbs from "../components/Breadcrumbs";

const Cart: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const { cartItems, totalPrice } = useAppSelector((state) => state.cart);

  if (cartItems.length === 0) {
    return <CartEmpty />;
  }

  const handleOrder = () => {
    setShowModal(true);

    setTimeout(() => {
      dispatch(clearCart());
      setShowModal(false);
    }, 3000);
  };

  return (
    <>
      <Breadcrumbs />
      <div className="container">
        <section className="cart">
          <div className="wrapper">
            <h1 className="cart__title page-title">Корзина</h1>
            <ul className="cart__items">
              {cartItems.map((item: any) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
            <div className="cart__total">
              <button
                type="submit"
                className="cart__btn-total btn"
                onClick={handleOrder}
              >
                Оформить заказ
              </button>
              <span className="cart__price-total">{totalPrice} ₸</span>
            </div>
            {showModal && <ThanksForOrder />}
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
