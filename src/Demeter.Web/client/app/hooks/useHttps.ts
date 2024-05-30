import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { storeLocal } from './storeLocal';
import { environment } from '../../environment';

const axiosInstance = axios.create({
  baseURL: environment.apiUrl,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
});

export const useHttp = () => {
  const {value: token, setValue: setToken} = storeLocal<string | null>('token', null);

  const updateHeaders = (newToken: string | null) => {
    if (newToken) {
      axiosInstance.defaults.headers['Authorization'] = `Bearer ${newToken}`;
    } else {
      delete axiosInstance.defaults.headers['Authorization'];
    }
  };

  if (token) {
    updateHeaders(token);
  }

  const makeRequest = async <T>(request: Promise<AxiosResponse<T>>): Promise<{ data: T | null; error: any }> => {
    try {
      const response = await request;
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error: error instanceof AxiosError ? error.response : error instanceof Error ? error.message : error };
    }
  };

  const get = <T = any>(url: string, config: AxiosRequestConfig = {}): Promise<{ data: T | null; error: any }> =>
    makeRequest(axiosInstance.get<T>(url, config));

  const post = <T = any, U = any>(url: string, data?: U, config: AxiosRequestConfig = {}): Promise<{ data: T | null; error: any }> =>
    makeRequest(axiosInstance.post<T>(url, data, config));

  const put = <T = any, U = any>(url: string, data?: U, config: AxiosRequestConfig = {}): Promise<{ data: T | null; error: any }> =>
    makeRequest(axiosInstance.put<T>(url, data, config));

  const deleteRequest = <T = any>(url: string, config: AxiosRequestConfig = {}): Promise<{ data: T | null; error: any }> =>
    makeRequest(axiosInstance.delete<T>(url, config));

  return {
    setAuthToken: (newToken: string | null) => {
      setToken(newToken);
      updateHeaders(newToken);
    },
    token,
    get,
    post,
    put,
    delete: deleteRequest,
  };
};