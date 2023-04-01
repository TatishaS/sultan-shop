import axios from "axios";

const token = window.localStorage.getItem("pryaniki-token");

export const axiosInstance = axios.create({
  baseURL: "https://sultan-shop-api.onrender.com/products",
});
