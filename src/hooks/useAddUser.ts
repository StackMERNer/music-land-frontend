import { AxiosError } from "axios";
import { useState } from "react";
import APIClient from "../services/apiClient";
import { Customer } from "./useUser";

function useAddUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  //   const [user,setUser] = useState<Customer | null>(Cust)
  const addUser = async (userData: any) => {
    setLoading(true);

    setError(null);
    const apiClient = new APIClient<Customer>("/customers");
    try {
      const response = await apiClient.post(userData);
      if (response.success) {
        return response.payload;
      } else {
        setError(response.error.message);
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err?.response?.data?.error?.message || "An error occurred");
      } else {
        setError("An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return { addUser, loading, error };
}

export default useAddUser;
