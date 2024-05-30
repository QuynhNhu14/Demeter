import {User } from "../models/users";
import { useHttp } from "../hooks";

const baseUrl = "/users";

export async function getUser() {
  const { data, error } = await useHttp().get<User>(baseUrl);

  if (error) {
    console.error("Error: ", error);
    return;
  }
  return data;
}