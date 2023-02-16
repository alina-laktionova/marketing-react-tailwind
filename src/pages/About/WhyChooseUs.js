import React from "react";

const WhyChooseUs = () => {
  const items = [
    {
      title: "Innovative and Passionate",
      image: "images/innovative.png",
      description:
        "We are a team of creative and passionate designers and developers. We are fully aware of the importance of designing for the digital age and strive to deliver the best result for our clients.",
    },
    {
      title: "Good Return on Investment",
      image: "images/cash-flow.png",
      description:
        "Working with us means providing your business with great savings. All our digital marketing and web development packages are being offered at competitive prices",
    },
    {
      title: "Seamless Customer Support",
      image: "images/customer-support.png",
      description:
        "We are always here to help you with any questions you may have. We are always here to help you with any questions you may have. We are always here to help you with any questions you may have.",
    },
  ];

  return (
    <div className="lg:mx-32 mt-16 md:mt-40 md:border md:shadow">
      <div className="bg-primary h-32 md:h-60 w-full flex justify-center items-center">
        <h2 className="text-4xl md:text-7xl font-semibold text-white">
          Why Choose Us?
        </h2>
      </div>
      <div className="md:grid grid-cols-3 gap-5 p-5 space-y-5 md:space-y-0">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-5 bg-white shadow flex flex-col items-center space-y-5 transform hover:scale-105 duration-300 rounded-md border-t-4 border-secondary"
          >
            <img src={item.image} alt={item.title} className="h-20 w-20" />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
