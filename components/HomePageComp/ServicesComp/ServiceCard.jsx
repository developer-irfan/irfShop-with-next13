import Image from "next/image";
function ServiceCard(props) {
  return (
    <div className="border border-gray-300 rounded-md mt-6 h-[340px] xsm:max-w-[400px] lg:max-w-[240px] xl:max-w-[260px]">
      <div className="flex flex-col space-y-4 sm:space-x-2 items-center justify-center  px-3 py-8 xl:py-12">
        <Image src={props.image} alt="" className="sm:w-[60px]" />
        <h2 className="text-orange-600 text-[20px] font-semibold lg:font-normal">
          {props.title}
        </h2>
        <p className="text-center sm:text-[15px] lg:text-[14px] xl:text-[16px]">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
