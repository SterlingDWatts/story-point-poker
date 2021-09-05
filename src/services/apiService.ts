import axios from "axios";
import config from "../config";

export const instance = axios.create({
  baseURL: config.SERVER_URL,
  timeout: 10000,
  headers: { Authorization: `Bearer ${config.BEARER}` },
});
