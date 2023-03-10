"use client";
import { useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { AddProduct } from "@/components/GraphQl/Queries";

const NewProductForm = () => {
  //

  const [isValid, setIsValid] = useState(false);

  const [addProduct, { error }] = useMutation(AddProduct);

  //
  //
  const titleInput = useRef();
  const priceInput = useRef();
  const placeInput = useRef();
  const imgInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    //
    const title = titleInput.current.value;
    const place = placeInput.current.value;
    const price = priceInput.current.value;
    const img = imgInput.current.value;

    if (
      title.trim("").length === 0 &&
      price.trim("").length === 0 &&
      img.trim("").length === 0
    ) {
      setIsValid(true);
      return;
    }
    //
    addProduct({
      variables: { img: img, title: title, place: place, price: price },
    });
    console.log(addProduct);

    if (error) {
      console.log(error);
    }

    //
    titleInput.current.value = "";
    priceInput.current.value = "";
    imgInput.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-md text-gray-600" htmlFor="first_name">
          Product Name
        </label>
        <input
          className="border py-2 px-3 text-grey-800"
          type="text"
          name="title"
          id="title"
          ref={titleInput}
        />
        {isValid && (
          <p className="pt-3" style={{ color: "red" }}>
            Please Product Name
          </p>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-md text-gray-600" htmlFor="first_name">
          Product place
        </label>
        <input
          className="border py-2 px-3 text-grey-800"
          type="text"
          name="place"
          id="place"
          ref={placeInput}
        />
        {isValid && (
          <p className="pt-3" style={{ color: "red" }}>
            Please Enter Place
          </p>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-md text-gray-600" htmlFor="first_name">
          Price
        </label>
        <input
          className="border py-2 px-3 text-grey-800"
          type="text"
          name="price"
          id="price"
          ref={priceInput}
        />
        {isValid && (
          <p className="pt-3" style={{ color: "red" }}>
            Please Enter Price
          </p>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-md text-gray-600" htmlFor="first_name">
          Product Image Link
        </label>
        <input
          className="border py-2 px-3 text-grey-800"
          type="text"
          name="img"
          id="img"
          ref={imgInput}
        />
      </div>
      <button
        className="block bg-teal-400 hover:bg-teal-600 text-white  text-md mx-auto px-2 py-2 rounded"
        type="submit"
      >
        Add Product
      </button>
    </form>
  );
};

export default NewProductForm;
