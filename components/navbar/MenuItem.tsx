"use client";

import React from "react";
import MenuItemShow from "./MenuItemShow";

interface MenuItemProps {
  visible?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black/60 w-56 absolute top-5 left-0 flex-col border border-gray-800 flex">
      <div className="flex flex-col">
        <MenuItemShow label="Home" />
        <MenuItemShow label="Series" />
        <MenuItemShow label="Films" />
        <MenuItemShow label="New & Popular" />
        <MenuItemShow label="My list" />
        <MenuItemShow label="Browse by Languages" />
      </div>
    </div>
  );
};

export default MenuItem;
