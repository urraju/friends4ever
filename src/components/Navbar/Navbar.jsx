"use client";
import Link from "next/link";
import logo from "../../assets/all-img/logo.png";
import Image from "next/image";
import { IoMenuSharp } from "react-icons/io5";
import { GiSplitCross } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navMenu = [
    {
      Title: "Home",

      Route: "/",
    },
    {
      Title: "Friends",

      Route: "/friends",
    },
    {
      Title: "About Us",

      Route: "/aboutus",
    },
    {
      Title: "Contact",

      Route: "/contact",
    },
    {
      Title: "Add Story",

      Route: "/addstory",
    },
  ];
  return (
    <div className="fixed z-50 top-0 left-0 right-0">
      <div className="max-w-screen-2xl mx-auto top-0  py-2 md:backdrop-blur md:bg-white/5 rounded-lg bg-white">
        <nav className="md:flex md:justify-between md:items-center ">
          <div className="flex items-center gap-3 mx-auto md:mx-0">
            <Image className="w-20" src={logo} alt="logo" />
            <h1 className="text-3xl md:text-white  font-bold">
              Friends <span className="text-[#FEA833]">4</span> Ever
            </h1>
          </div>
          {/* menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-2 top-6 text-4xl transition-all  duration-500 text-[#FEA833] cursor-pointer md:hidden"
          >
            {open ? <GiSplitCross /> : <IoMenuSharp />}
          </div>

          <div
            className={`flex flex-col h-screen md:h-max bg-white/100 md:bg-transparent w-full md:w-max left-0  md:z-auto -z-50 md:flex-row md:items-center gap-8 py-6 md:py-0 absolute md:static transition-all duration-500 ease-in ${
              open
                ? "right-20 opacity-100"
                : "right-[-490px] opacity-0 md:opacity-100"
            }`}
          >
            {navMenu.map((item) => (
              <ul key={item.Title}>
                <Link className="md:text-white text-lg " href={item.Route}>
                  {item.Title}
                </Link>
              </ul>
            ))}

            <div className="md:ml-20">
              <button className="bg-[#FEA833] text-white px-6 py-2 rounded">
                Login
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
