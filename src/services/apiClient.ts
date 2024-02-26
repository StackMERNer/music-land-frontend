import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count?: number;
  results: T[];
  next?: string;
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  get = (config?: AxiosRequestConfig) => {
    // console.log("object");
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;

// export default axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "b74a97ca85b34a2f97ecfc34992adcf6",
//   },
// });
