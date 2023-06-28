"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavbarPC = () => {
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
  const [open, setOpen] = useState(true);
  return (
    <section className="fixed top-0 left-0 h-screen flex items-center">
      <div
        className={`bg-[#0e0e0e] rounded-lg ${
          open ? "w-52" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <span
            className={`cursor-pointer text-2xl transform transition-transform duration-300 ${
              open
                ? "rotate-180 transform transition-transform duration-300"
                : "rotate-0 transform transition-transform duration-300"
            }`}
            onClick={() => setOpen(!open)}
          >
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </span>
        </div>
        <div className="mt-4 flex flex-col gap-4 relative pb-4">
          {Menus?.map((menu, i) => (
            <Link
              href={menu?.url}
              key={i}
              className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div className="text-xl">
                <ion-icon name={menu.icon}></ion-icon>
              </div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavbarPC;
