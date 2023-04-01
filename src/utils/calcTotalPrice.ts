import { ICartItem } from "../redux/cart/types";

export const calcTotalPrice = (items: ICartItem[]) => {
  return items.reduce((sum, obj) => {
    return sum + obj.price * obj.count;
  }, 0);
};
