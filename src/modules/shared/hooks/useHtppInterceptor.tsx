import React from "react";
import axios from "axios";

const HtppInterceptor: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  axios.interceptors.request.use((config) => {
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
    };
    return config;
  });

  return <>{children}</>;
};

export default HtppInterceptor;
