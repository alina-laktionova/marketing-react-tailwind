import React from "react";

const Marketing = (props) => {
  const strategies = [
    {
      title: "CONTENT MARKETING",
      description:
        "Content marketing is a form of marketing focused on creating, publishing, and distributing content for a targeted audience online.",
      image: "images/content.png",
    },
    {
      title: "INBOUND MARKETING",
      description:
        "Inbound is far and away the most effective B2B marketing strategy because it leverages the strengths of the majority of the other nine strategies to attract, engage, and delight customers.",
      image: "images/inbound-marketing.png",
    },
    {
      title: "SOCIAL MEDIA",
      description:
        "Social media marketing focuses on providing users with content they find valuable and want to share across their social networks, resulting in increased visibility and website traffic.",
      image: "images/social-media.png",
    },
    {
      title: "SEARCH ENGINE OPTIMIZATION",
      description:
        "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.",
      image: "images/seo.png",
    },
  ];

  return (
    <div ref={props.marketingRef}>
      <h2 className="text-2xl md:text-4xl font-semibold">
        Want to boost your business growth?
      </h2>
      <h3 className="text-3xl md:text-6xl font-semibold mt-5 md:mt-10">
        The <span className="text-secondary">SOLUTION</span> is here..
      </h3>
      <p className="text-md md:text-xl mt-5 md:mt-10">
        Curious about what business professionals think of different marketing
        strategies. We took a look at recent survey results and reports that
        compiled data on the topic, and created a list of 10 B2B marketing
        strategies commonly recognized as successful regardless of industry.
        Here’s what we found, in no particular order:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-14 md:mt-20">
        {strategies.map((item, index) => (
          <div
            key={index}
            className="border border-primary px-5 py-7 flex flex-col space-y-6 rounded transform duration-300 hover:scale-105 group"
          >
            <h4 className="text-center text-secondary text-2xl rounded -mt-12 bg-white border border-primary font-semibold py-2">
              {item.title}
            </h4>
            <div className="flex flex-col xl:flex-row items-center space-y-5 xl:space-x-10 xl:space-y-0">
              <img src={item.image} alt={item.title} className="h-24 w-24" />
              <p className="opacity-80 text-md group-hover:opacity-100 transition">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketing;
