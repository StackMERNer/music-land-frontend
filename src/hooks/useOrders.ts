import { useEffect, useState } from "react";
import APIClient from "../services/apiClient";
import { AddedProduct } from "./useCart";
export interface Order {
  customerId:string;
  customerCurrentInfo: {
    name: string;
    phone: string;
    email: string;
    address: string;
  };
  items: AddedProduct[];
}

const useOrders = (userId: string) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const apiClient = new APIClient<Order[]>(`/orders/${userId}`);
    apiClient
      .get()
      .then((res) => {
        if (res.success) {
          setOrders(res.payload);
        } else {
          setError(res.error.message);
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [userId]);
  return { orders, loading, error };
};

export default useOrders;
