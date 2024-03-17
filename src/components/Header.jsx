import React, { useState } from "react";
import { Logo } from "../assets";
import { navlinks } from "../constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-full h-24 flex items-center justify-between z-50 bg-gradient-to-b from-black/80 to-transparent fixed top-0 left-0 py-4 xl:px-20 px-10 ">
      {/* Logo */}
      <Link to="/" className="w-16">
        <img src={Logo} alt={Logo} className="w-full" />
      </Link>

      {/* Menu */}
      <div className="flex items-center xl:gap-8 lg:gap-6 gap-4">
        <ul
          className={`flex lg:flex-row flex-col items-center justify-center xl:gap-8 lg:gap-6 lg:h-auto h-screen w-full bg-secondary lg:bg-transparent absolute lg:static top-0 left-0 ${toggle ? 'opacity-100 pointer-events-auto': 'opacity-0 lg:opacity-100 lg:pointer-events-auto pointer-events-none'} transition duration-200 overflow-y-auto lg:py-0 scroll-adjustment`}
        >
          {navlinks.map((item) => (
            <li key={item.id} className={`text-base text-center lg:py-0 py-5 font-inter lg:w-auto w-4/5 border-b  ${navlinks.length === item.id ? 'border-b-transparent':'lg:border-b-transparent border-b-white/60'}`}>
              <Link
                to={item.link}
                className={`text-white font-inter font-medium ${
                  item.link === location.pathname ? "text-red-500" : ""
                } hover:text-red-500 transition duration-200`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button
          onClick={() => navigate("/connect-wallet")}
          text="Connect Wallet"
          className="lg:text-lg sm:text-base text-sm text-nowrap"
        />
        <GiHamburgerMenu
          className="text-3xl text-white lg:hidden block z-30"
          onClick={() => setToggle(!toggle)}
        />
      </div>
    </div>
  );
};

export default Header;
