import React from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Home",
      path: "/",
      icon: "ri-home-smile-fill",
    },
    {
      title: "About",
      path: "/about",
      icon: "ri-information-fill",
    },
    {
      title: "Clients",
      path: "/clients",
      icon: "ri-user-fill",
    },
    {
      title: "Contact",
      path: "/contact",
      icon: "ri-mail-fill",
    },
  ];

  return (
    <div>
      <div className="pb-40 lg:pb-52 text-primary">{children}</div>

      <div className="fixed bottom-0 md:bottom-2 lg:bottom-10 left-0 right-0 z-20">
        <div className="flex w-full justify-center">
          {menuItems.map((item, index) => (
            <div key={index} className="flex flex-col justify-end items-center">
              {location.pathname === item.path && (
                <div className="hidden md:flex flex-col items-center">
                  <div className="h-5 w-10 bg-primary rounded-t-full" />
                  <div className="h-5 w-20 bg-primary rounded-t-full text-center">
                    <i className={`text-md text-white ${item.icon}`} />
                  </div>
                </div>
              )}
              <div
                key={index}
                className={`bg-primary flex items-center px-4 lg:px-16
              ${index === 0 && "rounded-l"} 
              ${index === menuItems.length - 1 && "rounded-r"}`}
              >
                <Link
                  to={item.path}
                  className="text-secondary font-xl h-full w-full px-4 py-5 flex items-center"
                >
                  {location.pathname !== item.path && (
                    <i className={`text-secondary text-md mr-2 ${item.icon}`} />
                  )}
                  <p
                    className={`${
                      location.pathname !== item.path ? "hidden" : "block"
                    } md:block`}
                  >
                    {item.title}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
