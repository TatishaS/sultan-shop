/* export interface IItem {
  id: number;
  imageUrl: string;
  title: string;
  sizeType: string;
  barcode: string;
  price: number;
  producer: string;
  brand: string;
  description: string;
  category: string;
} */

export type AddNewItemForm = {
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
};

export interface IOption {
  value: string;
  label: string;
}
