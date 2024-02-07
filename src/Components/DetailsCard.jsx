import React from "react";
import { PiBathtub } from "react-icons/pi";
import UseCurrencyFormatter from "../Hooks/useCurrencyFormatter";
import { GrLocation } from "react-icons/gr";
import useDateDifference from "../Hooks/useDateDifference";
import { MdAddCall } from "react-icons/md";
import { MdWhatsapp } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const DetailsCard = ({
  externalID,
  price,
  title,
  location,
  rooms,
  baths,
  area,
  rentFrequency,
  score,
  updatedAt,
  phoneNumber,
  category,
  coverPhoto,
}) => {
  const formattedCurrency = UseCurrencyFormatter(price);
  const dateDifference = useDateDifference(updatedAt);
  const formattedAddress = location?.toReversed();

  return (
    <div className="w-[90%] mx-auto min-w-[800px] my-5 h-72 rounded-xl overflow-hidden shadow-lg border">
      <Link to={`/details?Property=${externalID}`}>
        <div className="w-full h-[calc(100%-40px)] flex">
          <div className="w-[400px]">
            <img
              className="w-full h-full rounded-xl"
              src={coverPhoto?.url}
              alt="cover img"
            />
          </div>
          <div className="p-4 text-base w-[calc(100%-400px)]  font-medium">
            <h2 className="text-gray-600">{category[0].name}</h2>
            <h4 className="text-2xl my-2">
              {formattedCurrency + " AED"}
              {rentFrequency ? " / " + rentFrequency?.slice(0, -2) : " "}
            </h4>
            <h3 className="text-lg h-16 w-full font-normal">{title}</h3>
            <h4 className="text-gray-600 flex gap-2">
              <GrLocation className="font-bold text-2xl" />
              {`${formattedAddress?.map((item) => item?.name)}`}
            </h4>

            <div className="flex py-2 gap-3 text-gray-600 m-1">
              <IoBedOutline className="font-bold text-xl" />
              {`${rooms} | `}
              <PiBathtub className="font-bold text-xl" />
              {`${baths} | `}
              <p className="flex gap-2">
                <img
                  className="h-6"
                  src="https://cdn-icons-png.flaticon.com/512/5194/5194031.png"
                  alt="[]"
                />
                {`${area?.toFixed(2)} sq.m. `}
              </p>
            </div>
          </div>
        </div>
        <div className="h-10 p-1 px-4 border flex justify-between text-gray-700">
          <p>{"Updated " + dateDifference}</p>
          <div className="flex items-center gap-5">
            <p className="flex items-center gap-1 border border-gray-500 px-1 rounded-lg bg-slate-100">
              <MdAddCall />
              {phoneNumber?.mobile}
            </p>
            <p className="flex items-center gap-1 border border-gray-500 px-1 rounded-lg bg-slate-100">
              <MdWhatsapp />
              {phoneNumber?.whatsapp}
            </p>
            <button className="border border-gray-500 p-1 rounded-md bg-red-200">
              <FaRegHeart />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DetailsCard;
