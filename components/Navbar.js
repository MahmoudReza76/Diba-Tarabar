"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import MobileMenu from "./MobileMenu";

const links = [
  { name: "خانه", href: "/", id: 1 },
  { name: "خدمات ما", href: "/hi", id: 2 },
  { name: "استعلام قیمت", href: "/hey", id: 3 },
  { name: " بلاگ", href: "/hoy", id: 4 },
  { name: "تماس با ما", href: "/by", id: 5 },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="h-auto absolute w-screen top-0 mt-3 z-10">
      <div className="lg:h-11 h-8 flex justify-between items-center px-1.5 mx-9 bg-white rounded-2xl">
        <div className="hidden lg:flex flex-row">
          {links.map((link) => (
            <div key={link.id}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className="bg-blue-500 xl:px-5 xl:py-1.5 px-3 py-1.5 rounded-lg text-white text-base "
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-right xl:px-5 xl:py-1.5  px-3 py-1.5 text-black text-opacity-80 text-base "
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="lg:hidden flex">
          <MobileMenu links={links} />
        </div>

        {/* logo */}
        <div className=" flex gap-2 lg:ml-56 items-center">
          <h1 className="text-slate-500 lg:text-[1vw] text-xl font-black font-['Nunito']">
            BAR
          </h1>
          <h1 className="text-blue-500 lg:text-[1.5vw] text-2xl font-black font-['Nunito']">
            DIBA
          </h1>
        </div>

        {/* register button */}
        <Link
          href="/register/login"
          className=" sm:flex hidden flex-row gap-1 items-center text-white text-base "
        >
          <span className="w-[150px] h-[34px] hidden lg:flex justify-center items-center bg-blue-500 hover:bg-blue-500/80 transition-all delay-100 rounded-lg ">
            <LoginIcon className="h-4" />
            <span>ثبت نام / ورود</span>
          </span>
          <span className="lg:hidden flex w-6 h-6  ">
            <PersonIcon className="text-blue-500" />
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
