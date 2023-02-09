import React from "react";

function ProductItem(props) {
  return (
    <div className="px-8 text-center space-y-4 xsm:max-w-[400px]">
      <div className="content pt-8 pb-4 ">
        <img src={props.img} alt="" />
        <h2 className="font-extrabold text-[20px] xsm:text-[18px]">
          {props.title}
        </h2>
        <p className="text-[18px] xsm:text-[16px]">
          <s>$599</s> ${props.price}
        </p>
        <div className="actions space-x-2">
          <button className="addtocart px-4 py-2 mt-6 text-white  bg-gray-900 text-[17px] xsm:text-[15px]">
            Add to cart
          </button>
          <button className="addtocart px-4 py-2 mt-6 text-white  bg-orange-600 text-[17px] xsm:text-[15px]">
            See details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
