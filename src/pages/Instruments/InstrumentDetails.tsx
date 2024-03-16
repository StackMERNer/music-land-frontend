import { useParams } from "react-router-dom";
import useCart, { AddedProduct } from "../../hooks/useCart";
import useInstrument from "../../hooks/useInstrument";
import Cart from "./Cart";
import InstrumentDetailsCard from "./InstrumentDetailsCard";

const InstrumentDetails = () => {
  const { id } = useParams();
  const { instrument } = useInstrument(id || "");
  const { cart, setCart } = useCart();

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
  return (
    <div className="container mx-auto flex justify-center min-h-screen pt-5 pb-3 gap-4 items-baseline">
      {instrument && (
        <InstrumentDetailsCard addToCart={addToCard} instrument={instrument} />
      )}

      <div className="self-start">
        <Cart />
      </div>
    </div>
  );
};

export default InstrumentDetails;
