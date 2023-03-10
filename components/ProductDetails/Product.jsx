import React from "react";

function Product() {
  //   const router = useRouter();
  //   const { id } = router.query;

  //   const { loading, error, data } = useQuery(GET_PRODUCT, {
  //     variables: { id },
  //   });

  //
  return (
    <div>
      <div className="container mx-auto my-8">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <img
              src="https://via.placeholder.com/500x500.png"
              alt="Product"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 p-4">
            <h1 className="text-3xl font-bold mb-2">Product Name</h1>
            <p className="text-gray-700 text-base mb-4">
              Product description goes here
            </p>
            <p className="text-gray-700 text-base mb-4">$99.99</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
