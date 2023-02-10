import AllProductItem from "./AllProductItem";
import ProductCategory from "./ProductCategory";

const AllProducts = () => {
  //products items
  const products = [
    {
      img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Adobe Photoshop CC 2022",
      place: "Lisbon, Portugal",
      price: 850,
    },
    {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Adobe Photoshop CC 2022",
      place: "Lisbon, Portugal",
      price: 850,
    },
    {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Adobe Photoshop CC 2022",
      place: "Lisbon, Portugal",
      price: 850,
    },
    {
      img: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Adobe Photoshop CC 2022",
      place: "Lisbon, Portugal",
      price: 850,
    },
    {
      img: "https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      title: "Adobe Photoshop CC 2022",
      place: "Lisbon, Portugal",
      price: 850,
    },
    {
      img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
      title: "Adobe Photoshop CC 2022",
      place: "Lisbon, Portugal",
      price: 850,
    },
    {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      title: "Adobe Photoshop CC 2022",
      place: "Lisbon, Portugal",
      price: 850,
    },
    {
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
      title: "Adobe Photoshop CC 2022",
      place: "Lisbon, Portugal",
      price: 850,
    },
  ];

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
            //products
            products.map((product, index) => {
              return (
                <AllProductItem
                  key={index}
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
