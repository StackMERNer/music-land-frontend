import { useEffect, useState } from "react";
import APIClient from "../services/apiClient";

export interface Customer {
  _id: string;
  uid: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const useUser = (uid:string) => {
  const [user, setUser] = useState<Customer | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const apiClient = new APIClient<Customer>(`/customers/${uid}`);
    setLoading(true);
    apiClient
      .get()
      .then((res) => {
        // console.log(res);
        if (res.success) {
          setUser(res.payload);
        } else {
          setError(res.error.message);
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [uid]);
  return { user, loading, error };
};

export default useUser;
