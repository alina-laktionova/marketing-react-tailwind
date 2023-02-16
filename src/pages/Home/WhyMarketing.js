import React from "react";

const WhyMarketing = () => {
  return (
    <div className="mt-16 md:mt-32 space-y-10 md:space-y-12">
      <h2 className="text-center text-5xl md:text-7xl font-semibold">
        Why <span className="text-secondary">Marketing</span>
      </h2>
      <div className="max-w-lg mx-auto">
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_75zu2npw.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        />
      </div>
      <p className="text-md ">
        Do you know what your customers want? Do you think your customers trust
        your products? When was the last time you saw a customer tweeting about
        your product or service? Was it a complaint or compliment?
      </p>

      <h3 className="text-2xl md:text-4xl font-semibold">
        The answers to all these questions lie in marketing.
      </h3>
      <p className="text-md">
        How you market your business determines if the enterprise will be
        successful or not. Marketing is a tool used to create and maintain
        demand, relevance, reputation, competition and more. Without it, your
        business is likely to close down due to lack of sales.
      </p>
    </div>
  );
};

export default WhyMarketing;
