export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface ICartItem {
  id: string;
  imageUrl: string;
  title: string;
  sizeType: string;
  barcode: string;
  price: number;
  producer: string;
  brand: string;
  description: string;
  category: string;
  count: number;
}

export interface CartSliceState {
  cartItems: [] | ICartItem[];
  totalPrice: number;
  status: Status;
  error: null | string;
}
