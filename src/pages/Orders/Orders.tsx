import { useParams } from "react-router-dom";
import useOrders from "../../hooks/useOrders";

const Orders = () => {
  const { id } = useParams();
  const { orders, error } = useOrders(id ?? "");
  //   console.log(orders);
  return (
    <section className="min-h-screen text-white container mx-auto p-5">
      {error && <div className="text-red">{error}</div>}
      {orders.map(({ items }, index) => (
        <div
          key={index}
          className="border border-gray-700 p-4 rounded-lg flex flex-col gap-3 items-center justify-center"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 justify-between border w-full max-w-[300px] p-3"
            >
              <img className="w-[60px] rounded-lg" src={item.image} alt="" />
              <p>{item.name}</p>
              <p>Qty. {item.quantity}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Orders;
