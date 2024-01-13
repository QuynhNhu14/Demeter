import axios, { AxiosError } from "axios";
import { Account, User } from "../models/users";

const baseUrl = 'http://localhost:5029/account';
const bUrl = 'http://localhost:5029/users';
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

export async function getUser() {
  try {
    const response = await axios.get<User>(bUrl);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error: ", error.message);
    } else {
      console.error("Error: ", error);
    }
  }
  
}

export async function deleteUser(id: string) {
  try {
    await axios.delete(bUrl, {data: {id}});
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error: ", error.message);
    } else {
      console.error("Error: ", error);
    }
  }
}

export async function createUser(user: User) {
  try {
    const response = await axios.post<User>(bUrl, user);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error: ", error.message);
    } else {
      console.error("Error: ", error);
    }
  }
}