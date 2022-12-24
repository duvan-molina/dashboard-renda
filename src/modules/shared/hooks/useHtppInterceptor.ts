import React from "react";
import { AxiosError, AxiosRequestConfig } from "axios";
import useEventCallback from "./useEventCallback";
import baseURL from "../../../services";
import { useAppSelector } from "../../../store/hooks";
import { authTokenSelector } from "../../../store/modules/auth/selectors";

function useHttpInterceptor() {
  const token = useAppSelector(authTokenSelector);

  React.useEffect(() => {
    const consumerInterceptorErrorId = baseURL.interceptors.response.use(
      undefined,
      interceptResponseError
    );

    const consumerInterceptorReqId = baseURL.interceptors.request.use(
      interceptConsumerRequest
    );

    return () => {
      baseURL.interceptors.response.eject(consumerInterceptorErrorId);

      baseURL.interceptors.request.eject(consumerInterceptorReqId);
    };
  }, []);

  const interceptResponseError = useEventCallback((error: AxiosError) => {
    return Promise.reject(error);
  });

  const interceptConsumerRequest = useEventCallback(
    (request: AxiosRequestConfig) => {
      const headers = request.headers as Record<string, string>;

      // Add authorization header
      headers.Authorization = `${token}`;

      if (request.method === "get") {
        request.data = null; // fix header content-type
      }
      return request;
    }
  );

  return;
}

export default useHttpInterceptor;
