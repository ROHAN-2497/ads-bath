import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black ">
      <div className="container flex flex-nowrap  justify-between items-center">
        <div>
          <Image width={89} height={77} src="/image.png" alt="" />
        </div>
        <div className="text-white">
          <link rel="stylesheet" href="" />

          <li className="relative after:absolute hover:bg-blue-600 hover:h-[2px] hover:w-[100%] cursor-pointer">
            Home
          </li>
          <link />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
