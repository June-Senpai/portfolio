"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarMobile() {
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0", url: "/" },
    {
      name: "About",
      icon: "id-card-outline",
      dis: "translate-x-16",
      url: "/about",
    },
    {
      name: "Contact",
      icon: "call-outline",
      dis: "translate-x-32",
      url: "/contact",
    },
  ];

  const pathname = usePathname();
  const isActive = (url) => {};
  const activeIndex = Menus.findIndex((menu) => menu.url === pathname);
  const activeDis =
    activeIndex >= 0 && activeIndex < Menus.length
      ? Menus[activeIndex].dis
      : null;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex fixed bottom-0 w-full z-50">
      <div
        className={`bg-black max-h-[4.4rem] px-6 rounded-t-xl mx-auto -top-8 duration-500 transform transition-transform ${
          mounted ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <ul className="flex relative text-white">
          <span
            className={`bg-rose-600 duration-500 ${activeDis} border-4 border-white h-16 w-16 absolute -top-5 rounded-full`}
          >
            <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1"></span>
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
            ></span>
          </span>
          {Menus.map((menu, i) => {
            const isActive = pathname === menu.url;
            return (
              <li key={i} className="w-16">
                <Link
                  href={menu.url}
                  className={`${
                    isActive && "text-red-300"
                  } flex flex-col text-center pt-6`}
                >
                  <span
                    className={`text-xl cursor-pointer duration-500  ${
                      isActive && "-mt-6  "
                    } `}
                  >
                    <ion-icon name={menu.icon}></ion-icon>
                  </span>
                  <span
                    className={`${
                      isActive
                        ? "translate-y-4 duration-700 opacity-100"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    {menu.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
