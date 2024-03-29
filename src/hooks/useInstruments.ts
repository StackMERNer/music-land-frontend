import { useEffect, useState } from "react";
import APIClient from "../services/apiClient";

export interface Instrument {
  _id: string;
  name: string;
  model: string;
  category: string;
  subCategory: string;
  price: number;
  brand: string;
  images: string[];
  description: string;
  quantity: number;
  keywords: string[];
  specifications: {
    [key: string]: string | number;
  };
}
export interface InstrumentQuery {
  category: string;
  subCategory: string;
}

const apiClient = new APIClient<Instrument[]>("/instruments");

const useInstruments = (instrumentQuery: InstrumentQuery) => {
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setIsLoading(true);
    apiClient.cancelRequest();
    if (instrumentQuery) {
      apiClient
        .get({ params: instrumentQuery })
        .then((res) => {
          if (res.success) {
            setInstruments(res.payload);
          } else {
            setError(res.error.message);
          }
        })
        .catch((err: Error) => setError(err.message))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [instrumentQuery]);
  return { instruments, isLoading, error };
};

export default useInstruments;
