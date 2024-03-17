import { useParams } from "react-router-dom";
import useCart, { AddedProduct } from "../../hooks/useCart";
import useInstrument from "../../hooks/useInstrument";
import useReviews from "../../hooks/useReviews";
import InstrumentDetailsCard from "./InstrumentDetailsCard";
import ReviewList from "./ReviewList";
import { toast } from "react-toastify";

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
      toast.success("Item added to cart!", { autoClose: 2000 });
    } else {
      toast.info("Item already added to cart!", { autoClose: 2000 });
    }
  };
  const { reviews } = useReviews();
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen pt-5 pb-3 gap-4 ">
      {instrument && (
        <InstrumentDetailsCard addToCart={addToCard} instrument={instrument} />
      )}
      <div className=" h-full">
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
};

export default InstrumentDetails;
