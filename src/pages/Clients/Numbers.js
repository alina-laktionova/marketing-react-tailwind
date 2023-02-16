import React from "react";

const Numbers = () => {
  const numbers = [
    {
      number: 152,
      name: "Clients",
    },
    {
      number: 485,
      name: "Projects",
    },
    {
      number: 24,
      name: "Locations",
    },
  ];

  return (
    <div className="md:px-32 mt-16 md:mt-28">
      <div className="bg-secondary flex justify-between py-5 px-6 md:px-16 rounded">
        {numbers.map((num, index) => (
          <div key={index} className="flex flex-col space-y-5 text-white">
            <p className="text-5xl lg:text-9xl">{num.number}</p>
            <p className="text-xl lg:text-2xl">{num.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
