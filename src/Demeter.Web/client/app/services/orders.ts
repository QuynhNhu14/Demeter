import { OrderItem, Orders, Vouchers } from "../models/orders";
import { useHttp } from "../hooks";

const https = useHttp();

const baseUrl = "/orders";
export async function getOrder() {
  const { data, error } = await https.get<Orders[]>(baseUrl);

  if (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
}

export async function createOrder(order: Orders) {
  const { data, error } = await https.post<Orders>(baseUrl, order);

  if (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
}

export async function deleteOrder(id: string) {
  const { data, error } = await https.delete<Orders>(baseUrl, { data: { id } });

  if (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
}

export async function updateOrder(order: Orders) {
  const url = `${baseUrl}/update`;
  const { data, error } = await https.post<Orders>(url, order);

  if (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
}

export async function getVoucher() {
  const url = `${baseUrl}/voucher`;
  const { data, error } = await https.get<Vouchers[]>(url);

  if (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
}

export async function deleteVoucher(id: string) {
  const url = `${baseUrl}/voucher`;
  const { data, error } = await https.delete<Vouchers>(url, { data: { id } });

  if (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
}

export async function getOrderItem() {
  const url = `${baseUrl}/items`;
  const { data, error } = await https.get<OrderItem[]>(url);

  if (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
}

export async function deleteOrderItem(id: string) {
  const url = `${baseUrl}/items`;
  const { data, error } = await https.delete<OrderItem>(url, { data: { id } });

  if (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
}
