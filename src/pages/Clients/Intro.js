import React from "react";

const Intro = () => {
  return (
    <div className="h-screen bg-primary lg:grid grid-cols-2 items-center p-4">
      <div className="max-w-md lg:max-w-xl mx-auto">
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_njobaah2.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        />
      </div>
      <div>
        <h1 className="text-white text-4xl md:text-7xl font-semibold text-center lg:text-left">
          We <span className="text-secondary">work</span> together
          <br /> with our <span className="text-green-700">clients</span>
        </h1>
      </div>
    </div>
  );
};

export default Intro;
