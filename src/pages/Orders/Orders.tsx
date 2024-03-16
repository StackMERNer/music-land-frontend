import { useParams } from "react-router-dom";
import useOrders from "../../hooks/useOrders";

const Orders = () => {
  const { id } = useParams();
  const { orders, error } = useOrders(id ?? "");
  return (
    <section className="min-h-screen text-white container mx-auto p-5">
      {error && <div className="text-red">{error}</div>}
      <div className="grid lg:grid-cols-3 md:grid-cols-2">
        {orders.map(({ items, orderStatus, orderedAt }, index) => (
          <div
            key={index}
            className=" p-4 rounded-lg flex flex-col gap-3 items-center justify-center "
          >
            <div className="relative overflow-x-auto rounded-lg bg-gray-900 text-white">
              <div className="flex items-center gap-2 justify-between p-4">
                <p>
                  {new Date(orderedAt as string).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <p className="rounded px-2 text-xs py-1 self-start bg-green-300">
                  {orderStatus}
                </p>{" "}
              </div>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 ">
                      Instruemnt
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Qty
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr className=" dark:bg-gray-800 text-white" key={item.id}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white flex items-center gap-2 text-white"
                      >
                        <img
                          src={item.image}
                          className="w-[40px] rounded"
                          alt=""
                        />{" "}
                        <span>{item.name}</span>
                      </th>
                      <td className="px-6 py-4">{item.quantity}</td>
                      <td className="px-6 py-4">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-100 text-white">
                  <tr className="font-semibold text-black">
                    <th scope="row" className="px-6 py-3 text-base">
                      Total
                    </th>
                    <td className="px-6 py-3">
                      {items.reduce((acc, item) => acc + item.quantity, 0)}
                    </td>
                    <td className="px-6 py-3">
                      {items
                        .reduce(
                          (acc, item) => acc + item.quantity * item.price,
                          0
                        )
                        .toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Orders;
