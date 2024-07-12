/* eslint-disable @next/next/no-img-element */
const Chose = () => {
  return (
    <div className="container mb-20 mt-20 mx-auto">
      <div className="md:flex px-10 pb-20 gap-20">
        {" "}
        <div className="w-[50%] ">
          <img className=" w-[483px] h-[503px]" src="/bgChose.png" alt="" />
          <img
            className=" w-[204px] h-[185px] ml-96 -mt-72"
            src="/projectDone.png"
            alt=""
          />
        </div>
        <div className="w-[50%]">
          <div>
            {" "}
            <p className="bg-white w-48 p-2 uppercase text-black rounded-full text-center">
              Why Choose us
            </p>
            <h2 className="text-5xl  my-8 font-bold text-white">
              Choose Us to Grow <br /> Your Business
            </h2>
            <p className="text-white">
              Placerat sed enim felis arcu. Placerat aliquam amet eleifend
              sollicitudin mauris. Nibh sit diam vitae velit cras elit eget.
            </p>
            <div className="text-white flex items-center pt-8 gap-4">
              <img
                className="w-[32px] h-[32px]"
                src="/image copy 3.png"
                alt=""
              />
              <h4>Results-Driven Approach</h4>
            </div>
            <div className="text-white flex items-center gap-4  py-8">
              <img
                className="w-[32px] h-[32px]"
                src="/image copy 3.png"
                alt=""
              />
              <h4>Expertise in Multiple Platforms</h4>
            </div>
            <div className="text-white mb-8 flex items-center gap-4">
              <img
                className="w-[32px] h-[32px]"
                src="/image copy 3.png"
                alt=""
              />
              <h4>Continuous Optimization</h4>
            </div>
            <button className="bg-gradient-to-r px-5 py-2 rounded from-indigo-500 via-purple-500 to-pink-400">
              <span className="text-white text-xs"> Contact Now</span>
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Chose;
