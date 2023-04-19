import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");

  const cartItems = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(cartItems);

  return {
    cartItems,
    totalPrice,
  };
};

export const getAdminFromLS = () => {
  const data = localStorage.getItem("admin");

  const adminItems = data ? JSON.parse(data) : [];

  return {
    adminItems,
  };
};
