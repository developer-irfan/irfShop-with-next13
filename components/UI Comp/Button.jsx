import { useRouter } from "next/navigation";

function Button() {
  const router = useRouter();

  //
  const btnText = router.asPath === "/" ? "Shop now" : "Contact us";

  return (
    <div className="space-x-2 mt-1">
      <button className="px-6 py-2 my-3 text-white  bg-orange-600 text-[17px] xsm:px-4 xsm:text-[15px]">
        {btnText}
      </button>
    </div>
  );
}

export default Button;
