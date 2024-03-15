import { AxiosError } from "axios";
import { useState } from "react";
import APIClient from "../services/apiClient";
import useCart from "./useCart";
import { Order } from "./useOrders";


const usePlaceOrder = () => {
  const apiClient = new APIClient<Order>("/orders");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { resetCart } = useCart();
  const placeOrder = async (order: Order) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.post(order);
      if (response.success) {
        return response.payload;
      } else {
        resetCart();
        setError(response.error.message);
      }
    } catch (error) {
      console.log("catch", error);
      if (error instanceof AxiosError)
        setError(
          error.response?.data?.error?.message || "Error While Placing order"
        );
      else setError("Error While Placing order");
    } finally {
      setLoading(false);
    }
  };

  return { placeOrder, loading, error };
};

export default usePlaceOrder;
