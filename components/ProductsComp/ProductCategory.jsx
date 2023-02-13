import { BookIcon, LaptopIcon, StarIcon, WatchIcon } from "../Icons/Icons";
import Link from "next/link";
import { useSelector } from "react-redux";

const ProductCategory = () => {
  const hasLogin = useSelector((state) => state.adminLoginReducer);

  return (
    <div class="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center   bg-white text-gray-600">
      <a
        rel="noopener noreferrer"
        href="#"
        class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-600"
      >
        <LaptopIcon />
        <span className="pl-2">Architecto</span>
      </a>
      <a
        rel="noopener noreferrer"
        href="#"
        class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900"
      >
        <BookIcon />
        <span className="text-gray-600">Corrupti</span>
      </a>
      <a
        rel="noopener noreferrer"
        href="#"
        class="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600"
      >
        <StarIcon />
        <span>Excepturi</span>
      </a>
      <a
        rel="noopener noreferrer"
        href="#"
        class="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600"
      >
        <WatchIcon />
        <span>Consectetur</span>
      </a>
      {hasLogin && (
        <div>
          <Link href="#" className="text-right underline">
            <h4>Add New Product</h4>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
