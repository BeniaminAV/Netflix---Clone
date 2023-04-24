"use client";

import React from "react";

interface MenuItemShowProps {
  label: string;
}

const MenuItemShow: React.FC<MenuItemShowProps> = ({ label }) => {
  return (
    <div className="px-3 p-3 text-center text-white hover:bg-white/10">{label}</div>
  );
};

export default MenuItemShow;
