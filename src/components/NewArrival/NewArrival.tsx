import drums from "./../../assets/drums.jpg";

const NewArrival = () => {
  return (
    <section className="py-3">
      <h1 className="text-center text-xl font-bold font-roboto text-gray-400 ">
        New Arrival
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 py-7 px-5 items-center gap-5">
        <div className="w-full h-[400px]  flex justify-center items-center relative">
          <span className="h-[80px] w-[80px] bg-green-light opacity-30 absolute rounded-lg z-0 right-[5%] bottom-[25%] sm:bottom-[10%]"></span>
          <span className="h-[80px] w-[80px] bg-green-light opacity-30 absolute rounded-lg z-0 top-[20%] sm:top-[10%]  left-[5%]"></span>
          <div className="shadow-[0_0_4px] shadow-primary-yellow rounded-lg overflow-hidden  w-[80%] z-[1]">
            <img src={drums} alt="" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-300">Yamaha Drums Set</h1>
          <h3 className="text-green-light italic font-semibold my-2">
            Yamha Stage Custom Hip 4pc Shell
          </h3>
          <p className="font-stylish clear-start text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            atque vero, iure veritatis, ad beatae praesentium laudantium
            reprehenderit debitis commodi quam id temporibus dicta..
          </p>
          <p className="text-gray-200 text-2xl font-bold py-3">$ 688 </p>
          <div className="flex gap-3 flex-col sm:flex-row">
            <button className="px-5 py-2  bg-primary-yellow font-roboto text-sm font-semibold">
              Add to cart
            </button>
            <button className="px-5 py-2 border  border-primary-yellow font-roboto text-sm font-semibold text-gray-300 ">
              More Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
