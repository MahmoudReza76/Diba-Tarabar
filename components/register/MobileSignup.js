import Image from "next/image";
import React from "react";
import registerImage from "../../public/registerimage1.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
function MobileSignup() {
  return (
    <div className="w-full h-full md:hidden block relative">
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black to-black opacity-40"></div>
      <div className="w-full h-full">
        <Image
          src={registerImage}
          alt="login image"
          width={800}
          height={800}
          className="w-full min-h-screen object-cover"
        />
      </div>
      <div className=" w-full h-full flex justify-center flex-col  absolute top-0 ">
        <div className=" h-auto flex pt-10  mt-5 justify-evenly items-center  flex-col">
          <h1 className=" flex justify-center items-center text-center text-white text-3xl mb-8 font-black font-['Nunito'] ">
            Tarabar<span className="text-blue-500">Diba</span>
          </h1>
          <div className="  sm:w-[30rem] w-[21rem] sm:h-[600px] h-[544.50px] px-5  flex bg-white justify-start items-center flex-col  rounded-2xl ">
            <h3 className="w-full h-[12vh] text-center text-black text-opacity-80 sm:text-2xl text-lg mr-14 font-normal flex justify-start items-center pt-3">
              از اینجا ثبت نام کنید:
            </h3>
            <form className="flex justify-center flex-col gap-5 mt-5">
              <div className="w-full flex justify-center items-center gap-3">
                <div className="flex justify-center flex-col relative">
                  <label
                    for="name"
                    className="text-right px-2 text-black text-opacity-70 text-sm  font-bold bg-white absolute z-10 -top-2 right-5 "
                  >
                    نام
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="sm:w-[140px] sm:h-[60px] w-[105px] h-[45px]  sm:rounded-2xl rounded-xl  border-2  border-opacity-25 text-left text-lg text-[#565656] px-2  font-bold border-stone-300  "
                  />
                </div>
                <div className="flex justify-center flex-col relative">
                  <label
                    for="fname"
                    className="text-right px-2 text-black text-opacity-70 text-sm  font-bold bg-white absolute z-10 -top-2 right-5 "
                  >
                    نام خانوادگی
                  </label>
                  <input
                    id="fname"
                    name="fname"
                    type="text"
                    className="sm:w-[230px] sm:h-[60px] w-[172.50px] h-[45px]   sm:rounded-2xl rounded-xl  border-2  border-opacity-25 text-left text-lg text-[#565656] px-2  font-bold border-stone-300  "
                  />
                </div>
              </div>
              <div className="flex justify-center flex-col relative">
                <label
                  for="number"
                  className="text-right px-2 text-black text-opacity-70 text-sm  font-bold bg-white absolute z-10 -top-2 right-5 "
                >
                  شماره همراه
                </label>
                <input
                  id="number"
                  name="number"
                  type="number"
                  className="sm:w-96 sm:h-14 w-[285px] h-[44.72px]  sm:rounded-2xl rounded-xl  border-2  border-opacity-25 text-left text-lg text-[#565656] px-2  font-bold border-stone-300  "
                />
              </div>
              <div className="flex justify-center flex-col relative">
                <label
                  for="email"
                  className="text-right px-2 text-black text-opacity-70 text-sm  font-bold bg-white absolute z-10 -top-2 right-5 "
                >
                  ایمیل
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="sm:w-96 sm:h-14 w-[285px] h-[44.72px]  sm:rounded-2xl rounded-xl  border-2  border-opacity-25 text-left text-lg text-[#565656] px-2  font-bold border-stone-300  "
                />
              </div>

              <div className="fkex justify-center flex-col relative">
                <label
                  for="password"
                  className=" text-right px-2 text-black text-opacity-70 text-sm  font-bold bg-white absolute z-10 -top-2 right-5"
                >
                  رمز عبور
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className=" sm:w-96 sm:h-14 w-[285px] h-[44.72px]  sm:rounded-2xl rounded-xl border-2  border-opacity-25 text-left text-lg text-[#565656] px-2 font-bold border-stone-300"
                />
              </div>
              <div className="flex justify-center flex-col relative">
                <label
                  for="re-pass"
                  className="text-right px-2 text-black text-opacity-70 text-sm  font-bold bg-white absolute z-10 -top-2 right-5 "
                >
                  تکرار رمز عبور
                </label>
                <input
                  id="re-pass"
                  name="re-pass"
                  type="password"
                  className="sm:w-96 sm:h-14 w-[285px] h-[44.72px]  sm:rounded-2xl rounded-xl  border-2  border-opacity-25 text-left text-lg text-[#565656] px-2  font-bold border-stone-300  "
                />
              </div>

              <div className="w-full flex justify-center gap-3  ">
                <button
                  type="submit"
                  className="sm:w-40 sm:h-[59.62px] w-[120px] h-[44.72px] bg-blue-500 hover:bg-blue-500/80 rounded-2xl text-white sm:text-2xl text-lg font-bold"
                >
                  ثبت نام
                </button>
                <Link
                  href="/"
                  className="sm:w-40 sm:h-[59.62px] w-[120px] h-[44.72px] bg-white hover:bg-blue-500/10 border-2 border-blue-500 text-opacity-90 rounded-2xl text-blue-500 sm:text-2xl text-lg font-bold flex items-center justify-center"
                >
                  ورود
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full h-32 flex justify-center items-center">
          <Link
            className="flex   justify-center items-end text-center text-white hover:text-white/80 sm:text-2xl text-lg  font-normal"
            href="/"
          >
            رفتن به صفحه اصلی <ArrowBackIcon className=" w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileSignup;
