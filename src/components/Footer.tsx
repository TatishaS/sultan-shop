import React from "react";
import LogoFooter from "../assets/images/logo-footer.svg";
import visa from "../assets/images/visa.png";
import mastercard from "../assets/images/mastercard.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="wrapper">
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
                <p className="footer__about">
                  Компания «Султан» — снабжаем розничные магазины товарами "под
                  ключ" в Кокчетаве и Акмолинской области
                </p>
                <p className="footer__subscribe">Подпишись на скидки и акции</p>
                <form className="footer__subscribe-form search">
                  <input
                    type="email"
                    className="footer__subscribe-input search__input"
                    placeholder="Введите ваш E-mail"
                  />
                  <button
                    className="footer__subscribe-btn search__btn"
                    type="submit"
                  ></button>
                </form>
              </div>

              <nav className="footer__navigation">
                <div className="footer__menu">
                  <h3 className="footer__menu-title">Меню сайта:</h3>
                  <ul className="footer__list">
                    <li className="footer__list-item">
                      <a className="footer__listitem-link" href="#">
                        О компании
                      </a>
                    </li>
                    <li className="footer__list-item">
                      <a className="footer__listitem-link" href="#">
                        Доставка и оплата
                      </a>
                    </li>
                    <li className="footer__list-item">
                      <a className="footer__listitem-link" href="#">
                        Возврат
                      </a>
                    </li>
                    <li className="footer__list-item">
                      <a className="footer__listitem-link" href="#">
                        Контакты
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer__menu">
                  <h3 className="footer__menu-title">Категории:</h3>
                  <ul className="footer__list">
                    <li className="footer__list-item">
                      <a className="footer__listitem-link" href="#">
                        Бытовая химия
                      </a>
                    </li>
                    <li className="footer__list-item">
                      <a className="footer__listitem-link" href="#">
                        Косметика и гигиена
                      </a>
                    </li>
                    <li className="footer__list-item">
                      <a className="footer__listitem-link" href="#">
                        Товары для дома
                      </a>
                    </li>
                    <li className="footer__list-item">
                      <a className="footer__listitem-link" href="#">
                        Товары для детей и мам
                      </a>
                    </li>
                    <li className="footer__list-item">
                      <a className="footer__listitem-link" href="#">
                        Посуда
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer__menu">
                  <h3 className="footer__menu-title">Скачать прайс-лист:</h3>
                  <a className="footer__pricelist-btn header__pricelist-btn btn">
                    Прайс-лист
                  </a>
                  <p className="footer__contact-text">Связь в мессенджерах:</p>
                  <ul className="footer__social">
                    <li className="footer__social-item">
                      <a
                        className="footer__social-link footer__social-link--whatsapp"
                        href="#"
                      ></a>
                    </li>
                    <li className="footer__social-item">
                      <a
                        className="footer__social-link footer__social-link--telegram"
                        href="#"
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="footer__menu">
                  <h3 className="footer__menu-title">Контакты:</h3>

                  <div className="footer__contact-info">
                    <a
                      className="footer__contact-phone"
                      href="tel:+77774900091"
                    >
                      +7 (777) 490-00-91
                    </a>
                    <div className="footer__contact-time">
                      время работы: 9:00-20:00
                    </div>
                    <button className="footer__contact-order">
                      Заказать звонок
                    </button>

                    <p className="footer__email-top">opt.sultan@mail.ru</p>
                    <p className="footer__email-bottom">
                      На связи в любое время
                    </p>
                  </div>
                  <div className="footer__payment">
                    <ul className="footer__methods">
                      <li className="footer__method-item">
                        <a className="footer__method-link" href="#">
                          <img src={visa} alt="Visa" width="61" height="39" />
                        </a>
                      </li>
                      <li className="footer__method-item">
                        <a className="footer__method-link" href="#">
                          <img
                            src={mastercard}
                            alt="Mastercard"
                            width="61"
                            height="39"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
