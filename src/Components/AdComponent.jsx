import React from "react";

const AdComponent = () => {
  const hearder = "React JS Developer Available !! Hire Soon.";
  const desc1 =
    "Available To Work with Start-Ups And Other Organizations As a ReactDeveloper. Having Modern Web Designing Skills Including React, Redux,Tailwind, API Integrations,";
  const desc2 =
    " Programming Languages Like Java AndJavasctipt. Still Learning new Technologies Such As TypeScript andChakra UI.";

  return (
    <div className="lg:w-3/12 m-5 h-fit p-3 border border-gray-400 rounded hidden xl:block">
      <h3 className="text-lg text-gray-600 ">Ad.</h3>
      <p className="text-lg mb-2 font-semibold text-gray-600">{hearder}</p>
      <p className="text-sm font-semibold text-gray-600"> {desc1} </p>
      <p className="text-sm mb-2 font-semibold text-gray-600"> {desc2} </p>

      <h4 className="text-sm font-semibold text-gray-600 underline">
        Some Work Proofs:
      </h4>

      <p className="text-sm font-semibold text-gray-600">
        Youtube Clone{" "}
        <a
          className="text-blue-600 underline"
          href="https://xyoutube.netlify.app/"
          target="/"
        >
          xyoutube.netlify.app
        </a>
      </p>

      <p className="text-sm font-semibold text-gray-600">
        Portfolio Website:{" "}
        <a
          className="text-blue-600 underline"
          href="https://sritamportfolio.netlify.app/"
          target="/"
        >
          sritamportfolio.netlify.app
        </a>
      </p>
      <h4 className="text-sm font-semibold text-gray-600  mt-2 underline">
        {" "}
        Contacts:{" "}
      </h4>
      <p className="text-sm font-semibold text-gray-600">
        Linked In:
        <a
          className="text-blue-600 underline"
          href="https://www.linkedin.com/in/sritambehera44/"
        >
          sritambehera44
        </a>{" "}
      </p>

      <p className="text-sm font-semibold text-gray-600">
        Email:
        <a className="text-blue-600 underline" href="mailto:">
          bsritam227@gmail.com
        </a>
      </p>
    </div>
  );
};

export default AdComponent;
