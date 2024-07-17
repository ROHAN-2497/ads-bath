/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r pt-10 from-black via-pink-950 to-blue-950">
      <div className="container divide-y-2 ">
        <div className=" flex pb-10 gap-4 justify-between items-center text-white">
          <div className="w-[30%] px-10">
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
          <div className="w-[10%] mr-8">
            <header className="pb-4">Services</header>
            <p>Digital Strategy</p>
            <p className="py-2">Content Planing</p>
            <p className="pb-2">Graphic Design</p>
            <p>Website Design</p>
          </div>
          <div className="w-[10%] mr-8">
            <header className="pb-4">Services</header>
            <p>Digital Strategy</p>
            <p className="py-2">Content Planing</p>
            <p className="pb-2">Graphic Design</p>
            <p>Website Design</p>
          </div>

          <div className="flex flex-col gap-10 text-start w-[30%]">
            <header>Subscribe</header>
            <div className="flex flex-col w-full gap-10 max-w-sm">
              <input
                className="w-[318px] p-4 rounded items-center h-10"
                type="email"
                placeholder="Email"
              />
              <Button className="bg-blue-600 w-[318px]" type="submit">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="container mt-10 pt-10 pb-10 flex justify-between text-white">
          <div className="flex gap-4">
            <p>Copyright © 2023 AdsBath</p> |<p>FrontEnd by Rohan</p>
          </div>
          <div className="flex gap-4">
            <p>Term of use</p> | <p>Privacy Policy</p>| <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
