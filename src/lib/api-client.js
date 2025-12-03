import axios from "axios";
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
export { apiClient };

const apiClient2 = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
export { apiClient2 };