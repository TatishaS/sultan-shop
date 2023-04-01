export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface IProductItem {
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
}

export interface ProductsSliceState {
  products: [] | IProductItem[];
  status: Status;
  error: null | string;
}
