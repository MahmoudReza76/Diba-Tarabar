import React from "react";
import Image from "next/image";
import heroImage from "../public/banner.png";

function Hero() {
  return (
    <section className="w-full h-full">
      <div className=" w-full md:h-[95vh] sm:h-[56vh] pb:h-64 relative ">
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black to-black opacity-70"></div>
        <Image
          className="w-full h-full object-cover"
          src={heroImage}
          alt="hero image"
          width={500}
          height={500}
        />

        <div className=" h-full w-full  ">
          <div className="w-full absolute flex justify-center flex-col items-center pt-7 mt-8 sm:gap-10 gap-3 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2">
            <div className="w-full flex-col justify-center  ">
              <h1 className=" text-white md:text-4xl sm:text-2xl text-lg font-bold text-center">
                شرکت دیبا ترابر البرز
              </h1>
              <p className="text-center text-white sm:text-2xl text-xs font-normal mt-4">
                بزرگترین سامانه حمل و نقل هوشمند در استان قزوین
              </p>
            </div>

            <div className="w-full h-full mt-1  flex flex-row justify-center items-center gap-4">
              <button className="md:w-[172px] md:h-14 w-[100px] md:text-sm text-xs h-8 hover:bg-white/20 active:scale-95 md:rounded-2xl rounded-md border-2 border-zinc-400 border-opacity-60 text-center text-white">
                مشاوره رایگان
              </button>
              <button className="md:w-[172px] md:h-14 w-[100px] md:text-sm text-xs h-8 bg-blue-500 hover:bg-blue-500/60 active:scale-95 bg-opacity-80 md:rounded-2xl rounded-md text-white">
                استعلام قیمت
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
