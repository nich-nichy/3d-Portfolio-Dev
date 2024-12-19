import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="text-white py-6 font-poppins">
      <hr className="border-gray-200 mb-6" />

      <div className="flex justify-center space-x-6">
        {socialLinks.map((link) => (
          <Link key={link.name} to={link.link} target="_blank" className="hover:opacity-75 transition-opacity duration-300">
            <img
              src={link.iconUrl}
              alt={link.name}
              className="w-8 h-8 object-contain"
            />
          </Link>
        ))}
      </div>
      {/* <div className="mt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Nishath. All rights reserved.
      </div> */}
    </footer>

  );
};

export default Footer;
