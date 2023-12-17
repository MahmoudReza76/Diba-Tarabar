import { client } from "@/app/lib/sanity";
import React from "react";
import Image from "next/image";
import SliderBlog from "./SliderBlog";
import MobileSliderBlog from "./MobileSliderBlog";

//get data from sanity
async function getData() {
  const query = `*[_type=="post"][0...4]{
    "imageUrl":image.asset->url,
      title,
      overview
   }
   `;
  const data = await client.fetch(query);
  return data;
}

async function Post() {
  const data = await getData();

  return (
    <>
      <div className=" h-auto w-[60rem] grid grid-cols-1 md:grid-cols-2 gap-y-16 ">
        {data.map((post) => (
          <div
            key={post._id}
            className=" hidden md:flex justify-center items-center mr-32  pt-4  "
          >
            <Image
              src={post.imageUrl}
              alt={`photo ${post.title}`}
              width={500}
              height={500}
              className="w-[273px] h-[325px] rounded-tl-[80px] rounded-lg shadow relative"
            />

            <div className="w-60 h-[258px] bg-white rounded-lg shadow absolute translate-x-36 translate-y-12">
              <div className="w-full px-2 py-3 flex flex-col gap-2">
                <h1 className="font-semibold text-base leading-5 line-clamp-2">
                  {post.title}
                </h1>
                <p className="text-sm leading-5 line-clamp-4">
                  {post.overview}
                </p>
                <button className="w-[106px] h-[34px] mt-4 bg-blue-500 hover:bg-blue-500/80 hover:shadow-md rounded-2xl text-center text-white text-sm font-semibold ">
                  ادامه مطلب
                </button>
              </div>
            </div>
          </div>
        ))}
        <SliderBlog data={data} />
      </div>

      <MobileSliderBlog data={data} />
    </>
  );
}
export default Post;
