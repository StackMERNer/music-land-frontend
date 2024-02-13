import heroImage from "./../../assets/hero.png";
import "./hero.css";
const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 px-3 items-center py-10 grid-cols-1 md:gap-4 gap-10">
      <div className="text-white order-1 ">
        <h1 className=" md:text-3xl text-xl leading-snug font-bold">
          All The <br />
          Musical Instruments <br /> In One Shop
        </h1>
        <p className="text-gray-600 text-sm mt-5 font-stylish">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
          minus quo voluptatum eos voluptatem nihil saepe doloremque, corrupti
          incidunt repellendus accusamus voluptate fuga illum unde praesentium,
          quos sapiente explicabo iste.
        </p>
        <div className="my-5 flex gap-4">
          <button className="px-4 py-1 text-sm bg-primary-yellow text-black font-semibold">
            Shop Now
          </button>
          <button className="px-4 py-1 text-sm border font-semibold border-gray-700">
            Learn More
          </button>
        </div>
      </div>
      <div className="md:order-1 order-0 flex justify-center items-center relative ">
        <div className="flex  justify-center items-center p-4 md:h-[280px] md:w-[280px] h-[200px] w-[200px]">
          <div className="h-full w-full rounded-full bg-green-dark flex justify-center items-center shadow-[0_0_40px] shadow-green-light sound-box">
            <div className="h-[80%] w-[80%] rounded-full bg-green-dark shadow-[0_0_30px] shadow-green-light flex justify-center items-center">
              <div className="h-[80%] w-[80%] rounded-full bg-green-dark shadow-[0_0_30px] shadow-green-light flex justify-center items-center">
                <div className="h-[70%] w-[70%] rounded-full bg-green-dark shadow-[0_0_30px] shadow-green-light flex justify-center items-center"></div>
              </div>
            </div>
          </div>
          <span className="md:h-[80px] md:w-[80px] h-[50px] w-[50px] bg-lime-50 bg-opacity-10 absolute z-[1] rounded-full bottom-0 left-20"></span>
          <span className="md:h-[50px] md:w-[50px] h-[30px] w-[30px] bg-lime-50 bg-opacity-10 absolute z-[1] rounded-full bottom-10 right-20"></span>
          <img
            className="lg:h-[400px] h-[300px] absolute"
            src={heroImage}
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
