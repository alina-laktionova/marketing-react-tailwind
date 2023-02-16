import React, { useRef } from "react";
import Intro from "./Intro";
import Marketing from "./Marketing";
import WhyMarketing from "./WhyMarketing";

const Home = () => {
  const marketingRef = useRef(null);

  const handleClickScroll = () => {
    const element = marketingRef.current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="px-4 md:px-12 lg:px-32">
      <Intro onGetStarted={handleClickScroll} />
      <Marketing marketingRef={marketingRef} />
      <WhyMarketing />
    </div>
  );
};

export default Home;
