import React, { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import locationIcon from "../assets/images/icon-location.svg";
import emailIcon from "../assets/images/icon-email.svg";
import basketIcon from "../assets/images/icon-basket.svg";
import logo from "../assets/images/lovo.svg";
import operator from "../assets/images/operator.png";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { ICartItem } from "../redux/cart/types";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { cartItems, totalPrice } = useAppSelector((state) => state.cart);

  const _cartItems: ReadonlyArray<ICartItem> = cartItems;
  const totalCount =
    cartItems &&
    _cartItems.reduce((sum: number, item: ICartItem) => {
      return sum + item.count;
    }, 0);

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__inner">
          <nav className="header__nav">
            <div className="header__top">
              <div className="header__wrapper wrapper">
                <div className="header__blocks">
                  <div className="header__block-wrapper">
                    <img
                      src={locationIcon}
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
                      src={emailIcon}
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
            </div>
            <div className="header__bottom">
              <div className="header__wrapper wrapper">
                <Link to="/" className="header__logo">
                  <img src={logo} alt="Sultan logo" width="156" height="66" />
                </Link>
                <a className="header__catalog-btn btn">Каталог</a>
                <div className="header__search">
                  <form className="header__search-form search">
                    <input
                      type="text"
                      className="search__input"
                      placeholder="Поиск..."
                    />
                    <button className="search__btn" type="submit"></button>
                  </form>
                </div>
                <div className="header__contact">
                  <div className="header__contact-info">
                    <a
                      className="header__contact-phone"
                      href="tel:+77774900091"
                    >
                      +7 (777) 490-00-91
                    </a>
                    <div className="header__contact-time">
                      время работы: 9:00-20:00
                    </div>
                    <button className="header__contact-order">
                      Заказать звонок
                    </button>
                  </div>

                  <div className="header__contact-operator">
                    <div className="header__operator-avatar">
                      <img
                        src={operator}
                        alt="Фото оператора"
                        className="header__operator-img"
                      />
                      <span className="header__operator-status"></span>
                    </div>
                  </div>
                </div>
                <div className="divider divider--long"></div>
                <a href="#" className="header__pricelist-btn btn">
                  Прайс-лист
                </a>
                <div className="divider divider--long"></div>
                <div className="header__cart-wrapper">
                  <Link to="/cart" className="header__cart-link">
                    <img
                      src={basketIcon}
                      alt="Корзина"
                      className="header__cart-img"
                    />
                    {totalCount > 0 && (
                      <span className="header__cart-quantity">
                        {totalCount}
                      </span>
                    )}
                  </Link>
                  <div className="header__cart-info">
                    <span className="header__cart-text">Корзина</span>
                    <span className="header__cart-total">{totalPrice} ₸</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="menu__burger">
              <span></span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
