import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = "http://127.0.0.1:8000/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 4000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    const decoded_token = accessToken ? jwt_decode(accessToken) : null;
    if (decoded_token) {
      const isExpired = dayjs.unix(decoded_token.exp).diff(dayjs()) < 1;
      if (!isExpired) return config;
      const response = await axios.post(`${baseURL}token/refresh/`, {
        refresh: localStorage.getItem("refresh_token"),
      });
      if (response.status === 200) {
        localStorage.setItem("access_token", response.data.access);
      } else console.log("something went wrong while fetching access token");
      config.headers.Authorization = `Bearer ${response.data.access}`;
      return config;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
