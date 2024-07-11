import React from "react";
import { Button } from "../ui/button";
import { Ghost } from "lucide-react";
import Image from "next/image";

const Ads = () => {
  return (
    <div className="pt-20">
      <div className="container text-white  md:flex items-center justify-center w-full px-40 gap-10">
        <div className="w-[50%] flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            {" "}
            <h2 className="text-[48px] ">
              Get a Free Google <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Ads Audit
              </span>
               in seconds
            </h2>
            <p className="mb-5">
              Start exploring the world of digital art and NFTs today and take
              control of your digital assets with confidence!
            </p>
          </div>
          <div className=" flex gap-5">
            <button className="bg-gradient-to-r px-4 py-2 rounded from-indigo-500 via-purple-500 to-pink-400">
              <span className="text-white text-xs font-semibold">
                {" "}
                AUDIT NOW
              </span>
            </button>
            <Button variant={"ghost"}>Learn More</Button>
          </div>
        </div>
        <div className="w-[50%]">
          <Image width={630} height={400} src={"/image copy.png"} alt={""} />
        </div>
      </div>
    </div>
  );
};

export default Ads;
