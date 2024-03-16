import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import useCart, { AddedProduct } from "../../hooks/useCart";
import useInstrument from "../../hooks/useInstrument";
import useOrders from "../../hooks/useOrders";
import useUser from "../../hooks/useUser";
import { auth } from "../../services/firebase";
import Cart from "./Cart";
import InstrumentDetailsCard from "./InstrumentDetailsCard";

const InstrumentDetails = () => {
  const { id } = useParams();
  const { instrument } = useInstrument(id || "");
  // const [cart, setCart] = useState<AddedProduct[]>([]);
  const { cart, setCart } = useCart();
  const [gUser] = useAuthState(auth);
  const { user } = useUser(gUser?.uid);
  const addToCard = () => {
    const selectedItem = cart.find((item) => item.id === instrument?._id);
    if (!selectedItem) {
      const newItem: AddedProduct = {
        name: instrument?.name as string,
        price: instrument?.price as number,
        quantity: 1,
        image: instrument?.images[0] as string,
        id: instrument?._id,
      };

      setCart([...cart, newItem]);
      localStorage.setItem("cart", JSON.stringify([...cart, newItem]));
    }
  };
  const { orders } = useOrders(user?._id ?? "");
  return (
    <div className="container mx-auto flex justify-center min-h-screen pt-5 pb-3 gap-4 items-baseline">
      {instrument && (
        <InstrumentDetailsCard addToCart={addToCard} instrument={instrument} />
      )}

      <div className="self-start">
        <div className="text-white">
          {orders.map((order, i) => (
            <div key={i}>
              {order.items.map((item, i) => (
                <div key={i}>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <Cart items={cart} />
      </div>
    </div>
  );
};

export default InstrumentDetails;
