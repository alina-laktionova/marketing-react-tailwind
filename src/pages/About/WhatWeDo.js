import React from "react";

const WhatWeDo = () => {
  const items = [
    {
      title: "Web Development",
      image: "images/web.png",
      description:
        "Web development is the work involved in developing a website for the Internet or an intranet.",
    },
    {
      title: "Mobile Development",
      image: "images/mobile.png",
      description:
        "Mobile development is the work involved in developing a mobile application for mobile devices such as smartphones, tablets, and feature phones.",
    },
    {
      title: "Digital Marketing",
      image: "images/digital-marketing.png",
      description:
        "Digital marketing is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
    },
    {
      title: "Graphic Design",
      image: "images/design.png",
      description:
        "Graphic design is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
    },
  ];

  return (
    <div>
      <h2 className="text-secondary text-4xl md:text-7xl text-center font-semibold mt-10">
        What We Do?
      </h2>
      <div className="h-60 md:h-96 w-full bg-primary mt-12" />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mx-4 md:mx-32 -mt-48">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-5 bg-white border shadow md:shadow-xl flex flex-col items-center space-y-5 transform hover:scale-105 duration-300"
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

export default WhatWeDo;
