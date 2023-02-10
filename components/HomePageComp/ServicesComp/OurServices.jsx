import ServiceCard from "./ServiceCard";
import feature1 from "@/public/assets/images/f1.png";
import feature2 from "@/public/assets/images/f2.png";
import feature3 from "@/public/assets/images/f3.png";

function OurServices() {
  //service cards
  const serviceCards = [
    {
      title: "Oranges",
      image: feature1,
      descriptioin:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      title: "Grapes",
      image: feature2,
      descriptioin:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      title: "Gauva",
      image: feature3,
      descriptioin:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
  ];

  //return
  return (
    <div className="bg-gray-100">
      <div className="px-8 py-10">
        <h2 className="text-[26px] text-center font-bold">Our Services</h2>
        <p className="text-center text-[17px]">
          Many varaitions of pessages includes ordering online, add to carts and
          many more...
        </p>
        <div className="services  my-6 xsm:flex xsm:flex-col xsm:items-center xsm:justify-center md:flex md:flex-row md:gap-4 xl:gap-5 md:justify-center">
          {serviceCards.map((card, index) => {
            return (
              <ServiceCard
                key={index}
                title={card.title}
                image={card.image}
                description={card.descriptioin}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
