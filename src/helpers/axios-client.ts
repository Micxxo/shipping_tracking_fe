import axios, { AxiosInstance } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL ?? '';

export const axiosClient = (): AxiosInstance => {
  const api = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return api;
};
