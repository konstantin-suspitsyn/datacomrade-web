import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const api = axios.create({ baseURL: baseUrl });

export const axiosPrivate = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
