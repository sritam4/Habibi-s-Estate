import React from "react";

const HomeBanner2 = () => {
  const bannerData = {
    imgUrl:
      "https://t3.ftcdn.net/jpg/06/58/25/26/240_F_658252672_g0kPjICjKeYuWcRvkfXRseLyZPlhYVWF.jpg",
    text: "Explore Top Properties In ",
    cityName: "Dubai",
  };
  return (
    <div className="relative w-full">
      <img className="w-full mb-10" src={bannerData.imgUrl} alt="banner" />
      <p className="absolute top-1/3 text-[4vw] p-4 text-gray-600 font-extrabold select-none">
        {bannerData.text}
        {bannerData.cityName}
      </p>
    </div>
  );
};

export default HomeBanner2;
