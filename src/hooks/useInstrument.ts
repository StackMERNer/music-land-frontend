import { useEffect, useState } from "react";
import APIClient from "../services/apiClient";
import { Instrument } from "./useInstruments";

const useInstrument = (instrumentId: string) => {
  const [instrument, setInstrument] = useState<Instrument | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const apiClient = new APIClient<Instrument>(`/instruments/${instrumentId}`);
  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get()
      .then((res) => {
        if (res.success) {
          setInstrument(res.payload);
        } else {
          setError(res.error.message);
        }
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instrumentId]);

  return { instrument, isLoading, error };
};

export default useInstrument;
