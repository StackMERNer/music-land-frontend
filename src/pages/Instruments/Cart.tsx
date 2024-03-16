import { Button } from "@material-tailwind/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { GiShoppingCart } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useCart, { AddedProduct } from "../../hooks/useCart";
import { Order } from "../../hooks/useOrders";
import usePlaceOrder from "../../hooks/usePlaceOrder";
import useUser from "../../hooks/useUser";
import { auth } from "../../services/firebase";

const Cart = () => {
  const { cart, resetCart, setCart, updateLocalStorage } = useCart();
  const calculateTotal = (cart: AddedProduct[]) => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const [userState] = useAuthState(auth);
  const { user } = useUser(userState?.uid ?? "");
  const navigate = useNavigate();
  const { placeOrder, loading, error } = usePlaceOrder();
  const handlePlaceOrder = async () => {
    if (!user) {
      navigate("/signIn");
      return;
    }
    const order: Order = {
      customerId: user._id,
      customerCurrentInfo: {
        name: user.name,
        phone: user.phone,
        email: user.email,
        address: user.address,
      },
      items: cart,
    };

    const result = await placeOrder(order);
    if (result) {
      toast.success("Order Placed successfully!");
      setTimeout(() => {
        resetCart();
        toast.info("Cart Reseted!");
      }, 1000);
    }
  };

  if (error) {
    toast.error(error);
  }
  const handleRemoveItem = (id: string) => {
    const restItems = cart.filter((item) => item.id !== id);
    setCart(restItems);
    updateLocalStorage(restItems);
  };

  return (
    <div className="text-white p-4 max-w-[400px] mx-auto min-h-screen">
      {!(cart.length > 0) && (
        <div className="  flex justify-center flex-col items-center gap-3 mt-5">
          <GiShoppingCart size={100} />
          <p>Your Cart Is Empty</p>
        </div>
      )}
      <div className="flex flex-col gap-2">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex justify-between w-full gap-3 border border-gray-400 p-4 rounded max-w-[400px]"
          >
            <img className="w-[100px]" src={item.image} alt="" />
            <div className="flex flex-col justify-between">
              <p>{item.name}</p>
              <p>Qty. {item.quantity}</p>
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="text-xl font-semibold">৳ {item.price}</h1>
              <button
                onClick={() => handleRemoveItem(item.id ?? "")}
                className="text-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      {error && <div className="text-center text-red-700 py-4">{error}</div>}
      {cart.length > 0 && (
        <div className="py-3 mt-4">
          <p>Total: ৳ {calculateTotal(cart)}</p>
          <Button
            onClick={handlePlaceOrder}
            loading={loading}
            className="w-full bg-green-light text-black px-3 py-3 rounded-lg mt-4 "
          >
            Place Order
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
