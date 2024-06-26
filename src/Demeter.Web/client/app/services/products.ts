import { Category, Price, Product } from "../models/products";
import { useHttp } from "../hooks";

const baseUrl = "/products";

export async function getAllProducts() {
  const { data, error } = await useHttp().get<Product[]>(baseUrl);

  if (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
}

export async function getProductById(productId: string) {
  const { data, error } = await useHttp().get<Product>(`${baseUrl}/${productId}`);

  if (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
}

export async function getProductByName(productName: string) {
  const { data, error } = await useHttp().get<Product[]>(
    `${baseUrl}/search?name=${productName}`
  );

  if (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
}

export async function createProduct(product: Product) {
  const { data, error } = await useHttp().post<Product[]>(baseUrl, product);

  if (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
}

export async function deleteProduct(id: string) {
  const { data, error } = await useHttp().delete<Product[]>(baseUrl, {
    data: { id },
  });

  if (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
}

export async function updateProduct(product: Product) {
  const url = `${baseUrl}/update`;
  const { data, error } = await useHttp().post<Product[]>(url, product);

  if (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
}

export async function getCategory() {
  const url = `${baseUrl}/categories`;
  const { data, error } = await useHttp().get<Category>(url);

  if (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
}

export async function deleteCategory(id: string) {
  const url = `${baseUrl}/update`;
  const { data, error } = await useHttp().delete<Category>(url, { data: { id } });

  if (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
}

export async function getPrice() {
  const url = `${baseUrl}/prices`;
  const { data, error } = await useHttp().get<Price>(url);

  if (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
}

export async function deletePrice(id: string) {
  const url = `${baseUrl}/prices`;
  const { data, error } = await useHttp().delete<Price>(url, { data: { id } });

  if (error) {
    console.error("Error: ", error);
    return;
  }

  return data;
}
