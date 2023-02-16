import React from "react";
import { Link } from "react-router-dom";

const Address = () => {
  const details = [
    {
      title: "Address:",
      info: "13 Some Street, New City",
      icon: "ri-map-pin-fill",
    },
    {
      title: "Mail:",
      info: "info@gmail.com",
      icon: "ri-mail-fill",
    },
    {
      title: "Phone:",
      info: "+123 123-4567",
      icon: "ri-phone-fill",
    },
  ];

  const socialLinks = [
    { icon: "ri-facebook-fill", link: "https://www.facebook.com/" },
    { icon: "ri-youtube-fill", link: "https://www.youtube.com/" },
    { icon: "ri-linkedin-fill", link: "https://www.linkedin.com/" },
    { icon: "ri-instagram-fill", link: "https://www.instagram.com/" },
  ];

  return (
    <div className="bg-primary rounded-2xl flex-col space-y-10 text-white p-10 col-span-1">
      <h2 className="text-3xl font-semibold">Get in touch</h2>
      {details.map((item, index) => (
        <div key={index} className="flex items-center space-x-5">
          <div className="h-12 w-12 bg-white bg-opacity-10 rounded-xl flex items-center justify-center">
            <i className={`${item.icon} text-secondary`} />
          </div>
          <div>
            <p className="font-semibold text-md">{item.title}</p>
            <p className="text-sm">{item.info}</p>
          </div>
        </div>
      ))}
      <div className="flex space-x-5 mx-auto w-fit">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            to={link.link}
            className="h-12 w-12 flex items-center justify-center bg-white bg-opacity-10 rounded-full"
          >
            <i className={`${link.icon} text-white`} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Address;
