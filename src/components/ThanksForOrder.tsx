import React, { FC } from "react";

const ThanksForOrder: FC = () => {
  return (
    <>
      <div className="modal-overlay modal-overlay--show"></div>
      <section className="modal modal--login modal--show">
        <button className="modal__close-btn"></button>
        <div className="modal__inner">
          <h2 className="modal__title">Спасибо за заказ!</h2>
        </div>
      </section>
    </>
  );
};

export default ThanksForOrder;
