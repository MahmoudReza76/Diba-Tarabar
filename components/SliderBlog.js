"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
      }}
      onClick={onClick}
    />
  );
}

function SliderBlog({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    touchMove: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-full px-40 md:hidden hidden sm:block">
      <Slider {...settings}>
        {data.map((post) => (
          <div
            key={post._id}
            className=" flex justify-center items-center pt-4 "
          >
            <Image
              src={post.imageUrl}
              alt={`photo ${post.title}`}
              width={500}
              height={500}
              className="w-[136.50px] h-[162.50px] rounded-tl-[40px] rounded-lg shadow relative"
            />

            <div className="w-[120px] h-[129px] bg-white rounded-lg shadow absolute -bottom-3 translate-x-20 ">
              <div className="w-full px-2 py-3 flex flex-col gap-2">
                <h1 className="text-[8px] text-right font-bold leading-2 line-clamp-2">
                  {post.title}
                </h1>
                <p className="text-[6px] text-right font-normal leading-5 line-clamp-4">
                  {post.overview}
                </p>
                <button className="w-[53px] h-[17px] mt-4 bg-blue-500 hover:bg-blue-500/80 hover:shadow-md rounded-2xl text-center text-white text-sm font-semibold ">
                  ادامه مطلب
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderBlog;
