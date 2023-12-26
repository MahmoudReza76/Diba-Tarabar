"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

function MobileSliderBlog({ data }) {
  return (
    <div className="w-full sm:hidden ">
      <div className="pr-1.5">
        <Swiper
          className="h-52"
          spaceBetween={10}
          slidesPerView={2.5}
          Pagination={{ clickable: true }}
          freeMode={true}
          modules={(FreeMode, Pagination)}
        >
          {data.map((post) => (
            <SwiperSlide
              key={post._id}
              className=" border-gray-200 w-full h-full border-2  rounded-md flex flex-col justify-center py-1  items-center shadow "
            >
              <div className="">
                <Image
                  src={post.imageUrl}
                  alt={`photo ${post.title}`}
                  width={500}
                  height={500}
                  className="w-full h-[100px] rounded-lg px-1  "
                />
              </div>
              <div className=" bg-white w-full flex flex-col  p-2  mt-1 ">
                <h1 className="text-right text-[10px] font-bold leading-2 line-clamp-2">
                  {post.title}
                </h1>
                <p className="text-[8px] text-right font-normal leading-3 line-clamp-4">
                  {post.overview}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default MobileSliderBlog;
