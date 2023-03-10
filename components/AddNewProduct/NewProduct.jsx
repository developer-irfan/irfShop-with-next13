import NewProductForm from "./NewProductForm";

const NewProduct = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-blue-400">
      <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h1 className="block w-full text-center text-gray-600 text-lg font-semibold mb-6">
          Add New Product
        </h1>
        <NewProductForm />
      </div>
    </div>
  );
};

export default NewProduct;
