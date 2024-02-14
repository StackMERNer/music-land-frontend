import brand1 from "./../../assets/icons/cort.png";
import brand2 from "./../../assets/icons/fender.png";
import brand3 from "./../../assets/icons/gibson.png";
import brand4 from "./../../assets/icons/martin.png";
import brand5 from "./../../assets/icons/yamha.png";

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
    speed: 6000,
    autoplay: true,
  };
  return (
    <>
      <Slider
        arrows={false}
        cssEase="linear"
        autoplaySpeed={0}
        centerMode={false}
        className="text-white items-center gap-3 flex px-5"
        slidesToShow={6}
        slidesToScroll={1}
        initialSlide={0}
        variableWidth={true}
        responsive={[
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 340,
            settings: {
              slidesToShow: 2,
            },
          },
        ]}
        {...settings}
      >
        {brands.map((brand, index) => (
          <div
            key={index}
            className="mx-5 flex justify-center items-center h-full"
          >
            <img src={brand.src} className="w-[100px] h-[60px]  " alt="brand" />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default PopularBrands;
