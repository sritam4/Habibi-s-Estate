import React from "react";

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/" },
    { name: "Twitter", url: "https://www.twitter.com" },
    { name: "Instagram", url: "https://www.instagram.com/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8 mt-20">
      <div className="container px-5 mx-auto flex justify-between">
        <div className="w-1/2 flex flex-col items-center">
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <ul>
            {socialLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <h4 className="text-lg font-bold mb-4">Contact Information</h4>
          <p>12-3, a-4 Street, Dubai, UAE</p>
          <p>Email: bsritam227@gmail.com</p>
          <p>Phone: +91 82809 38136</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Marina Estate. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
