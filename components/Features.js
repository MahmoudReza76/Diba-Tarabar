import React from "react";
import Image from "next/image";
import checkList from "../public/checklist.png";
import delivery from "../public/fast.png";
import map from "../public/location.png";
import SliderFeatures from "./SliderFeatures";

function Features() {
  return (
    <section className="w-full md:h-[50vh] h-[25vh]">
      <div className=" w-full hidden sm:flex flex-row justify-evenly absolute  md:mt-16 md:top-3/4 bottom-60">
        <div className="md:w-80 md:h-80 h-44 w-44 flex flex-col justify-center items-center bg-white rounded-lg shadow border-black gap-6 p-4  text-blue-500">
          <div className="md:w-20 md:h-20 w-12 h-12">
            <Image src={checkList} alt="checklist" width={200} height={200} />
          </div>
          <div>
            <h1 className="text-center  text-opacity-80 md:text-2xl text-sm font-semibold">
              سهولت استعلام بار
            </h1>
            <p className="text-right md:text-base text-[9px] text-opacity-75 mt-2 font-medium">
              با قرار گرفتن بار شما در سامانه اعلام بار، رانندگانی که قصد حمل
              بار شما را دارند با شما تماس خواهند گرفت و سپس راننده ناوگان
              متناسب با محموله‌تان موفق به حمل بار شما خواهند شد.
            </p>
          </div>
        </div>
        <div className="md:w-80 md:h-80 h-44 w-44 flex flex-col justify-center items-center bg-white rounded-lg shadow border-black gap-6 p-4  text-blue-500">
          <div className="md:w-20 md:h-20 w-12 h-12">
            <Image src={delivery} alt="delivery" width={200} height={200} />
          </div>
          <div>
            <h1 className="text-center  text-opacity-80 md:text-2xl text-sm font-semibold">
              سرعت در ارسال
            </h1>
            <p className="text-right md:text-base text-[9px] text-opacity-75 mt-2 font-medium">
              با قرار گرفتن بار شما در سامانه اعلام بار، رانندگانی که قصد حمل
              بار شما را دارند با شما تماس خواهند گرفت و سپس راننده ناوگان
              متناسب با محموله‌تان موفق به حمل بار شما خواهند شد.
            </p>
          </div>
        </div>
        <div className="md:w-80 md:h-80 h-44 w-44 flex flex-col justify-center items-center bg-white rounded-lg shadow border-black gap-6 p-4  text-blue-500">
          <div className="md:w-20 md:h-20 w-12 h-12">
            <Image src={map} alt="map" width={200} height={200} />
          </div>
          <div>
            <h1 className="text-center text-opacity-80 md:text-2xl text-sm font-semibold">
              ارسال به سراسر استان
            </h1>
            <p className="text-right md:text-base text-[9px] text-opacity-75 mt-2 font-medium">
              با قرار گرفتن بار شما در سامانه اعلام بار، رانندگانی که قصد حمل
              بار شما را دارند با شما تماس خواهند گرفت و سپس راننده ناوگان
              متناسب با محموله‌تان موفق به حمل بار شما خواهند شد.
            </p>
          </div>
        </div>
      </div>
      <div className="sm:hidden w-full px-6 py-10">
        <SliderFeatures />
      </div>
    </section>
  );
}

export default Features;
