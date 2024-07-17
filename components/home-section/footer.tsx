/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r pt-20 from-black via-pink-950 to-blue-950">
      <div className="container flex gap-8 text-white">
        <div className="w-[40%] px-20">
          <h1 className="text-3xl">AdsBath</h1>
          <p className="py-8">
            Tempus congue tellus semper sapien urna. Tellus posuere ut.
          </p>
          <div className="flex object-cover gap-8">
            {" "}
            <img
              className="w-[24px] h-[24px]"
              src="/image copy 12.png"
              alt=""
            />
            <img
              className="w-[24px] h-[24px]"
              src="/image copy 13.png"
              alt=""
            />
            <img
              className="w-[24px] h-[24px]"
              src="/image copy 14.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-[10%]">
          <header>Services</header>
          <p>Digital Strategy</p>
          <p>Content Planing</p>
          <p>Graphic Design</p>
          <p>Website Design</p>
        </div>
        <div className="w-[10%]">
          {" "}
          <header>Services</header>
          <p>Digital Strategy</p>
          <p>Content Planing</p>
          <p>Graphic Design</p>
          <p>Website Design</p>
        </div>
        <div className="flex flex-col gap-10 text-start w-[40%]">
          <header>Subscribe</header>
          <div className="flex flex-col w-full gap-10 max-w-sm  space-x-2">
            <input
              className="w-[318px] items-center h-10"
              type="email"
              placeholder="Email"
            />
            <Button className="bg-blue-600 w-[318px]" type="submit">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      Footer
    </div>
  );
};

export default Footer;
