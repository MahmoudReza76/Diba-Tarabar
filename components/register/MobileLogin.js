import Image from "next/image";
import React from "react";
import registerImage from "../../public/registerimage1.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
function MobileLogin() {
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
          <h1 className=" flex justify-center items-center text-center text-white text-3xl mb-10 font-black font-['Nunito'] ">
            Tarabar<span className="text-blue-500">Diba</span>
          </h1>
          <div className="  sm:w-[30rem] w-[21rem] sm:h-[477px] h-[357.75px] px-5  flex bg-white justify-between items-center flex-col sm:gap-8 gap-5 rounded-2xl ">
            <h3 className="w-full h-[20vh] text-start text-black text-opacity-80 sm:text-2xl text-lg font-normal flex justify-start items-center pt-3">
              وارد حساب کاربری خود شوید :
            </h3>
            <form className="flex justify-center flex-col gap-5">
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
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  className="sm:w-5 sm:h-[19.88px] w-[15px] h-[14.91px] rounded border border-black border-opacity-60"
                />
                <p className="text-right text-black text-opacity-80 sm:text-base text-xs  font-medium">
                  یادآوری رمز عبور و نام کاربری
                </p>
              </div>
              <div className="w-full flex justify-center gap-3  ">
                <button
                  type="submit"
                  className="sm:w-40 sm:h-[59.62px] w-[120px] h-[44.72px] bg-blue-500 hover:bg-blue-500/80 rounded-2xl text-white sm:text-2xl text-lg font-bold"
                >
                  ورود
                </button>
                <Link
                  href="/"
                  className="sm:w-40 sm:h-[59.62px] w-[120px] h-[44.72px] bg-white hover:bg-blue-500/10 border-2 border-blue-500 text-opacity-90 rounded-2xl text-blue-500 sm:text-2xl text-lg font-bold flex items-center justify-center"
                >
                  ثبت نام
                </Link>
              </div>
            </form>
            <Link
              className="text-black text-opacity-80 sm:text-base text-xs font-bold mb-8 "
              href="/"
            >
              در صورتی که رمز عبور خود را فراموش کردید اینجا کلیک کنید.
            </Link>
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

export default MobileLogin;
