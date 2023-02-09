//client images
import client1 from "@/public/assets/images/client5.jpg";
import client2 from "@/public/assets/images/client2.jpg";
import client3 from "@/public/assets/images/client3.jpg";
import client4 from "@/public/assets/images/client4.jpg";

const ClientReviewsData = () => {
  const clientsReviewsData = [
    {
      name: "John Smith",
      clientImg: client1,
      clientDes:
        "One of the best services I have ever used. I am very happy with the service.",
    },
    {
      name: "Shahzeb",
      clientImg: client2,
      clientDes:
        "I am very happy with the service. Easy platform to use and best one",
    },
    {
      name: "Dany",
      clientImg: client3,
      clientDes:
        "Fast delivery best platform and best products. have best services.",
    },
    {
      name: "Sara",
      clientImg: client4,
      clientDes:
        "Fast delivery best platform and best products. have best services.",
    },
  ];

  return clientsReviewsData;
};
export default ClientReviewsData;
