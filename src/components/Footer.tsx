import React from "react";
import LogoFooter from "../assets/images/logo-footer.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__info">
              <a className="footer__logo" href="#">
                <img
                  src={LogoFooter}
                  alt="Sultan logo"
                  width="130"
                  height="34"
                />
              </a>
            </div>

            <nav className="footer__navigation">
              <div className="footer__menu">
                <h3 className="footer__menu-title">О компании</h3>
                <ul className="footer__list">
                  <li className="footer__list-item">
                    <a className="footer__listitem-link" href="#">
                      Наши магазины
                    </a>
                  </li>
                  <li className="footer__list-item">
                    <a className="footer__listitem-link" href="#">
                      Вакансии
                    </a>
                  </li>
                  <li className="footer__list-item">
                    <a className="footer__listitem-link" href="#">
                      Сертификаты
                    </a>
                  </li>
                  <li className="footer__list-item">
                    <a className="footer__listitem-link" href="#">
                      Отзывы
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__menu">
                <h3 className="footer__menu-title">Покупателям</h3>
                <ul className="footer__list">
                  <li className="footer__list-item">
                    <a className="footer__listitem-link" href="#">
                      Каталог товаров
                    </a>
                  </li>
                  <li className="footer__list-item">
                    <a className="footer__listitem-link" href="#">
                      Как заказать?
                    </a>
                  </li>
                  <li className="footer__list-item">
                    <a className="footer__listitem-link" href="#">
                      FAQ
                    </a>
                  </li>
                  <li className="footer__list-item">
                    <a className="footer__listitem-link" href="#">
                      Корпоративным клиентам
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__menu">
                <h3 className="footer__menu-title">Оплата и доставка</h3>
                <ul className="footer__list">
                  <li className="footer__list-item">
                    <a className="footer__listitem-link" href="#">
                      Способы оплаты
                    </a>
                  </li>
                  <li className="footer__list-item">
                    <a className="footer__listitem-link" href="#">
                      Время доставки
                    </a>
                  </li>
                  <li className="footer__list-item">
                    <a className="footer__listitem-link" href="#">
                      Гарантии и ремонт
                    </a>
                  </li>
                  <li className="footer__list-item">
                    <a className="footer__listitem-link" href="#">
                      Возврат и компенсация
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
