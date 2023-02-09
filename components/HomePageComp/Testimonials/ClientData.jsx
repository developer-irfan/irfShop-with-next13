import { useEffect } from "react";
import ClientReviewsData from "./ClientReviewsData";
import Image from "next/image";

import "./ClientData.css";

const ClientData = (props) => {
  //
  const { selectedClient, setselectedClient, fade, setFade } = props;
  const clientsReview = ClientReviewsData();

  //
  useEffect(() => {
    setInterval(() => {
      setselectedClient((selectedClient) =>
        selectedClient === clientsReview.length - 1 ? 0 : selectedClient + 1
      );
      setFade(false);
      setTimeout(() => setFade(true), 0);
    }, 3000);
  }, []);

  useEffect(() => {
    setFade(props.fade);
  }, [props.fade]);
  //return
  return (
    <div className="flex flex-col items-center testomanialsContent">
      <Image
        src={clientsReview[selectedClient]?.clientImg}
        className={`w-[180px] h-[180px] my-6 rounded-[50%] ${
          fade ? "fade-in" : "fade-out"
        }`}
        alt=""
      />
      <h2
        className={`font-extrabold text-[20px] text-center ${
          fade ? "fade-in" : "fade-out"
        }`}
      >
        {clientsReview[selectedClient]?.name}
      </h2>
      <p className={`text-center text-[17px] ${fade ? "fade-in" : "fade-out"}`}>
        {clientsReview[selectedClient]?.clientDes}
      </p>
    </div>
  );
};

export default ClientData;
