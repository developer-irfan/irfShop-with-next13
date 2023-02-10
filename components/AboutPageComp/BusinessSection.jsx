import Button from "@/components/UI Comp/Button";

function BusinessSection() {
  return (
    <div>
      <div className="content px-8 py-6 sm:max-w-[460px] sm:mx-auto md:flex md:items-center md:gap-8 md:mx-auto md:max-w-[800px] lg:max-w-[1100px] lg:gap-10 lg:py-11">
        <img
          src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="md:w-[300px] md:h-[300px] lg:w-[450px]"
        />
        <div>
          <h2 className="text-[20px] font-bold text-orange-600  py-2">
            Know About History, Commerce
          </h2>
          <p className="text-gray-700 text-justify">
            Online platform that enables businesses to sell their products
            directly to customers. It provides a convenient and accessible way
            for customers to purchase products from the comfort of their own
            homes. Website typically features a catalog of products, a shopping
            cart for customers to collect their purchases,
          </p>
          <Button />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default BusinessSection;
