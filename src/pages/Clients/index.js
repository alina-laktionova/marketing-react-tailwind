import React from "react";
import ClientList from "./ClientList";
import Intro from "./Intro";
import Numbers from "./Numbers";

const Clients = () => {
  return (
    <div>
      <Intro />
      <ClientList />
      <Numbers />
    </div>
  );
};

export default Clients;
