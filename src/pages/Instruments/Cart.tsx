import { AddedProduct } from "../../hooks/useCart";

const Cart = ({ items }: { items: AddedProduct[] }) => {
  return (
    <div className="text-white p-4 self-start">
      
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between w-full gap-3 border border-gray-400 p-4 rounded-lg max-w-[400px]"
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
      <div className="py-3 mt-4">
        <p>Total: ৳ {calculateTotal(items)}</p>
        <button className="w-full bg-green-light text-black px-3 py-3 rounded-lg mt-4">
          Place Order
        </button>
      </div>
    </div>
  );
};

const calculateTotal = (items: AddedProduct[]) => {
  return items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
};

export default Cart;
