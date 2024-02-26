import { useEffect, useState } from "react";
import APIClient from "../services/apiClient";

export interface Category {
  category: string;
  subCategories: string[];
}

const apiClient = new APIClient<Category>("/categories");

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get()
      .then((res) => setCategories(res.results))
      .catch((err: Error) => setError(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return { categories, isLoading, error };
};

export default useCategories;
