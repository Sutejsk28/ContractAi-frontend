import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});

api.interceptors.request.use(function (config) {
  let token = localStorage.getItem("token");
  config.headers["Authorization"] = "Bearer " + token;
  return config;
});

export default api;