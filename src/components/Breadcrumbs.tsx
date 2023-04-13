import React, { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
export interface IBreadCrumbs {
  title?: string;
}
const Breadcrumbs: FC<IBreadCrumbs> = ({ title }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let currentLink = "";
  const breadcrumbs = pathname.split("/").filter((item) => item !== "");
  const breadcrumbName = (path: string) => {
    if (path === "cart") {
      return "Корзина";
    } else if (path === "admin") {
      return "Админ панель";
    } else if (path.includes("product")) {
      return title;
    }
  };
  return (
    <nav className="breadcrumbs">
      <div className="container">
        <div className="wrapper">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link to="/" className="breadcrumbs__link">
                Каталог
              </Link>
            </li>
            {breadcrumbs.map((item) => {
              currentLink += `/${item}`;
              return (
                <li className="breadcrumbs__item">
                  <Link to={currentLink} className="breadcrumbs__link">
                    {breadcrumbName(item)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
