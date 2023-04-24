"use client";

import { logo } from "@/public/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      src={logo}
      alt="logo"
      height={100}
      width={100}
      className="cursor-pointer"
    />
  );
};

export default Logo;
