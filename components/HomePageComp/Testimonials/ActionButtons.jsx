import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ActionButtons(props) {
  return (
    <div className="actions flex justify-center space-x-2">
      <button
        onClick={props.prevSliderHandle}
        className="addtocart flex justify-center items-center px-3 py-3 mt-6 text-white rounded-[30px] bg-gray-900 text-[17px] xsm:text-[15px]"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        onClick={props.nextSliderHandle}
        className="addtocart flex justify-center items-center  px-3 py-3 mt-6 text-white rounded-[30px] bg-gray-900 text-[17px] xsm:text-[15px]"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default ActionButtons;
