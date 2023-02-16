import React from "react";

const ContactForm = () => {
  return (
    <div className="lg:col-span-2">
      <h1 className="text-3xl xl:text-6xl font-semibold">Send us a Message</h1>
      <form className="space-y-5 mt-6 xl:mt-10">
        <div className="md:flex md:space-x-5 lg:space-x-10 space-y-5 md:space-y-0">
          <input
            type="text"
            placeholder="First Name"
            className="py-2 px-2 bg-blue-50 focus:outline-none rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="py-2 px-2 bg-blue-50 focus:outline-none rounded-lg w-full"
          />
        </div>
        <div className="md:flex md:space-x-5 lg:space-x-10 space-y-5 md:space-y-0">
          <input
            type="text"
            placeholder="Email"
            className="py-2 px-2 bg-blue-50 focus:outline-none rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="py-2 px-2 bg-blue-50 focus:outline-none rounded-lg w-full"
          />
        </div>

        <textarea
          rows={7}
          placeholder="Your message"
          className="py-2 px-2 bg-blue-50 focus:outline-none rounded-lg w-full"
        />

        <button className="text-white bg-secondary rounded-xl font-semibold w-fit px-5 py-3">
          Send a message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
