import axios from "axios";
import { Account } from "../models/user";

const baseUrl = 'http://localhost:5029/acount';

export async function getAcount() {
  const response = await axios.get<Account>(baseUrl);
  return response.data;
}