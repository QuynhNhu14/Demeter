import { OrderItem } from "./orders";

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

export interface CurrentUser {
  id: string;
  name: string;
  username: string;
  email: string;
  avatarUrl: string;
  roles: string[];
  phonenumber: string;
}

export interface Address {
  country?: string;
  addressLines?: string;
  locality?: string;
  region?: string;
  postcode?: string;
}

export interface ShopAccount {
  id: string;
  name?: string;
  password?: string;
  user: User;
  type: number
}