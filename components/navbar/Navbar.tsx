"use client";

import React, { useCallback, useEffect, useState } from "react";
import Logo from "./Logo";
import NavbarItem from "./NavbarItem";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import MenuItem from "./MenuItem";
import Image from "next/image";
import { redImage } from "@/public/images";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [ShowAccount, setIsShowAccount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Cursor Open Browser
  const handleMouseOver = useCallback(() => {
    setIsOpen(true);
    setShow(true);
  }, []);

  const handleMouseOut = useCallback(() => {
    setIsOpen(false);
  }, []);

  //Cursor Open Account
  const AccountMouseOver = useCallback(() => {
    setIsShowAccount(true);
    setShow(true);
  }, []);

  const AccountMouseOut = useCallback(() => {
    setIsShowAccount(false);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center trasition duration-500
        ${showBackground ? "bg-zinc-900 bg-opacity-90" : ""}
        
        `}
      >
        <Logo />

        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My lists" />
          <NavbarItem label="Browse by languages" />
        </div>

        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <button className="text-white text-sm">Browse</button>
          <BsChevronDown
            className={`text-white transition ${
              isOpen ? "rotate-180" : "rotate-0"
            } `}
          />
          {isOpen && <MenuItem visible={show} />}
        </div>

        <div className="flex flex-row  ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>

          <div
            onMouseOver={AccountMouseOver}
            onMouseOut={AccountMouseOut}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <Image src={redImage} alt="profile" />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                ShowAccount ? "rotate-180" : "rotate-0"
              } `}
            />
            {ShowAccount && <AccountMenu visible={show} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
