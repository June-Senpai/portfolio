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
    <section className={`fixed top-0 left-0 h-screen flex items-center`}>
      <div className="rounded-lg p-px bg-gradient-to-b from-blue-300 to bg-pink-300 dark:from-blue-800 shadow-2xl">
        <div
          className={`bg-[#0e0e0e] relative rounded-lg ${
            open ? "w-52" : "w-16"
          } duration-1000 text-gray-100 px-4 transform transition-transform`}
          style={{
            backgroundImage:
              "linear-gradient(to right, #0e0e0e, #0e0e0e), radial-gradient(150% 150% at 50% -20%, rgba(255, 255, 255, 0.2), transparent), radial-gradient(80% 80% at 50% -10%, rgba(255, 255, 255, 0.4), transparent), radial-gradient(50% 50% at 50% 120%, rgba(255, 0, 255, 0.6), transparent)",
          }}
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
                  className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${
                    isActive && " text-red-400 "
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
