import React from "react";

const About = () => {
  return (
    <div className="text-2xl text-gray-800 p-5 h-[70vh]">
      This Website is made with 🩵 by Mr. Sritam Behera to showcase the skills of
      Web-Development.
      <p className="text-lg">
        Tech stack of this site: React, Redux, Tailwind, Api Integration etc..{" "}
        <br />
        <a
          className="text-blue-600 underline"
          href="https://github.com/sritam4/Habibi-s-Estate"
        >
          Source Code Available here.
        </a>
      </p>
    </div>
  );
};

export default About;
