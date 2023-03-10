"use client";
import AllProductItem from "./AllProductItem";
import ProductCategory from "./ProductCategory";
import { GetAllProducts } from "../GraphQl/Queries";
import { useQuery } from "@apollo/client";

const AllProducts = () => {
  const { loading, error, data } = useQuery(GetAllProducts);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div class="bg-white">
      <div class="pt-8 bg-white">
        <h1 class="text-center text-2xl font-bold text-gray-800">
          All Products
        </h1>
      </div>

      <ProductCategory />

      <section class="py-10 bg-gray-100">
        <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            // products
            data.products.map((product, index) => {
              return (
                <AllProductItem
                  key={index}
                  id={product.id}
                  img={product.img}
                  title={product.title}
                  place={product.place}
                  price={product.price}
                />
              );
            })
          }
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
