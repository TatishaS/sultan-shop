import React from "react";

const CartEmpty = () => {
  return (
    <div className="container">
      <section className="cart cart--empty">
        <div className="wrapper">
          <h1 className="cart__title page-title">Корзина пуста</h1>
        </div>
      </section>
    </div>
  );
};

export default CartEmpty;
