import { CartIcon } from "../Icons/Icons";

const AllProductItem = (props) => {
  const { img, title, place, price } = props;

  return (
    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src={img} alt="Hotel Photo" />
          <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
            <CartIcon />

            <button class="text-sm">Add to cart</button>
          </div>
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-slate-700">{title}</h2>
          <p class="mt-1 text-sm text-slate-400">{place}</p>

          <div class="mt-3 flex items-end justify-between">
            <p class="text-lg font-bold text-blue-500">${price}</p>

            <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
              <CartIcon />

              <button class="text-sm">Add to cart</button>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default AllProductItem;
