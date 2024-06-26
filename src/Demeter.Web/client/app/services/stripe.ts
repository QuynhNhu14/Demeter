import {
  AddStripeCustomer,
  AddStripePayment,
  CreateCheckoutSessionStripeRequest,
} from "../models/stripe";
import { useHttp } from "../hooks";

const baseUrl = "/stripe";

export async function addStripeCustomer(customer: AddStripeCustomer) {
  const url = `${baseUrl}/customer/add`;
  const { data, error } = await useHttp().post<AddStripeCustomer>(url, customer);

  if (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
}

export async function addStripePayment() {
  const url = `${baseUrl}/payment/add`;
  const { data, error } = await useHttp().post<AddStripePayment>(url);

  if (error) {
    console.error("Error: ", error);
    return;
  }
  return data;
}

export async function createCheckoutSession(
  request: CreateCheckoutSessionStripeRequest[]
) {
  const url = `${baseUrl}/create-checkout-session`;
  const { data, error } = await useHttp().post<string>(url, request);

  if (error) {
    console.error("Error: ", error);
    return;
  }
  return data;
}
