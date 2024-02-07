import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

const Contact = ({ agency, contacts }) => {
  return (
    <div className="w-10/12 h-28 rounded-lg my-4 p-2 bg-slate-50 flex text-green-800">
      <img
        className="w-10 h-10 mr-4 rounded-full border"
        src={agency?.logo?.url}
        alt="logo"
      />
      <div>
        <h3 className="text-lg font-semibold">{`${agency?.name}`}</h3>
        <ul className="flex gap-7 my-4">
          <li
            onClick={() => {
              window.location = "mailto:xyz@gmail.com";
            }}
            className="w-28 p-2 px-4 border rounded-md bg-gray-300  flex items-center justify-center gap-1 font-bold hover:shadow-md cursor-pointer"
          >
            <MdOutlineMail className=" font-bold text-xl" />
            {"Email"}
          </li>
          <li
            onClick={() => {
              window.location = `tel:${contacts?.phone}`;
            }}
            className="w-28 p-2 px-4 border rounded-md bg-gray-300 flex items-center justify-center gap-1 font-bold hover:shadow-md cursor-pointer"
          >
            <IoCallOutline className=" font-bold text-xl" />
            {"Call"}
          </li>
          <li
            onClick={() => {
              window.location = `https://wa.me/${contacts?.whatsapp}`;
            }}
            className="w-28 p-2  px-4 border rounded-md bg-gray-300 flex items-center justify-center gap-1 font-bold hover:shadow-md cursor-pointer"
          >
            <FaWhatsapp className=" font-bold text-2xl" />
            {"Chat"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
