import React, { useState } from "react";
import { PiBathtub } from "react-icons/pi";
import useCurrencyFormatter from "../Hooks/useCurrencyFormatter";
import { Markup } from "interweave";
import useDateDifference from "../Hooks/useDateDifference";

const DetailsInfo = ({ details }) => {
  const {
    title,
    updatedAt,
    price,
    rooms,
    baths,
    area,
    description,
    location,
    purpose,
    category,
    amenities,
    referenceNumber,
    rentFrequency,
    product,
  } = details;
  const reversedLocation = location.toReversed();
  const formattedCurrency = useCurrencyFormatter(price);
  const formattedDate = useDateDifference(updatedAt);
  const formattedDesc = description?.replace(/\n/g, "<br>");
  const [showMore, setShowMore] = useState(false);

  // console.log(updatedAt);

  return (
    <div className="xl:w-7/12 w-10/12 p-2">
      <h2 className="text-3xl font-semibold mb-4">
        Price: {`${formattedCurrency} AED`}
        <span>{rentFrequency && `/ ${rentFrequency?.slice(0, -2)}`}</span>
      </h2>
      <h4 className="text-xl font-semibold text-gray-700 mb-4">{title}</h4>
      <div className="flex gap-3 mb-3 text-lg text-gray-600 items-center">
        <img
          className="h-5"
          src="https://www.clipartmax.com/png/middle/49-495395_dorms-hotel-room-icon-png.png"
          alt="/_\"
        />
        {`Beds : ${rooms}  •`}
        <PiBathtub className="font-bold text-xl" />
        {`Baths : ${baths}  •`}
        <img
          className="h-6"
          src="https://cdn-icons-png.flaticon.com/512/5194/5194031.png"
          alt="[]"
        />
        {`Living Space: ${area?.toFixed(2)} sq.m. `}
      </div>

      <h4 className="text-2xl font-semibold mb-1">Property Information</h4>
      <div className="w-full flex flex-wrap gap-2 mb-5">
        <p className="md:w-[calc(50%-15px)] w-full py-2  flex gap-10">
          {`Purpose:`}
          <span>{`${purpose}`}</span>
        </p>
        <p className="md:w-[calc(50%-15px)]  w-full py-2 flex gap-10">
          {`Property Types:`}
          <span>
            {category
              .map((item) => {
                return item?.name;
              })
              .join(", ")}
          </span>
        </p>
        <p className="md:w-[calc(50%-15px)]  w-full py-2 flex gap-10">
          {`Updated:`}
          <span>{Date(formattedDate)}</span>
        </p>
        <p className="md:w-[calc(50%-15px)]  w-full py-2 flex gap-5">
          {`Reference Number:`}
          <span>{referenceNumber}</span>
        </p>
        <p className="md:w-[calc(50%-15px)]  w-full py-2 flex gap-10">
          {`Address:`}
          <span>
            {reversedLocation
              ?.map((item) => {
                return item.name;
              })
              ?.join(", ")}
          </span>
        </p>
        <p className="md:w-[calc(50%-15px)]  w-full py-2 flex gap-10">
          {`Product Type:`}
          <span>{product}</span>
        </p>
      </div>

      <h4 className="text-2xl font-semibold my-2">Aminities</h4>

      <div className="w-full flex flex-col mb-5">
        {amenities?.map((item, index) => {
          return (
            <div key={index} className="text-lg text-gray-800 ">
              {item.text}
              <ul className="flex text-sm">
                {item?.amenities?.map((item, index) => {
                  return (
                    <li key={index} className=" px-2 mb-3 text-gray-600">
                      {item?.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <h4 className="text-2xl font-semibold my2">Description</h4>
      <div
        className={`text-sm text-gray-600 mb-5 overflow-hidden relative ${
          !showMore && "max-h-72"
        }`}
      >
        <Markup content={formattedDesc} />
        <button
          className="absolute bottom-0 right-2 flex bg-gray-300 px-2 rounded"
          onClick={() => (showMore ? setShowMore(false) : setShowMore(true))}
        >
          {showMore ? "Show Less" : "Show More ⨠"}
        </button>
      </div>
    </div>
  );
};

export default DetailsInfo;
