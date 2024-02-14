import Slider from "react-slick";

const OurCommitments = () => {
  const commits = [
    {
      title: "Safe Delivery",
      details:
        "We are committed to ensuring that your musical instruments are delivered safely and securely to your doorstep.",
    },
    {
      title: "Quality Products",
      details:
        "We take pride in offering high-quality musical instruments sourced from reputable manufacturers.",
    },
    {
      title: "Customer Satisfaction",
      details:
        "Your satisfaction is our top priority. We strive to provide exceptional customer service and support.",
    },
    {
      title: "Expert Advice",
      details:
        "Our team of experts is here to provide you with knowledgeable guidance and assistance in choosing the perfect musical instrument.",
    },
    {
      title: "Wide Selection",
      details:
        "Explore our extensive collection of musical instruments to find  exactly what you're looking for.",
    },
  ];
  return (
    <section className="focus-section">
      <h1 className="text-center text-xl font-bold font-roboto text-gray-400 pb-6">
        What you can expect from us
      </h1>
      <div>
        <Slider
          speed={400}
          slidesToScroll={1}
          variableWidth={true}
          arrows={true}
          rows={1}
          responsive={[
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 2,
                arrows: false,
              },
            },
            {
              breakpoint: 340,
              settings: {
                slidesToShow: 1,
                arrows: false,
              },
            },
          ]}
        >
          {commits.map((commit, index) => (
            <div className="py-2">
              <div
                key={index}
                className="shadow-[0_0_2px]  shadow-green-100   flex flex-col items-center  gap-3 bg-[#0B122D] rounded-lg w-[220px] sm:mx-3 mx-2 p-4 h-[200px]"
              >
                <h1 className="font-bold font-roboto text-gray-300 text-left w-full flex gap-1 items-center">
                  <span className="w-6 h-6 bg-dark-soft  rounded-full  flex justify-center items-center text-gray-400 text-sm">
                    {index + 1}
                  </span>
                  <span className="whitespace-nowrap">{commit.title}</span>
                </h1>
                <p className="text-gray-400 text-sm">{commit.details}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurCommitments;
