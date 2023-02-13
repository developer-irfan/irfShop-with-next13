import React from "react";

const NewProduct = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-blue-400">
      <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h1 className="block w-full text-center text-gray-600 text-lg font-semibold mb-6">
          Add New Product
        </h1>
        <form action="/" method="post">
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-md text-gray-600" for="first_name">
              Product Name
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="text"
              name="first_name"
              id="first_name"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-md text-gray-600" for="first_name">
              Product place
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="text"
              name="last_name"
              id="last_name"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-md text-gray-600" for="first_name">
              Price
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-md text-gray-600" for="first_name">
              Product Image Link
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button
            className="block bg-teal-400 hover:bg-teal-600 text-white  text-md mx-auto px-2 py-2 rounded"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
