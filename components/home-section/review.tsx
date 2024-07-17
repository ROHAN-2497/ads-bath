/* eslint-disable @next/next/no-img-element */
import React from "react";

const Review = () => {
  return (
    <div className="">
      {" "}
      <div className="md:flex mt-20 px-36 gap-20">
        <div className="flex flex-col text-white w-[35%]">
          <h3 className="text-3xl font-semibold">
            What Our Member Say About Us?
          </h3>
          <div className="flex mb-4 mt-20">
            {" "}
            <img
              className="w-[56px] h-[56px]"
              src="/image copy 10.png"
              alt=""
            />
            <img
              className="w-[56px] h-[56px] -ml-6"
              src="/image copy 9.png"
              alt=""
            />
            <img
              className="w-[56px] h-[56px] -ml-6"
              src="/image copy 8.png"
              alt=""
            />
          </div>
          <p> 10K+ Satisfied Customer</p>{" "}
        </div>
        <div className=" w-[65%] cursor-pointer">
          <img src="/image copy 11.png" alt="" />
        </div>
      </div>{" "}
      <div className="mt-20 cursor-pointer">
        <img src="/image copy 15.png" alt="" />
      </div>
    </div>
  );
};

export default Review;
