"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NavbarPC = () => {
  const Menus = [
    { name: "Home", icon: "home-outline", url: "/" },
    {
      name: "About",
      icon: "id-card-outline",
      url: "/about",
    },
    {
      name: "Contact",
      icon: "call-outline",
      url: "/contact",
    },
  ];
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  return (
    <section className={`fixed top-0 left-0 h-screen flex items-center z-30`}>
      <div className="rounded-lg p-px bg-gradient-to-b from-blue-200 to bg-pink-300 shadow-pink-300  shadow-2xl">
        <div
          className={`bg-white relative rounded-lg ${
            open ? "w-52" : "w-16"
          } duration-1000 text-black px-4 transform transition-transform`}
        >
          <div className="py-3 flex justify-end">
            <span
              className={`cursor-pointer text-2xl transform transition-transform duration-300 ${
                open
                  ? "rotate-180 transform transition-transform duration-300"
                  : "rotate-0"
              }`}
              onClick={() => setOpen(!open)}
            >
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-4 relative pb-4">
            {Menus?.map((menu, i) => {
              const isActive = pathname === menu.url;
              return (
                <Link
                  href={menu?.url}
                  key={i}
                  className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-pink-100 hover:rounded-xl rounded-md ${
                    isActive && " text-pink-400 "
                  }`}
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavbarPC;
