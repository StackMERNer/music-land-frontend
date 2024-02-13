import brand1 from "./../../assets/icons/cort.png";
import brand2 from "./../../assets/icons/fender.png";
import brand3 from "./../../assets/icons/gibson.png";
import brand4 from "./../../assets/icons/martin.png";
import brand5 from "./../../assets/icons/yamha.png";
import "./popularBrands.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const PopularBrands = () => {
  const brands = [
    {
      src: brand1,
    },
    {
      src: brand2,
    },
    {
      src: brand3,
    },
    {
      src: brand4,
    },
    {
      src: brand5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
  };
  return (
    <>
      <Slider
        arrows={false}
        autoplaySpeed={0}
        centerMode={false}
        className="text-white hidden sm:block"
        slidesToShow={4}
        {...settings}
      >
        {brands.map((brand, index) => (
          <div key={index} className="brand">
            <img src={brand.src} className="w-[100px]" alt="brand" />
          </div>
        ))}
      </Slider>
      <Slider
        arrows={false}
        autoplaySpeed={0}
        centerMode={false}
        className="text-white sm:hidden"
        slidesToShow={2}
        {...settings}
      >
        {brands.map((brand, index) => (
          <div key={index} className="brand">
            <img src={brand.src} className="w-[100px]" alt="brand" />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default PopularBrands;
