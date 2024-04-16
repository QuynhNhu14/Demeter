import axios, { AxiosError } from "axios";
import { Category, Price, Product } from "../models/products";
import { useHttp } from "../hooks";

const baseUrl = "http://localhost:5029/api/products";


export async function getAllProducts() {
  try {
    const response = await axios.get<Product[]>(baseUrl);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error: ", error.message);
    } else {
      console.error("Error: ", error);
    }
  }
}

export async function getProductById(productId: string) {
  try {
    const response = await axios.get<Product>(`${baseUrl}/${productId}` );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error: ", error.message);
    } else {
      console.error("Error: ", error);
    }
  }
}

export async function createProduct(product: Product) {
  try {
    const response = await axios.post<Product>(baseUrl, product);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error: ", error.message);
    } else {
      console.error("Error: ", error);
    }
  }
}

export async function deleteProduct(id: string) {
  try {
    const response = await axios.delete<Product>(baseUrl, { data: { id } });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error: ", error.message);
    } else {
      console.error("Error: ", error);
    }
  }
}

export async function updateProduct(product: Product) {
  const url = `${baseUrl}/update`;
  try {
    await axios.post<Product>(url, product);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error: ", error.message);
    } else {
      console.error("Error: ", error);
    }
  }
}

export async function getCategory() {
  const url = `${baseUrl}/categories`;
  try {
    const response = await axios.get<Category>(url);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error: ", error.message);
    } else {
      console.error("Error: ", error);
    }
  }
}

export async function deleteCategory(id: string) {
  const url = `${baseUrl}/update`;
  try {
    await axios.delete<Category>(url, { data: { id } });
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error: ", error.message);
    } else {
      console.error("Error: ", error);
    }
  }
}

export async function getPrice() {
  const url = `${baseUrl}/prices`;
  try {
    const response = await axios.get<Price>(url);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error: ", error.message);
    } else {
      console.error("Error: ", error);
    }
  }
}

export async function deletePrice(id: string) {
  const url = `${baseUrl}/prices`;
  try {
    await axios.delete<Price>(url, { data: { id } });
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error: ", error.message);
    } else {
      console.error("Error: ", error);
    }
  }
}
