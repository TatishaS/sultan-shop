export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface IProductItem {
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
}

export interface ProductsSliceState {
  products: [] | IProductItem[];
  status: Status;
  error: null | string;
}
