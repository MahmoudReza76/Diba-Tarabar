import React from "react";
import Post from "./Post";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function LandingBlog() {
  return (
    <section className="w-full h-auto mb-10 sm:mt-0 mt-10 ">
      <div className="w-full flex flex-col items-center justify-center gap-3 ">
        <div className="w-full flex flex-col justify-center text-center gap-2">
          <h1 className=" text-blue-500 text-right sm:text-center text-opacity-80 font-bold text-2xl hidden sm:block ">
            جدیدترین مطالب
          </h1>
          <h1 className=" text-blue-500 text-right pr-3 text-opacity-80 font-bold  text-lg sm:hidden">
            تمامی مطالب
            <span>
              <ArrowBackIosIcon className="w-[18px] h-[18px]" />
            </span>
          </h1>
          <p className="sm:flex hidden justify-center text-center text-black text-opacity-90 md:text-sm text-xs font-normal">
            شما میتوانید جدیدترین مطالب را از بخش زیر مطالعه کنید{" "}
          </p>
        </div>

        <Post />
      </div>
      <div className="w-full text-center sm:flex hidden items-center justify-center md:mt-10 mt-5 md:p-10 p-5">
        <button className="md:w-[172px] md:h-14 w-[100px] h-8 bg-white md:rounded-2xl rounded-md border-2 border-blue-500 hover:bg-blue-500/10 hover:shadow-md border-opacity-75">
          <Link
            href="/"
            className="text-center text-blue-500  text-opacity-75 md:text-xl text-xs md:font-medium font-bold"
          >
            ادامه مطالب
          </Link>
        </button>
      </div>
    </section>
  );
}

export default LandingBlog;
