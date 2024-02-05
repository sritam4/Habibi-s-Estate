import { useState } from "react";
import Search from "./Search";

const SearchBox = () => {
  const [purpose, setPurpose] = useState("for-rent");

  return (
    <div className="flex flex-col justify-center items-center p-4 gap-3">
      <div className="flex my-4 w-96 font-semibold text-lg text-gray-600 ">
        <button
          onClick={() => setPurpose("for-rent")}
          className={`w-1/2 border p-1 rounded-l-full flex justify-center ${
            purpose === "for-rent" ? "bg-gray-400" : "bg-white"
          }`}
        >
          Rent
        </button>
        <button
          onClick={() => setPurpose("for-sale")}
          className={`w-1/2 border p-1 rounded-r-full flex justify-center ${
            purpose === "for-sale" ? "bg-gray-400" : "bg-white"
          }`}
        >
          Buy
        </button>
      </div>
      <Search purpose={purpose} />
    </div>
  );
};

export default SearchBox;
