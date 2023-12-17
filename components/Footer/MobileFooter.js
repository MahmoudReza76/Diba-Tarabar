import Link from "next/link";
import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { PiTelegramLogo } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function MobileFooter() {
  return (
    <footer className="w-full h-80 bg-blue-500 sm:hidden block p-4">
      <div className="w-full h-full flex flex-col justify-center items-center  ">
        <div className=" flex flex-col w-[22.5rem] gap-4 justify-center items-center border-b-2 border-white">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-white lg:text-[1vw] text-xl font-black font-['Nunito']">
              BAR
            </h1>
            <h1 className="text-white lg:text-[1.5vw] text-2xl font-black font-['Nunito']">
              DIBA
            </h1>
          </div>
          <div className="w-full flex justify-center gap-1 items-center flex-col text-center text-white text-sm font-medium">
            <Link href="/">خانه</Link>
            <Link href="/">خدمات ما</Link>
            <Link href="/">استعلام قیمت</Link>
            <Link href="/">بلاگ</Link>
            <Link href="/">درباره ما</Link>
          </div>
          <div className="flex flex-row justify-center gap-4 pb-4">
            <BsTwitterX className="w-6 h-6 fill-white" />
            <PiTelegramLogo className="w-6 h-6 fill-white" />
            <RiInstagramFill className="w-6 h-6 fill-white" />
          </div>
        </div>
        <div className="flwx justify-center items-center pt-3">
          <p className="text-center text-white text-base font-bold">
            جهت دریافت مشاوره رایگان شماره خود را وارد کنید:
          </p>
          <div className="w-full flex justify-center mt-4">
            <input
              className="w-[162.75px] h-[31.50px] bg-white rounded-lg absolute text-left px-3 text-neutral-400 text-sm font-normal border-none"
              type="text"
              placeholder="02833653553"
            />
            <button className="w-[33px] h-[31.50px] bg-green-500 rounded-lg relative  left-20">
              <ArrowForwardIcon className="text-white w-[18px] h-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MobileFooter;
