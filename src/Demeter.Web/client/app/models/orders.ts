import { Product } from "./products";
import { Account } from "./users";

export interface OrderItem {
  id: number;
  quantity: number;
  dateCreated: Date | string;
  product: Product;
}

export interface Orders {
  id: string;
  account: Account;
  items?: OrderItem[];
  totalPrice: number;
}

export interface Vouchers {
  id: string;
  code: string;
  description: string;
  discount: number;
  startDate: string;
  endDate: string;
  active: boolean;
  usageLimit: number;
}
