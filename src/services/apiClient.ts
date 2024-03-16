import axios, { AxiosRequestConfig } from "axios";

export interface SuccessResponse<T> {
  success: true;
  payload: T;
}
export interface ErrorResponse {
  success: false;
  error: {
    message: string;
  };
}
export type FetchResponse<T> = SuccessResponse<T> | ErrorResponse;

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
});

class APIClient<T> {
  endpoint: string;
  controller: AbortController | null = null; // Variable to hold the AbortController
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  get = (config?: AxiosRequestConfig) => {
    // Create a new AbortController for the current request
    this.controller = new AbortController();

    // Add the signal to the request config
    const requestConfig: AxiosRequestConfig = {
      ...config,
      signal: this.controller.signal,
    };

    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, requestConfig)
      .then((res) => res.data);
  };

  post = (data: any, config?: AxiosRequestConfig) => {
    // Create a new AbortController for the current request
    this.controller = new AbortController();

    // Add the signal to the request config
    const requestConfig: AxiosRequestConfig = {
      ...config,
      signal: this.controller.signal,
    };

    return axiosInstance
      .post<FetchResponse<T>>(this.endpoint, data, requestConfig)
      .then((res) => res.data);
  };

  // Method to cancel the current request
  cancelRequest = () => {
    if (this.controller) {
      this.controller.abort();
      this.controller = null;
    }
  };
}

export default APIClient;
