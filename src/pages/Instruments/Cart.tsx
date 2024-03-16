import { Button } from "@material-tailwind/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AddedProduct } from "../../hooks/useCart";
import usePlaceOrder from "../../hooks/usePlaceOrder";
import useUser from "../../hooks/useUser";
import { auth } from "../../services/firebase";
import { Order } from "../../hooks/useOrders";

const Cart = ({ items }: { items: AddedProduct[] }) => {
  const calculateTotal = (items: AddedProduct[]) => {
    return items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  const [userState] = useAuthState(auth);
  const { user } = useUser(userState?.uid);
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
      items: items,
    };

    const result = await placeOrder(order);
    console.log("result", result);
  };

  if (error) {
    toast.error(error);
  }

  return (
    <div className="text-white p-4 ">
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
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
              <button className="text-red-600">Remove</button>
            </div>
          </div>
        ))}
      </div>
      {error && <div className="text-center text-red-700 py-4">{error}</div>}
      <div className="py-3 mt-4">
        <p>Total: ৳ {calculateTotal(items)}</p>
        <Button
          onClick={handlePlaceOrder}
          loading={loading}
          className="w-full bg-green-light text-black px-3 py-3 rounded-lg mt-4 "
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default Cart;
