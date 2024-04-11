import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { useLocalStorage } from "./useLocalStorage"; // Import useLocalStorage hook

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // Browser should use relative URL
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use Vercel URL
  return `http://localhost:${process.env.PORT ?? 5029}`; // Dev SSR should use localhost
};

export const useHttp = () => {
  const [token, setToken] = useLocalStorage<string | null>("token", null);

  const api = `${getBaseUrl()}/api`;

  // Axios instance with token authentication
  const axiosInstance = axios.create({
    baseURL: api,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      "Content-Type": "application/json",
    },
  });

  // Intercept 401 Unauthorized errors to handle token expiration/invalidation
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        // Handle token expiration/invalidation
        // For example, redirect to login page or refresh token
        console.log("Unauthorized: Token expired or invalid");
      }
      return Promise.reject(error);
    }
  );

  // Function to set token (e.g., after successful login)
  const setAuthToken = (newToken: string) => {
    setToken(newToken);
  };

  // Function to make a GET request
  const get = <T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.get<T>(url, config);
  };

  // Function to make a POST request
  const post = <T, Payload>(
    url: string,
    data?: Payload,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.post<T>(url, data, config);
  };

  // Function to make a PUT request
  const put = <T, Payload>(
    url: string,
    data?: Payload,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.put<T>(url, data, config);
  };

  // Function to make a DELETE request
  const remove = <T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.delete<T>(url, config);
  };

  return {
    axiosInstance,
    setAuthToken,
    get,
    post,
    put,
    remove,
  };
};
