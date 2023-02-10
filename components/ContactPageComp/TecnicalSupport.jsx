import { SearchIcon } from "@/components/Icons/Icons";
const TecnicalSupport = () => {
  return (
    <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
      <div className="flex items-start">
        <div className="shrink-0">
          <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
            <SearchIcon />
          </div>
        </div>
        <div className="grow ml-6">
          <p className="font-bold mb-1">Technical support</p>
          <p className="text-gray-500">irfshop@gmail.com</p>
          <p className="text-gray-500">+92 234-567-89</p>
        </div>
      </div>
    </div>
  );
};

export default TecnicalSupport;
