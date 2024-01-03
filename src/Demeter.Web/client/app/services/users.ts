import axios, { AxiosError } from "axios";
import { Account } from "../models/users";

const baseUrl = 'http://localhost:5029/acount';

export async function getAcount() {
  try {
    const response = await axios.get<Account>(baseUrl);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error: ", error.message);
    } else {
      console.error("Error: ", error);
    }
  }
}

export async function createAccount(account : Account) {
  try {
    const response = await axios.post<Account>(baseUrl, account);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error: ", error.message);
    } else {
      console.error("Error: ", error);
    }
  }
}

export async function deleteAccount(id : string) {
  try {
    const response = await axios.delete<Account>(baseUrl, {data: {id}});
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error: ", error.message);
    } else {
      console.error("Error: ", error);
    }
  }
}