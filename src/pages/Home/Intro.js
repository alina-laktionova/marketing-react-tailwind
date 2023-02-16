import React from "react";

const Intro = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:h-screen items-center mt-12 md:mt-0">
      <div className="flex flex-col space-y-10">
        <h1 className="text-5xl md:text-7xl font-semibold ">
          The best <br />
          <span className="text-secondary">marketing</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold ">
          Doesn't feel like marketing
        </h2>
        <button
          onClick={props.onGetStarted}
          className="px-8 py-3 md:px-16 md:py-5 bg-secondary text-xl text-white max-w-max hover:bg-primary rounded transition"
        >
          Get Started
        </button>
      </div>

      <div className="max-w-xl mx-auto">
        <lottie-player
          src="https://assets2.lottiefiles.com/packages/lf20_q4m6E9.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Intro;
