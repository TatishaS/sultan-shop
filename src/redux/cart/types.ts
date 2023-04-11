export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface ICartItem {
  id: number;
  imageUrl: string;
  title: string;
  sizeType: string;
  size: string;
  barcode: string;
  price: number;
  producer: string;
  brand: string;
  description: string;
  category: string[];
  count: number;
}

export interface CartSliceState {
  cartItems: [] | ICartItem[];
  totalPrice: number;
}
