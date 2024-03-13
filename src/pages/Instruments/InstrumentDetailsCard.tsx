import { useState } from "react";
import { Instrument } from "../../hooks/useInstruments";

const InstrumentDetailsCard = ({ instrument }: { instrument: Instrument }) => {
  const {
    brand,
    category,
    description,
    images,
    keywords,
    model,
    name,
    price,

    specifications,
  } = instrument;
  const [mainImageIndex, setMainImageIndex] = useState(0);
  return (
    <div className="max-w-[400px] px-3 py-8 border border-gray-600 rounded-lg text-white font-roboto">
      <div className="grid grid-cols-[3fr,1fr] gap-2">
        <div>
          <img
            className="rounded-lg w-full h-full"
            src={images[mainImageIndex]}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          {images.map((imageSrc, i) => (
            <img
              onClick={() => setMainImageIndex(i)}
              className={`rounded-lg cursor-pointer ${
                mainImageIndex === i ? " border-2 border-green-light " : ""
              }`}
              key={i}
              src={imageSrc}
            />
          ))}
        </div>
      </div>
      <div className="py-3  flex items-center gap-2">
        <h1 className="text-xl font-bold">{name}</h1>
        <span className="inline-block px-2 py-1 rounded-full bg-green-100 text-dark-solid text-[12px]">
          {model}
        </span>
      </div>
      <div className="capitalize py-2">
        <span>brand : {brand}</span>
      </div>
      <div>
        <h1 className="text-xl font-semibold">৳ {price}</h1>
        {}
      </div>
      <p className="py-3">{description}</p>
      <ul className="list-disc list-inside capitalize">
        {Object.keys(specifications).map((key, index) => (
          <li key={index}>
            <span>{key.split("_").join(" ")}</span> :{" "}
            <span>{specifications[key]}</span>
          </li>
        ))}
      </ul>
      <div className="py-2 flex gap-3 ">
        <button className="px-2 py-2  w-full rounded bg-white text-black font-semibold">
          Order Now
        </button>
        <button className="px-2 py-2  w-full bg-[#34D399] text-black rounded">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default InstrumentDetailsCard;
