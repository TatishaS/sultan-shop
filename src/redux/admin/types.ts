import { IProductItem } from "../products/types";

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
/* 
export interface IAdminItem {
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
} */

export interface AdminSliceState {
  adminItems: [] | IProductItem[];
  status: Status;
  error: null | string;
}
