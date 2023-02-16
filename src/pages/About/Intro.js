import React from "react";

const Intro = () => {
  return (
    <div className=" ">
      <div className="w-full h-screen absolute lg:-top-1/4 lg:rotate-12 lg:right-10 rounded-b-2xl bg-orange-gradient" />
      <div className="relative z-10 h-screen lg:grid items-center justify-center grid-cols-2 px-4 pt-20 lg:pt-0">
        <div className="flex justify-self-center max-w-lg w-full">
          <img src="images\about-intro.png" alt="about" />
        </div>
        <div className="max-w-max text-white uppercase mt-20 lg:mt-0 mx-auto lg:mx-0">
          <h1 className="text-5xl lg:text-8xl font-semibold">Marketing</h1>
          <hr />
          <p className="text-md mt-5 opacity-80">Better | Stronger | Wiser</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
