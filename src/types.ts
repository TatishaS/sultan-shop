export type SigninForm = {
  username: string;
  password: string;
};

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

export type AddRowForm = {
  companySigDate: string;
  companySignatureName: string;
  documentName: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSigDate: string;
  employeeSignatureName: string;
};
