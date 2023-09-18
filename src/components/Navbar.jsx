import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [taggol, setTaggol] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}
    >
      <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className=" flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain " />
          <p className=" text-[18px] text-white gap-2 cursor-pointer ">
            <a className=" font-bold"> Masud Rana</a>
            <span className=" sm:block hidden gap-2">
              {" "}
              | Sports Programmer
            </span>{" "}
          </p>
        </Link>
        <ul className=" list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className={`${
                active === item.title ? " text-white" : " text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(item.title)}
            >
              <a href={`#${item.id}`}>{item.title} </a>
            </li>
          ))}
        </ul>

        <div className=" sm:hidden flex flex-1 justify-end items-center">
          <img
            src={taggol ? close : menu}
            alt="menu"
            className=" cursor-pointer text-[28px] object-contain "
            onClick={() => setTaggol(!taggol)}
          />
          <div
            className={`${
              !taggol ? " hidden" : " flex"
            } p-6 black-gradient absolute top-16 right-0 mx-2 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className=" list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className={`${
                    active === item.title ? " text-white" : " text-secondary"
                  } hover:text-white font-light text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setTaggol(!taggol);
                    setActive(item.title);
                  }}
                >
                  <a href={`#${item.id}`}>{item.title} </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
