import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { BsArrowUpCircle } from "react-icons/bs";
import { Badge } from "../ui/badge";
/* eslint-disable @next/next/no-img-element */
const Testimonials = () => {
  return (
    <div className="container pb-20">
      <div className="md:flex px-32 gap-20 justify-between">
        {" "}
        <div className="w-[50%]">
          {" "}
          <span className="bg-white px-4 py-1 text-sm uppercase text-purple-700 rounded-full">
            Testimonial
          </span>
          <h2 className="text-5xl font-semibold text-white py-8">
            Customers Review
          </h2>
          <div className="md:flex justify-between text-white">
            <div>
              {" "}
              <p>Total Reviews</p>
              <div className="flex gap-2 py-4">
                {" "}
                <h3 className="text-3xl font-semibold">122 K </h3>
                <span className="text-sm">
                  {" "}
                  <Badge className="bg-blue-500 -mt-28">
                    24% <BsArrowUpCircle className="m-2" />{" "}
                  </Badge>
                </span>
              </div>
              <p>Pulvinar commodo arcu</p>
            </div>{" "}
            <div>
              {" "}
              <p>Average Rating</p>{" "}
              <div className="flex gap-2 py-4">
                {" "}
                <h3 className="text-3xl font-semibold">4.8</h3>
                <p>
                  {" "}
                  <Rating
                    className=""
                    style={{ maxWidth: 80 }}
                    value={4.5}
                    readOnly
                  />
                </p>
              </div>
              <p>Pulvinar commodo arcu</p>
            </div>{" "}
          </div>
        </div>{" "}
        <div className="w-[50%]">
          <img className="w-[443px] h-[300px]" src="/bgChose.png" alt="" />
        </div>
      </div>
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
        <div className="w-[65%] cursor-pointer">
          <img src="/image copy 11.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
