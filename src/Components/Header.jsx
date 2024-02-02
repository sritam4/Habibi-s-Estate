import React from "react";
import { Link } from "react-router-dom";
import { PopularCitiesOfUAE } from "../Utils/Constant";

const Header = () => {
  const locId = Object.values(PopularCitiesOfUAE).join(",");
  return (
    <div className="text-lg  flex py-2 bg-gray-100">
      <div className="text-3xl md:w-1/3 lg:w-1/2 text-green-800 font-semibold  lg:ml-16 whitespace-nowrap">
        <Link to={"/"}>Habibi's Estate</Link>
      </div>
      <ul className="flex gap-6 md:gap-12 w-full md:w-2/3 lg:w-1/2  items-center justify-center text-gray-800">
        <li>
          <Link to={"/list?" + "purpose=for-rent" + "&loc=" + locId}>Rent</Link>
        </li>
        <li>
          <Link to={"/list?" + "purpose=for-sale" + "&loc=" + locId}>Buy</Link>
        </li>
        <li>
          <Link to="/agencies">Agencies</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
