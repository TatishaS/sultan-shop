import React, { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LocationIcon from "../assets/images/icon-location.svg";
import EmailIcon from "../assets/images/icon-email.svg";
import BasketIcon from "../assets/images/icon-basket.svg";
import logo from "../assets/images/lovo.svg";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="wrapper">
          <div className="header__inner">
            <nav className="header__nav">
              <div className="header__top">
                <div className="header__blocks">
                  <div className="header__block-wrapper">
                    <img
                      src={LocationIcon}
                      alt="Расположение"
                      className="header__icon-img"
                    />
                    <div className="header__block-info">
                      <p className="header__address-top">
                        г. Кокчетав, ул. Ж. Ташенова 129Б
                      </p>
                      <p className="header__address-bottom">
                        (Рынок Восточный)
                      </p>
                    </div>
                  </div>
                  <div className="header__block-wrapper">
                    <img
                      src={EmailIcon}
                      alt="Электронная почта"
                      className="header__icon-img"
                    />
                    <div className="header__block-info">
                      <p className="header__email-top">opt.sultan@mail.ru</p>
                      <p className="header__email-bottom">
                        На связи в любое время
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="header__menu menu__list">
                  <li className="menu__list-item">
                    <a href="#" className="menu__list-itemlink">
                      О компании
                    </a>
                  </li>
                  <li className="menu__list-item">
                    <a href="#" className="menu__list-itemlink">
                      Доставка и оплата
                    </a>
                  </li>
                  <li className="menu__list-item">
                    <a href="#" className="menu__list-itemlink">
                      Возврат
                    </a>
                  </li>
                  <li className="menu__list-item menu__list-item--authorized">
                    <a href="#" className="menu__list-itemlink">
                      Контакты
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header__bottom">
                <a className="header__logo" href="#">
                  <img src={logo} alt="Sultan logo" width="156" height="66" />
                </a>
                <a className="header__catalog-btn btn">Каталог</a>
                <div className="header__search">
                  <form className="header__search-form search">
                    <input
                      type="text"
                      className="search__input"
                      placeholder="Укажите название профиля GitHub"
                    />
                    <button className="search__btn" type="submit">
                      Найти
                    </button>
                  </form>
                </div>
                <div className="header__contact">
                  <div className="header__contact-phone">
                    +7 (777) 490-00-91
                  </div>
                  <div className="header__contact-time">
                    время работы: 9:00-20:00
                  </div>
                  <button className="header__contact-order">
                    Заказать звонок
                  </button>
                  <div className="header__contact-operator">
                    <div className="header__operator-avatar">
                      <img src="" alt="" className="header__operator-img" />
                    </div>
                  </div>
                </div>
                <a href="#" className="header__pricelist btn">
                  Прайс-лист
                </a>
                <div className="header__cart-wrapper">
                  <a href="#" className="header__cart-link">
                    <img
                      src={BasketIcon}
                      alt="Корзина"
                      className="header__cart-img"
                    />
                    <span className="header__cart-quantity">1</span>
                  </a>
                </div>
              </div>

              <button className="menu__burger">
                <span></span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
