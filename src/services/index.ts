import axios from "axios";

const baseURL = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/**
 * Retries request if failed, check options: https://www.npmjs.com/package/axios-retry#options
 */
// axiosRetry(baseURL, { retries: 0 });

export default baseURL;
