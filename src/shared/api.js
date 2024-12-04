import axios from "axios";

const api = axios.create({
  // baseURL: "https://svoyapi.ru/kuldiaeva/api",
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-type": "application/json",
  },
});

export default api;
