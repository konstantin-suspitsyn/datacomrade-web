import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const api = axios.create({ baseURL: baseUrl, crossDomain: true });

export default api;
