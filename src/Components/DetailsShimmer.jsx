import React from "react";

const DetailsShimmer = () => {
  return (
    <div className="animate-pulse">
      <div className="w-8/12 mx-auto h-[500px] border rounded my-4 shadow-lg bg-gray-300"></div>
      <div className="w-2/12 mx-20 h-12 border rounded-full my-2 shadow-lg bg-gray-300"></div>
      <div className="w-6/12 mx-20 h-10 border rounded-full my-2 shadow-lg bg-gray-300"></div>
      <div className="w-3/12 mx-20 h-8 border rounded-full my-4 shadow-lg bg-gray-300"></div>
      <div className="w-5/12 mx-20 h-8 border rounded-full my-2 shadow-lg bg-gray-300"></div>
      <div className="w-5/12 mx-20 h-10 border rounded-full my-2 shadow-lg bg-gray-300"></div>
    </div>
  );
};

export default DetailsShimmer;
