import Hero from "../Hero/Hero";
import PopularBrands from "../PopularBrands/PopularBrands";
import PopularCategories from "../PopularCategories/PopularCategories";
import NewArrival from "../NewArrival/NewArrival";
import OurCommitments from "../OurCommitments/OurCommitments";

const Home = () => {
  return (
    <div className="container mx-auto p-5">
      <Hero />
      <PopularBrands />
      <PopularCategories />
      <NewArrival />
      <OurCommitments />
    </div>
  );
};

export default Home;
