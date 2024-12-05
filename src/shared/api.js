import axios from "axios";
import baseURL from "./baseURI";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export default api;
