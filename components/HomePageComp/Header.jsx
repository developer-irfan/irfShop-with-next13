"use client";
import Button from "@/components/UI Comp/Button";
import { usePathname } from "next/navigation";

function Header() {
  //
  // const { asPath, pathname } = useRouter();
  const pathname = usePathname();

  //title
  const title =
    pathname === "/" ? "The Classic - Collection Shop House" : "About Us";

  //description
  const description =
    pathname === "/"
      ? "Order your favorite food from our store and get it delivered to yours with fast delivery and good quality"
      : "Online platform that enables businesses to sell their products directly to customers.typically features a catalog of products, a shopping cart for customers to collect their purchases";

  return (
    <header className="px-8 py-10 headerBg bg-no-repeat bg-cover h-full lg:px-12 xl:px-16">
      <div className="header-title">
        <h1 className="font-extrabold text-white text-[36px] pt-8 lg:pt-6 pb-4 w-[280px] leading-10 lg:text-[44px] lg:w-[460px] lg:leading-[50px]">
          {title}
        </h1>
        <p className="text-white w-[260px] text-[15px] xsm:text-[16px] sm:w-[400px]">
          {description}
        </p>
        <Button />
      </div>
    </header>
  );
}

export default Header;
