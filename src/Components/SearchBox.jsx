import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 gap-3">
      <div className="flex my-4 w-96 font-semibold text-lg text-gray-600 ">
        <button className="w-1/2 border p-1 bg-gray-400 rounded-l-full flex justify-center">
          Rent
        </button>
        <button className="w-1/2 border p-1 bg-gray-100 rounded-r-full flex justify-center">
          Buy
        </button>
      </div>
      <input
        className="border text-base w-96 p-1 px-4 rounded-lg"
        type="text"
        placeholder="City, flats, appartments"
      />
      <button className="flex items-center gap-1 text-slate-200 font-semibold text-lg bg-[rgb(255,255,255,0.04)] rounded-lg p-1 mx-3 hover:bg-gray-600">
        <IoSearchSharp className="text-xl" />
        Search
      </button>
    </div>
  );
};

export default SearchBox;
