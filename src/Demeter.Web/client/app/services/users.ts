import axios, { AxiosError } from "axios";
import { Account, User } from "../models/users";
import { useHttp } from "../hooks";

const baseUrl = "http://localhost:5029/api/users";
const https = useHttp();

export async function getAcount() {
  const url = `${baseUrl}/account`;
  const { data, error } = await https.get<Account>(url);

  if (error) {
    console.error("Error: ", error);
    return;
  }
  return data;
}

export async function signUp(account: Account) {
  const url = `${baseUrl}/signup`;
  const { data, error } = await https.post<Account>(url, account);

  if (error) {
    console.error("Error: ", error);
    return;
  }
  return data;
}

export async function deleteAccount(id: string) {
  const url = `${baseUrl}/account`;
  const { data, error } = await https.delete<Account>(url, { data: { id } });

  if (error) {
    console.error("Error: ", error);
    return;
  }
  return data;
}

export async function getUser() {
  const { data, error } = await https.get<User>(baseUrl);

  if (error) {
    console.error("Error: ", error);
    return;
  }
  return data;
}

export async function login(account: Account) {
  const url = `${baseUrl}/login`;
  const { data, error } = await https.post<Account>(url, account);

  if (error) {
    console.error("Error: ", error);
    return;
  }
  return data;
}

export async function logout() {
  const url = `${baseUrl}/logout`;
  const { data, error } = await https.post(url);

  if (error) {
    console.error("Error: ", error);
    return;
  }
  return data;
}
