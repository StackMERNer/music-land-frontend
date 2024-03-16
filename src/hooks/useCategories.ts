import { useEffect, useState } from "react";
import APIClient from "../services/apiClient";

export interface Category {
  category: string;
  subCategories: string[];
}

const apiClient = new APIClient<Category[]>("/categories");

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get()
      .then((res) => {
        if (res.success) {
          setCategories(res.payload);
        } else {
          setError(res.error.message);
        }
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return { categories, isLoading, error };
};

export default useCategories;
