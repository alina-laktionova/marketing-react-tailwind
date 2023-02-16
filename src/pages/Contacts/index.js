import React from "react";
import Address from "./Address";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      className="md:grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 xl:gap-12 
      px-4 lg:px-8 xl:px-32 mt-4 lg:mt-16 xl:mt-32 space-y-8 lg:space-y-0"
    >
      <Address />
      <ContactForm />
    </div>
  );
};

export default Contact;
