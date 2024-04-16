import { Vouchers } from "./orders";
import { ShopAccount } from "./users";

export interface Product {
  id: number;
  name: string;
  imageUrl?: string;
  description?: string;
  baseUnitPrice: number;
  dateCreated: Date | string;
  dateModified: Date | string;
  category: Category;
  vendor: ShopAccount;
  vouchers?: Vouchers[];
  sale?: number; 
  rate?: number;
}

export interface Category {
  id: number;
  name?: string;
  description?: string;
}

export interface Price {
  id: number;
  unitPrice: number;
  product: Product;
  startDate: Date | string;
  endDate: Date | string;
}
