import React from "react";
import ".././App.css";
import { BiMenuAltRight } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useState } from "react";
import Switcher from "./Switcher";

const Navbar = ({ setSendData }) => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 7,
      link: "experience",
    },
    {
      id: 5,
      link: "certificates",
    },
    {
      id: 4,
      link: "portfolio",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  const [nav, setNav] = useState(false);
  return (
    <div className=" ">
      <div className="nav"></div>
      <header className="container mx-auto">
        <div className="flex justify-between items-center px-4 py-4">
          <div className="">
            <div class="relative inline-flex group ">
              <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r dark:from-blue-400 dark:to-indigo-500  blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

              <a
                class={
                  "relative inline-flex items-center justify-center px-4 py-2 text-3xl  font-extrabold text-white transition-all duration-200 bg-gray-900 dark:bg-white dark:text-gray-900 font-pj  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:opacity-90"
                }
                target="_blank"
                href="/"
              >
                M
              </a>
            </div>
          </div>
          <div className="flex justify-around ">
            <ul className="hidden md:flex space-x-3 items-center">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="text-md  cursor-pointer capitalize font-medium text-gray-900 dark:text-white hover:bg-[#ECEFF2] dark:hover:bg-[#3B3A51] rounded-lg p-2"
                >
                  <Link to={link} smooth duration={500} className=" ">
                    {link}
                  </Link>
                </li>
              ))}
              <li>
                <div className="hidden md:flex space-x-5 text-3xl animate-pulse">
                  <Switcher />
                </div>
              </li>
            </ul>
          </div>

          <div
            onClick={() => {
              setNav(!nav);
              setSendData(false);
            }}
            className="cursor-pointer pr-4 z-10 text-gray-600 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <BiMenuAltRight size={50} />}
          </div>

          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
              <Switcher />
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  <Link
                    onClick={() => {
                      setNav(!nav);
                    }}
                    to={link}
                    smooth
                    duration={500}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {!nav && setSendData(true)}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
