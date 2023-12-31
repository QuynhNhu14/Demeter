import { OrderItem } from "./order";

export interface Account {
  id: string;
  name: string;
  password?: string;
  user?: User;
  carts?: OrderItem[];
}

export interface User {
  id: string;
  fullName?: string;
  gender: number;
  dateOfBirth: Date | string;
  avatarUrl?: string;
  address: Address;
}

export interface Address {
  country?: string;
  addressLines?: string;
  locality?: string;
  region?: string;
  postcode?: string;
}