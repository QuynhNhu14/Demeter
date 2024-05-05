import axios, { AxiosError } from "axios";
import { AddStripeCustomer, AddStripePayment, CreateCheckoutSessionStripeRequest } from "../models/stripe";

const baseUrl = "http://localhost:5029/api/stripe";


export async function addStripeCustomer(customer: AddStripeCustomer) {
    const url = `${baseUrl}/customer/add`;
    try {
        const response = await axios.post<AddStripeCustomer>(url, customer);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
        console.error("Error: ", error.message);
        } else {
        console.error("Error: ", error);
        }
    }
}

export async function addStripePayment() {
    const url = `${baseUrl}/payment/add`;
    try {
        const response = await axios.post<AddStripePayment>(url);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
        console.error("Error: ", error.message);
        } else {
        console.error("Error: ", error);
        }
    }
}

export async function createCheckoutSession(request: CreateCheckoutSessionStripeRequest[]) {
    const url = `${baseUrl}/create-checkout-session`;
    try {
        const response = await axios.post<string>(url, request);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
        console.error("Error: ", error.message);
        } else {
        console.error("Error: ", error);
        }
    }
}
