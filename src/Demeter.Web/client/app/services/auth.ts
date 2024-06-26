import {Authorization, UserLogin } from "../models/users";
import { useHttp } from "../hooks";

const baseUrl = "/auth";

export async function login (user: UserLogin) {
    const url = `${baseUrl}/login`;
    const { data, error } = await useHttp().post<Authorization>(url, user);

    if (error) {
        console.error("Error: ", error);
        return;
    }
    return data;
}

export async function logout() {
    const url = `${baseUrl}/logout`;
    const { data, error } = await useHttp().post(url);

    if (error) {
    console.error("Error: ", error);
    return;
    }
    return data;
}

export async function signUp(user: UserLogin) {
  const url = `${baseUrl}/signup`;
  const { data, error } = await useHttp().post<Authorization>(url, user);

  if (error) {
    console.error("Error: ", error);
    return;
  }
  return data;
}
