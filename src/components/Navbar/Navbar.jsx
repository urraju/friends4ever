"use client";
import Link from "next/link";
import logo from "../../assets/all-img/logo.png";
import Image from "next/image";
// icons import 
import { IoMenuSharp } from "react-icons/io5";
import { GiSplitCross } from "react-icons/gi";
import { useState } from "react";
// import etc 
import "./navbar.modules.css";
import ShareButton from "@/shared/Button/ShareButton";
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
    <div className="fixed z-50 top-0 left-0 right-0 md:backdrop-blur md:bg-black/30 ">
      <div className="max-w-screen-2xl mx-auto top-0  py-2 ">
        <nav className="md:flex md:justify-between md:items-center ">
          {/* navbar left site logo and text content  */}
          <div className="flex items-center gap-3 mx-auto md:mx-0">
            <Image className="w-20" src={logo} alt="logo" />
            <h1 className="text-3xl md:text-white font-cinzel  font-bold">
              {" "}
              We Are
              <span className="text-[#FEA833]"> Friends</span>
            </h1>
          </div>
          {/* menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-2 top-6 text-4xl transition-all  duration-500 text-[#FEA833] cursor-pointer md:hidden"
          >
            {open ? <GiSplitCross /> : <IoMenuSharp />}
          </div>

          {/* main menu  */}
          <div
            className={`flex flex-col h-screen md:h-max bg-white/100 md:bg-transparent w-full md:w-max left-0  md:z-auto -z-50 md:flex-row md:items-center gap-8 py-6 md:py-0 absolute md:static transition-all duration-500 ease-in ${
              open
                ? "right-20 opacity-100"
                : "right-[-490px] opacity-0 md:opacity-100"
            }`}
          >
            {/* maping manu  */}
            {navMenu.map((item) => (
              <div key={item.Title}>
                <Link
                  className=" md:text-white text-[16px] font-medium font-cinzel "
                  href={item.Route}
                >
                  {item.Title}
                </Link>
              </div>
            ))}

            <div className="md:ml-20">
               <ShareButton><Link href='/authentication'>Login</Link></ShareButton>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
