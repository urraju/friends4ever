"use client";

import Link from "next/link";
import logo from "../../assets/all-img/others/logo.png";
import Image from "next/image";
import { IoMenuSharp } from "react-icons/io5";
import { GiSplitCross } from "react-icons/gi";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "./navbar.modules.css";
import ShareButton from "@/shared/Button/ShareButton";
import Headroom from "react-headroom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  const navMenu = [
    { Title: "Home", Route: "/" },
    { Title: "Friends", Route: "/friends" },
    { Title: "About Us", Route: "/aboutus" },
    { Title: "Contact", Route: "/contact" },
    { Title: "Add Story", Route: "/addstory" },
  ];

  return (
    <Headroom
      style={{
        WebkitTransition: "all .5s ease-in-out",
        MozTransition: "all .5s ease-in-out",
        OTransition: "all .5s ease-in-out",
        transition: "all .5s ease-in-out",
      }}
    >
      <div className="sticky z-50 top-0 left-0 right-0   max-w-screen-2xl mx-auto rounded-b-xl">
        <div className="max-w-screen-2xl mx-auto top-0 py-2">
          <nav className="md:flex md:justify-between md:items-center">
            {/* Logo */}
            <div className="flex items-center gap-3 mx-auto md:mx-0">
              <Image className="w-16" src={logo} alt="logo" />
              <h1 className="text-3xl md:text-white font-cinzel font-bold">
                We Are <span className="text-[#FEA833]">Friends</span>
              </h1>
            </div>

            {/* Menu Icon */}
            <div
              onClick={() => setOpen(!open)}
              className="absolute right-2 top-6 text-4xl transition-all duration-500 text-[#FEA833] cursor-pointer md:hidden"
            >
              {open ? <GiSplitCross /> : <IoMenuSharp />}
            </div>

            {/* Main Menu */}
            <div
              className={`flex flex-col h-screen md:h-max bg-white md:bg-transparent w-full md:w-max left-0 md:z-auto z-50 md:flex-row md:items-center gap-8 py-6 md:py-0 absolute md:static transition-all duration-500 ease-in ${
                open
                  ? "right-0 opacity-100"
                  : "right-[-490px] opacity-0 md:opacity-100"
              }`}
            >
              {/* Mapping Menu */}
              {navMenu.map((item) => (
                <div key={item.Title}>
                  <Link
                    className={`text-[16px] font-medium font-cinzel ${
                      pathName === item.Route ? "text-[#FEA833]" : "text-white"
                    }`}
                    href={item.Route}
                  >
                    {item.Title}
                  </Link>
                </div>
              ))}

              <div className="md:ml-20">
                <ShareButton>
                  <Link href="/authentication">Login</Link>
                </ShareButton>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </Headroom>
  );
};

export default Navbar;
