import { ArrowRightIcon } from "@heroicons/react/24/outline";
import data from "../../data/instruments.json";
import InstrumentCard from "../InstrumentCard/InstrumentCard";

const ShowcaseInstruments = () => {
  return (
    <section className="text-white py-8">
      <h1 className="text-center text-xl font-bold font-roboto text-gray-400 py-6">
        You May Like
      </h1>
      <div className="grid grid-cols-3 gap-y-5">
        {/* {data.slice(0, 6).map((intrument, index) => (
          <InstrumentCard instrumentObj={intrument} />
        ))} */}
      </div>
      <div className="flex  items-center justify-end p-4">
        <button className="px-4 py-1 text-sm bg-primary-yellow text-black font-semibold flex items-center gap-2 border ">
          <span className=" inline-block whitespace-nowrap">View All</span>

          <ArrowRightIcon />
        </button>
      </div>
    </section>
  );
};

export default ShowcaseInstruments;
