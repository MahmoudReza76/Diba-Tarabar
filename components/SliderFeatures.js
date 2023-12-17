"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import checkList from "../public/checklist.png";
import delivery from "../public/fast.png";
import map from "../public/location.png";
import Image from "next/image";
//arrow style
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#2F89FC",
        position: "absolute",
        right: "25",
        zIndex: "10",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosNewIcon
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#2F89FC",
        position: "absolute",
        left: "20",
        zIndex: "25",
      }}
      onClick={onClick}
    />
  );
}

function SliderFeatures() {
  const settings = {
    dots: false,
    infinite: true,
    touchMove: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider
      {...settings}
      className=" w-full h-auto flex justify-center items-center   "
    >
      <div className="w-[398px] h-[185.93px] px-20 flex justify-center  items-center bg-white rounded-lg shadow p-4   text-blue-500">
        <div className=" w-full flex justify-center">
          <Image
            src={checkList}
            alt="checklist"
            width={200}
            height={200}
            className="w-12 h-12"
          />
        </div>
        <div>
          <h1 className="text-center  text-opacity-80 md:text-2xl text-sm font-semibold">
            سهولت استعلام بار
          </h1>
          <p className="text-center md:text-base text-[9px] text-opacity-75 mt-2 font-medium">
            با قرار گرفتن بار شما در سامانه اعلام بار، رانندگانی که قصد حمل بار
            شما را دارند با شما تماس خواهند گرفت و سپس راننده ناوگان متناسب با
            محموله‌تان موفق به حمل بار شما خواهند شد.
          </p>
        </div>
      </div>
      <div className="w-[398px] h-[185.93px] px-20  flex flex-col justify-center items-center bg-white rounded-lg shadow border-black gap-6 p-4  text-blue-500">
        <div className=" w-full flex justify-center">
          <Image
            src={delivery}
            alt="delivery"
            width={200}
            height={200}
            className="w-12 h-12"
          />
        </div>
        <div>
          <h1 className="text-center  text-opacity-80 md:text-2xl text-sm font-semibold">
            سرعت در ارسال
          </h1>
          <p className="text-center md:text-base text-[9px] text-opacity-75 mt-2 font-medium">
            با قرار گرفتن بار شما در سامانه اعلام بار، رانندگانی که قصد حمل بار
            شما را دارند با شما تماس خواهند گرفت و سپس راننده ناوگان متناسب با
            محموله‌تان موفق به حمل بار شما خواهند شد.
          </p>
        </div>
      </div>
      <div className="w-[398px] h-[185.93px] px-20  flex flex-col justify-center items-center bg-white rounded-lg shadow border-black gap-6 p-4  text-blue-500">
        <div className=" w-full flex justify-center ">
          <Image
            src={map}
            alt="map"
            width={200}
            height={200}
            className="w-12 h-12"
          />
        </div>
        <div>
          <h1 className="text-center text-opacity-80 md:text-2xl text-sm font-semibold">
            ارسال به سراسر استان
          </h1>
          <p className="text-center md:text-base text-[9px] text-opacity-75 mt-2 font-medium">
            با قرار گرفتن بار شما در سامانه اعلام بار، رانندگانی که قصد حمل بار
            شما را دارند با شما تماس خواهند گرفت و سپس راننده ناوگان متناسب با
            محموله‌تان موفق به حمل بار شما خواهند شد.
          </p>
        </div>
      </div>
    </Slider>
  );
}

export default SliderFeatures;
