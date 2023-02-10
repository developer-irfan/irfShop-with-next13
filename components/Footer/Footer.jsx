import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faIceCream,
  faFaceFrown,
  faHatWizard,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="text-center bg-white">
      <section className="py-8 grid grid-cols-2 sm:grid-cols-3 md:max-w-[640px] md:mx-auto xl:max-w-[680px]">
        <div className="items py-4 ">
          <h2 className="font-bold text-[18px] tracking-wide">ITEMS</h2>
          <ul className="text-[14px] space-y-1 sm:pt-3 md:space-y-2 xl:space-y-3 xl:text-[13px]">
            <li>Randomize</li>
            <li>New Items</li>
            <li>Discount</li>
            <li>Digitals</li>
            <li>Commericals</li>
          </ul>
        </div>
        <div className="service py-4">
          <h2 className="font-bold text-[18px] tracking-wide">SERVICES</h2>
          <ul className="text-[14px] space-y-1 sm:pt-3 md:space-y-2 xl:space-y-3 xl:text-[13px]">
            <li>Randomize</li>
            <li>New Items</li>
            <li>Discount</li>
            <li>Digitals</li>
            <li>Commericals</li>
          </ul>
        </div>
        <div className="list py-4">
          <h2 className="font-bold text-[18px] tracking-wide">LIST</h2>
          <ul className="text-[14px] space-y-1 sm:pt-3 md:space-y-2 xl:space-y-3 xl:text-[13px]">
            <li>Randomize</li>
            <li>New Items</li>
            <li>Discount</li>
            <li>Digitals</li>
            <li>Commericals</li>
          </ul>
        </div>
      </section>
      <section className="space-y-3">
        <h2 className="text-[18px]">Follow Us:</h2>
        <div className="flex justify-center space-x-2 socialIcons">
          <div className="w-[32px] h-[32px] flex items-center justify-center rounded-[30px] px-[10px] py-[8px] bg-black">
            <FontAwesomeIcon icon={faIceCream} className="text-white" />
          </div>
          <div className="w-[32px] h-[32px] flex items-center justify-center rounded-[30px] px-[10px] py-[8px] bg-black">
            <FontAwesomeIcon icon={faFaceFrown} className="text-white" />
          </div>
          <div className="w-[32px] h-[32px] flex items-center justify-center rounded-[30px] px-[10px] py-[8px] bg-black">
            <FontAwesomeIcon icon={faHatWizard} className="text-white" />
          </div>
          <div className="w-[32px] h-[32px] flex items-center justify-center rounded-[30px] px-[10px] py-[8px] bg-black">
            <FontAwesomeIcon icon={faEnvelope} className="text-white" />
          </div>
        </div>
        <h2 className="text-[18px]">Subscribe Now</h2>
        <input type="text" className="border-[1px] border-black py-2 px-2" />
        <br />
        <button className="addtocart px-8 py-2 text-white  bg-orange-600 text-[15px]">
          Subscribe
        </button>
      </section>

      <section className="copyright bg-[#efeded] mt-8 py-4">
        <h2 className="text-[13px]">
          &copy; Copyright 2023 All reserved by Irfee Commerce
        </h2>
      </section>
    </footer>
  );
}

export default Footer;
