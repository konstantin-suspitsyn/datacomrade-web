import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const api = axios.create({ baseURL: baseUrl, crossDomain: true });

export const axiosPrivate = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
export default api;
