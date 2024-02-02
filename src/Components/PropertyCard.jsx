import { PiBathtub } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import { IoPricetagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useCurrencyFormatter from "../Hooks/useCurrencyFormatter";

const PropertyCard = ({
  price,
  title,
  location,
  rooms,
  baths,
  area,
  score,
  coverPhoto,
}) => {
  const reversedLocation = location.toReversed();
  const formattedCurrency = useCurrencyFormatter(price);
  return (
    <div className="w-80 h-[450px] m-2 mb-8 p-2 text-sm font-semibold relative hover:shadow-2xl flex flex-col gap-2">
      <img
        className="h-48 w-full mb-1 -m-2 rounded-lg"
        src={coverPhoto?.url}
        alt="cover"
      />
      <h2 className=" text-lg text-gray-700 max-h-20 overflow-hidden">
        {title}
      </h2>
      <h4 className="text-gray-600 flex gap-2">
        <IoPricetagOutline className="font-bold text-xl" />
        Price: {formattedCurrency} ADE
      </h4>
      <p className="text-gray-600 flex gap-2 items-center">
        <img
          className="h-5"
          src="https://www.clipartmax.com/png/middle/49-495395_dorms-hotel-room-icon-png.png"
          alt="/_\"
        />
        Rooms
        {`: ${rooms}  •`}
        <PiBathtub className="font-bold text-xl" />
        Baths
        {`: ${baths}`}
      </p>
      <p className="text-gray-600 flex gap-2">
        <img
          className="h-6"
          src="https://cdn-icons-png.flaticon.com/512/5194/5194031.png"
          alt="[]"
        />
        {`Living Space: ${area?.toFixed(2)} sq.m. `}
      </p>
      <h6 className="text-gray-600 flex gap-2 ">
        <GrLocation className="font-bold text-2xl" />
        {`Location: ${reversedLocation?.map((item) => item?.name)}`}
      </h6>
      <Link
        to={"/details"}
        className="w-full border p-1 text-xl text-white bg-blue-500 absolute bottom-0 -m-2 flex items-center justify-center"
      >
        Contact
      </Link>
    </div>
  );
};

export default PropertyCard;
