import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faContactBook,
  faContactCard,
  faMailReply,
  faLaptop,
  faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faStar } from "@fortawesome/free-regular-svg-icons";
export const SearchIcon = () => {
  return <FontAwesomeIcon icon={faSearch} className="w-5 text-white" />;
};

export const ContactBookIcon = () => {
  return <FontAwesomeIcon icon={faContactBook} className="w-5 text-white" />;
};

export const ContactCardIcon = () => {
  return <FontAwesomeIcon icon={faContactCard} className="w-5 text-white" />;
};

export const MailReplyIcon = () => {
  return <FontAwesomeIcon icon={faMailReply} className="w-5 text-white" />;
};

export const LaptopIcon = () => {
  return <FontAwesomeIcon icon={faLaptop} className="w-4 h-4" />;
};

export const BookIcon = () => {
  return (
    <FontAwesomeIcon icon={faBookmark} className="w-4 h-4 text-gray-600" />
  );
};

export const StarIcon = () => {
  return <FontAwesomeIcon icon={faStar} className="w-4 h-4" />;
};

export const WatchIcon = () => {
  return <FontAwesomeIcon icon={faSwatchbook} className="w-4 h-4" />;
};

export const CartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-4 w-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  );
};
