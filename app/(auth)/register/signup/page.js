import React from "react";
import registerImage from "../../../../public/registerimage1.jpg";
import Image from "next/image";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MobileSignup from "@/components/register/MobileSignup";
function Signup() {
  return (
    <>
      <div className=" w-full h-full md:block hidden ">
        <div className=" flex justify-center items-center flex-row">
          {/* form section for Signup */}
          <div className="bg-white w-3/4 h-full flex justify-center flex-row ">
            <div className="flex pt-8 justify-center items-center gap-14 flex-col">
              <h1 className=" flex justify-center items-center text-center text-blue-500 text-3xl font-black font-['Nunito']">
                Tarabar<span>Diba</span>
              </h1>
              <div className="w-full flex justify-center items-center flex-col gap-10 ">
                <h3 className="w-full text-start pr-8 text-black text-opacity-80 lg:text-2xl text-xl font-normal">
                  از اینجا ثبت نام کنید:
                </h3>
                <form className="flex justify-center flex-col gap-5">
                  <div className="w-full flex justify-center items-center flex-row gap-3">
                    <div className="flex justify-center flex-col relative">
                      <label
                        for="name"
                        className="text-right px-2 text-black text-opacity-70 lg:text-sm text-xs font-bold bg-white absolute z-10 -top-2 right-5 "
                      >
                        نام
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className=" lg:w-[140px] lg:h-14 h-10 w-[100px]   rounded-2xl border-2  border-opacity-25 text-left text-lg text-[#565656] px-2  font-bold border-stone-300  "
                      />
                    </div>
                    <div className="flex justify-center flex-col relative">
                      <label
                        for="name"
                        className="text-right px-2 text-black text-opacity-70 lg:text-sm text-xs font-bold bg-white absolute z-10 -top-2 right-5 "
                      >
                        نام خانوادگی
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className=" lg:w-[230px] lg:h-16 h-10 w-[210px] rounded-2xl border-2  border-opacity-25 text-left text-lg text-[#565656] px-2  font-bold border-stone-300  "
                      />
                    </div>
                  </div>

                  <div className="flex justify-center flex-col relative">
                    <label
                      for="number"
                      className="text-right px-2 text-black text-opacity-70 lg:text-sm text-xs font-bold bg-white absolute z-10 -top-2 right-5 "
                    >
                      شماره همراه
                    </label>
                    <input
                      id="number"
                      name="number"
                      type="number"
                      className=" lg:w-96 lg:h-14 w-80 h-10  rounded-2xl border-2  border-opacity-25 text-left text-lg text-[#565656] px-2  font-bold border-stone-300  "
                    />
                  </div>
                  <div className="flex justify-center flex-col relative">
                    <label
                      for="email"
                      className="text-right px-2 text-black text-opacity-70 lg:text-sm text-xs font-bold bg-white absolute z-10 -top-2 right-5 "
                    >
                      ایمیل
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className=" lg:w-96 lg:h-14 w-80 h-10  rounded-2xl border-2  border-opacity-25 text-left text-lg text-[#565656] px-2  font-bold border-stone-300  "
                    />
                  </div>
                  <div className="flex justify-center flex-col relative">
                    <label
                      for="re-pass"
                      className="text-right px-2 text-black text-opacity-70 lg:text-sm text-xs font-bold bg-white absolute z-10 -top-2 right-5 "
                    >
                      تکرار پسورد
                    </label>
                    <input
                      id="re-pass"
                      name="re-pass"
                      type="password"
                      className=" lg:w-96 lg:h-14 w-80 h-10  rounded-2xl border-2  border-opacity-25 text-left text-lg text-[#565656] px-2  font-bold border-stone-300  "
                    />
                  </div>
                  <div className="fkex justify-center flex-col relative">
                    <label
                      for="password"
                      className=" text-right px-2 text-black text-opacity-70 lg:text-sm text-xs font-bold bg-white absolute z-10 -top-2 right-5"
                    >
                      رمز عبور
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className=" lg:w-96 lg:h-14 w-80 h-10 rounded-2xl border-2  border-opacity-25 text-left text-lg text-[#565656] px-2 font-bold border-stone-300"
                    />
                  </div>

                  <div className="w-full flex justify-center mt-4 ">
                    <button
                      type="submit"
                      className="lg:w-40 lg:h-[59.62px] w-32 h-12 bg-blue-500 hover:bg-blue-500/80 rounded-2xl  text-white lg:text-2xl text-xl font-bold "
                    >
                      ثبت نام
                    </button>
                  </div>
                </form>

                <div className="w-full h-[5vh] flex items-start justify-start -mt-5 ">
                  <p className="w-full text-black text-opacity-90 lg:text-xl text-base font-bold text-right ">
                    در صورتی که قبلا ثبت نام کردید از اینجا{" "}
                    <span>
                      <Link
                        className="underline hover:text-blue-500/90"
                        href="/register/login"
                      >
                        وارد
                      </Link>{" "}
                    </span>
                    شوید.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* image linear for Signup */}
          <div className="h-full w-full ">
            <div className="w-full relative">
              <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black to-black opacity-40"></div>
              <div className="w-full overflow-hidden ">
                <Image
                  src={registerImage}
                  width={5000}
                  height={5000}
                  alt="registerimage"
                  className=" w-[52rem] h-screen "
                />
                <div className="w-full absolute flex justify-center flex-col items-center pt-7 mt-10 gap-28 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2">
                  <div className="w-full h-full flex-col justify-center  ">
                    <h1 className=" text-white lg:text-[32px] text-2xl font-bold text-center">
                      شرکت دیبا ترابر البرز
                    </h1>
                    <p className="text-center text-white lg:text-2xl text-base font-normal mt-4">
                      بزرگترین سامانه حمل و نقل هوشمند در استان قزوین
                    </p>
                  </div>
                  <div className="w-full h-56 flex justify-center items-end">
                    <Link
                      className="flex  mt-6 justify-center items-end text-center text-white hover:text-white/80 lg:text-2xl text-xl font-normal"
                      href="/"
                    >
                      رفتن به صفحه اصلی <ArrowBackIcon className=" w-8 h-8" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileSignup />
    </>
  );
}

export default Signup;
