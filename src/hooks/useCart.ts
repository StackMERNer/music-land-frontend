import { useEffect, useState } from "react";

export interface AddedProduct {
  id?: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}
const useCart = () => {
  const [cart, setCart] = useState<AddedProduct[]>([]);
  useEffect(() => {
    const item = localStorage.getItem("cart");
    if (item) {
      setCart(JSON.parse(item));
    }
  }, []);
  const resetCart = () => {
    localStorage.removeItem("cart");
  };
  return { cart, setCart,resetCart };
};

export default useCart;
