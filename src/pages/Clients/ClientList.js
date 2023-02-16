import React from "react";
import { Link } from "react-router-dom";

const ClientList = () => {
  const clientsData = [
    {
      name: "Twitter",
      logo: "https://res.cloudinary.com/dalio9zkg/image/upload/v1676534466/Marketing%20course%20project/twitter_mmsrww.png",
      url: "https://twitter.com/",
      description:
        "Twitter is a social networking service that enables users to send and read short 140-character messages called “tweets”.",
    },
    {
      name: "Spotify",
      logo: "https://res.cloudinary.com/dalio9zkg/image/upload/v1676534466/Marketing%20course%20project/spotify_udvlnd.png",
      url: "https://open.spotify.com/",
      description:
        "Spotify is a music streaming service that offers a wide range of music genres. It was created by Swedish computer programmer and programmer Johan Liljegren in 2007.",
    },
    {
      name: "Instagram",
      logo: "https://res.cloudinary.com/dalio9zkg/image/upload/v1676534465/Marketing%20course%20project/instagram_d0stkk.png",
      url: "https://www.instagram.com/",
      description:
        "Instagram is a photo-sharing, video-sharing and communication service that is owned and operated by Facebook, Inc. It was created by Kevin Systrom and Mike Krieger, and launched in October 2010.",
    },
  ];

  const getClientCard = (clientData, index) => {
    return (
      <Link
        key={index}
        to={clientData.url}
        className="bg-white shadow-lg p-5 w-full max-w-lg space-y-5 rounded-lg transform hover:scale-105 duration-300 mx-auto"
      >
        <div className="flex items-center">
          <img
            src={clientData.logo}
            alt={clientData.name}
            className="w-20 h-20"
          />
          <h3 className="font-semibold text-2xl text-center w-full px-5">
            {clientData.name}
          </h3>
        </div>
        <p>{clientData.description}</p>
      </Link>
    );
  };

  return (
    <div>
      <div className="bg-primary h-36 rounded-b-3xl lg:rounded-b-full" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 -mt-32 mx-4 lg:mx-32">
        {clientsData.map((client, index) => getClientCard(client, index))}
      </div>
    </div>
  );
};

export default ClientList;
