import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MobileFooter from "./MobileFooter";
import qrCode from "../../public/Rectangle.png";
import facebook from "../../public/facebook.png";
import x from "../../public/x.png";
import telegram from "../../public/telegram.png";
import instagram from "../../public/instagram.png";

function Footer() {
  return (
    <>
      <footer className="w-full md:h-[579px]  h-[289px] bg-blue-500 px-20 overflow-hidden hidden sm:block ">
        <div className="w-full flex justify-center items-center flex-col md:gap-5 gap-3 border-b-4  md:py-10 py-6  ">
          <h1 className="text-white md:text-2xl text-xs  font-bold text-center">
            جهت دریافت مشاوره رایگان شماره خود را وارد کنید:
          </h1>
          <div className="w-full flex justify-center">
            <input
              className="md:w-[217px] md:h-[42px] w-[108.50px] h-[21px] bg-white rounded-lg absolute text-left px-3 text-neutral-400 md:text-lg text-[9px] font-normal border-none"
              type="text"
              placeholder="02833653553"
            />
            <button className="md:w-11 md:h-[42px] w-[22px] h-[21px] bg-green-500 rounded-lg relative md:left-24 left-12">
              <ArrowForwardIcon className="text-white md:w-6 md:h-6 h-3 w-3" />
            </button>
          </div>
          <p className="text-white md:text-xl text-[10px]  font-normal text-center">
            مشاورین ما در اولین فرصت با شما تماس می گیرند.
          </p>
        </div>
        <div className="w-full flex justify-between flex-row mt-8  items-start pl-16">
          <div className="flex justify-center flex-col gap-2 ">
            <h4 className="text-white md:text-lg  text-[9px]  font-bold md:mb-2 mb-1">
              دسترسی سریع
            </h4>
            <Link
              className="text-right text-white md:text-base text-[8px] font-bold "
              href="/"
            >
              صفحه اصلی
            </Link>
            <Link
              className="text-right text-white md:text-base text-[8px] font-bold "
              href="/"
            >
              خدمات ما
            </Link>
            <Link
              className="text-right text-white md:text-base text-[8px] font-bold "
              href="/"
            >
              استعلام قیمت
            </Link>
            <Link
              className="text-right text-white md:text-base text-[8px] font-bold "
              href="/"
            >
              درباره ما
            </Link>
            <Link
              className="text-right text-white md:text-base text-[8px] font-bold "
              href="/"
            >
              تماس با ما
            </Link>
          </div>
          <div className="">
            <p className="text-white md:text-lg text-[9px] font-medium">
              شماره تماس: 3333333(028)
            </p>
            <p className="text-white md:text-lg text-[9px] font-medium md:leading-5 leading-4">
              درس: شهر صنعتی البرز، شهرک گوگان،جنب <br />
              شرکت چینی مینا، شرکت دیبا ترابر البرز
            </p>
          </div>
          <div className="flex justify-center flex-col gap-3 ">
            <h4 className="text-white md:text-lg  text-[9px]  font-bold md:mb-2 mb-1">
              {" "}
              لینک های مرتبط
            </h4>
            <Link
              className="text-left text-white md:text-base text-[8px] font-bold "
              href="/"
            >
              rmto.ir
            </Link>
            <Link
              className="text-left text-white md:text-base text-[8px] font-bold "
              href="/"
            >
              upto.ir
            </Link>
            <Link
              className="text-left text-white md:text-base text-[8px] font-bold "
              href="/"
            >
              news.mrud.ir
            </Link>
          </div>
          <div className="flex justify-center flex-col gap-3 ">
            <h4 className="text-white md:text-lg  text-[9px]  font-bold mb-2">
              دانلود نرم افزار
            </h4>

            {/* qrCode and apps download section */}
            <div className="flex justify-center flex-row gap-4">
              <Image
                src={qrCode}
                alt="qr code"
                width={200}
                height={200}
                className="md:w-[95px] md:h-[95px] w-[47.50px] h-[47.50px] bg-white rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <button className="md:w-[119px] md:h-10 w-[59.50px] h-5 bg-green-500 rounded-lg">
                  <Link
                    className="text-white md:text-base text-[8px] flex justify-center font-bold"
                    href="/"
                  >
                    دانلود اندروید
                  </Link>
                </button>
                <button className="md:w-[119px] md:h-10 w-[59.50px] h-5 bg-green-500 rounded-lg">
                  <Link
                    className="text-white md:text-base text-[8px] flex justify-center font-bold"
                    href="/"
                  >
                    دانلود آیفون
                  </Link>
                </button>
              </div>
            </div>

            {/* footer icons */}
            <div className="flex flex-row gap-3">
              <Image
                src={facebook}
                alt="facebook icon"
                width={100}
                height={100}
                className="md:w-12 md:h-12 w-6 h-6"
              />
              <Image
                src={x}
                alt="x icon"
                width={100}
                height={100}
                className="md:w-12 md:h-12 w-6 h-6"
              />
              <Image
                src={telegram}
                alt="telegram icon"
                width={100}
                height={100}
                className="md:w-12 md:h-12 w-6 h-6"
              />
              <Image
                src={instagram}
                alt="instagram icon"
                width={100}
                height={100}
                className="md:w-12 md:h-12 w-6 h-6"
              />
            </div>
          </div>
        </div>
      </footer>
      <MobileFooter />
    </>
  );
}

export default Footer;
