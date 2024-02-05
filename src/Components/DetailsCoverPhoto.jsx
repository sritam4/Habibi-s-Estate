import React from "react";

const DetailsCoverPhoto = ({ photos }) => {
  if (!photos) return null;
  return (
    <div className="grid w-full md:w-9/12 lg:h-[500px] h-[400px] mx-auto grid-cols-3 gap-1 mb-5">
      <div className="h-full max-h-[400px] lg:max-h-[500px] lg:col-span-2 col-span-full row-span-2 ">
        <img className="h-full w-full" src={photos[0]?.url} alt="" />
      </div>
      <div className=" h-full max-h-[250px] hidden lg:block">
        <img className="h-full w-full" src={photos[1]?.url} alt="" />
      </div>
      <div className=" h-full max-h-[250px] hidden lg:block">
        <img className="h-full w-full" src={photos[2]?.url} alt="" />
      </div>
    </div>
  );
};

export default DetailsCoverPhoto;
