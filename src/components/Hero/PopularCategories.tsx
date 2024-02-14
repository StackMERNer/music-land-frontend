import cat1 from "./../../assets/CategoryIcons/guitar.png";
import cat2 from "./../../assets/CategoryIcons/drum-set.png";
import cat3 from "./../../assets/CategoryIcons/grand-piano.png";
import cat4 from "./../../assets/CategoryIcons/harmonium.png";
import cat5 from "./../../assets/CategoryIcons/saxophone.png";
import cat6 from "./../../assets/CategoryIcons/violin.png";
import Slider from "react-slick";

const PopularCategories = () => {
  const categories = [
    {
      icon: cat1,
      title: "Guitars",
    },
    {
      icon: cat2,
      title: "Drums",
    },
    {
      icon: cat3,
      title: "Pianos",
    },
    {
      icon: cat4,
      title: "Harmonium",
    },
    {
      icon: cat5,
      title: "Saxophone",
    },
    {
      icon: cat6,
      title: "Violines",
    },
  ];

  return (
    <section className="px-5">
      <h1 className="text-center text-xl font-bold font-roboto text-gray-400 py-6">
        Popular Categories
      </h1>
      <Slider
        speed={400}
        slidesToScroll={1}
        variableWidth={true}
        responsive={[
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 340,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {categories.map((category, index) => (
          <>
            <div key={index} className="py-1">
              <span
                className={`h-[2px]  block  mt-1 bg-gradient-to-br from-yellow-500 via-green-light [clip-path:polygon(0%_0%,50%_50%,100%_0%)] w-[80%] mx-auto`}
              ></span>
              <div className="shadow-[0_0_2px]  shadow-green-100  py-4 flex flex-col items-center justify-center gap-3 bg-[#0B122D] rounded-lg min-w-[120px] sm:mx-3 mx-2">
                <img src={category.icon} alt="category" />
                <h3 className="text-sm text-gray-500">{category.title}</h3>
              </div>
            </div>
          </>
        ))}
      </Slider>
      {/* <div className="flex gap-4 items-stretch text-white justify-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className="shadow-[0_0_2px]  shadow-green-100 px-10 py-4 flex flex-col items-center justify-center gap-3 bg-[#0B122D] rounded-lg"
          >
            <img src={category.icon} alt="category" />
            <h3 className="text-sm text-gray-500">{category.title}</h3>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default PopularCategories;
