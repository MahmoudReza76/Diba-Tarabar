import React from "react";
import Image from "next/image";
import Link from "next/link";
function FirstTabContent({ data }) {
  return (
    <div className="w-full h-full ">
      <div className="w-full flex justify-center items-center flex-col py-5  ">
        <div className=" flex w-[75rem] gap-16 justify-center items-center flex-row border-b-4 border-zinc-100 pb-10 ">
          <div className="w-full h-full ">
            <Image
              src={data[0]?.imageUrl}
              alt={`photo ${data[0]?.overview}`}
              width={500}
              height={500}
              className=" w-[36rem] h-[28.13rem] rounded shadow "
            />
          </div>
          <div className=" flex w-full justify-center items-start flex-col gap-5">
            <h1 className="text-right text-black text-3xl font-bold">
              {data[0]?.title}
            </h1>
            <p className="text-xl line-clamp-4 leading-8">
              {" "}
              {data[0]?.overview}
            </p>

            <div className="w-full flex justify-end mt-2">
              <button className=" w-[11rem] flex items-center justify-center h-14 bg-white rounded-2xl border-2 border-blue-500 border-opacity-75 hover:bg-blue-500/20 ">
                <Link
                  href="/"
                  className=" text-center text-blue-500 text-opacity-75 text-2xl font-medium "
                >
                  ادامه مطلب
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex justify-center py-8">
          <div className="w-[80rem] grid grid-cols-3 justify-center items-center gap-4 gap-y-6   ">
            {data.map((item) => (
              <div
                key={item.id}
                className="w-full h-full flex justify-center flex-col "
              >
                <div className="w-full h-full flex justify-center">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={500}
                    height={500}
                    className=" w-[21rem] h-72 rounded shadow"
                  />
                </div>
                <div className="w-full h-full flex justify-center items-start pt-4">
                  <div className=" w-[21rem] flex justify-center items-center flex-col">
                    <h1 className="w-full text-right text-black text-lg font-bold flex justify-start ">
                      {item.title}
                    </h1>
                    <p className="text-right text-zinc-800 text-base font-normal line-clamp-2">
                      {item.overview}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstTabContent;
