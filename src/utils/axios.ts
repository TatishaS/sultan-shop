import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://sultan-shop-api.onrender.com/products",
});
