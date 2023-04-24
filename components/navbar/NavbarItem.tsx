"use client";

import React from "react";

interface NavbarItemProps {
  label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <button className="text-white cursor-pointer font-semibold hover:text-gray-300 transition">
      {label}
    </button>
  );
};

export default NavbarItem;
