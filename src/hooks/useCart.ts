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
  return { cart, setCart };
};

export default useCart;
