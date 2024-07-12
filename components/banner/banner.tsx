/* eslint-disable @next/next/no-img-element */
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div>
      <div className="md:flex items-center justify-between px-20 text-white">
        <div className="w-[70%]">
          <h2 className=" text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-white to-pink-500">
            Amazing website creation with Bantu agency
          </h2>
          <p className="py-8">
            help you to build website company that is modern, user friendly,
          </p>
          <Button
            className="text-black rounded-full font-medium py-6 px-8"
            variant="outline"
          >
            Get Started <BsArrowUpRightCircle className="ml-2" />
          </Button>
        </div>
        <div className="w-[50%]">
          <img src="/image copy 2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
