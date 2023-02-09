"use client";
import { useState } from "react";
import ActionButtons from "./ActionButtons";
import ClientData from "./ClientData";
import clientsReview from "./ClientReviewsData";

const Testimonials = () => {
  //looping on client review state
  const [selectedClient, setselectedClient] = useState(0);

  //fade state
  const [fade, setFade] = useState(false);

  //preSliderHandler
  const prevSliderHandle = () => {
    selectedClient > 0 ? setselectedClient(selectedClient - 1) : null;
    selectedClient <= 0 ? setselectedClient(clientsReview.length - 1) : null;
  };

  //nextSliderHandler
  const nextSliderHandle = () => {
    selectedClient < clientsReview.length - 1
      ? setselectedClient(selectedClient + 1)
      : null;

    selectedClient === clientsReview.length - 1 ? setselectedClient(0) : null;
  };

  //return
  return (
    <div className="px-8 py-10">
      <h2 className="text-[26px] text-center font-bold">Our Clients</h2>
      <p className="text-center text-[17px]">
        Checkout what our clients say about us and our services.
      </p>
      <ClientData
        selectedClient={selectedClient}
        setselectedClient={setselectedClient}
        fade={fade}
        setFade={setFade}
      />
      <ActionButtons
        prevSliderHandle={prevSliderHandle}
        nextSliderHandle={nextSliderHandle}
      />
    </div>
  );
};

export default Testimonials;
