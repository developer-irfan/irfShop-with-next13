import ProductItem from "./ProductItem";

function Products() {
  //products items
  const products = [
    {
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg",
      title: "Samsung CT-567",
      price: 300,
    },
    {
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg",
      title: "Dell V-964i",
      price: 300,
    },
    {
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/15.jpg",
      title: "Dell TC-67",
      price: 300,
    },
    {
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg",
      title: "HP headfone F4",
      price: 300,
    },
    {
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/10.jpg",
      title: "Dell Headfone F4",
      price: 300,
    },
    {
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/9.jpg",
      title: "Digital V-9",
      price: 300,
    },
  ];

  //return
  return (
    <div className="px-8 py-2 bg-white">
      <h2 className="text-[26px] text-center font-bold pt-8">Our Products</h2>
      <p className="text-center text-[17px] xsm:text-[15px]">
        Products are listed below. You can add them to cart and order them.
      </p>
      <div className="products xsm:flex xsm:flex-col xsm:items-center xsm:justify-center md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3">
        {
          //products
          products.map((product, index) => {
            return (
              <ProductItem
                key={index}
                img={product.img}
                title={product.title}
                price={product.price}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default Products;
