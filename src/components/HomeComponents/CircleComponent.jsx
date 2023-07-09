import React from "react";

export function CircleComponent() {
  return (
    <>
      <div className="hidden md:block">
        <img
          src="/sakuraTree.png"
          alt="Background"
          className="absolute w-[50rem] -top-14"
        />
        <div className="-z-10 bg-pink-300 rounded-full w-[22rem] h-[22rem] mt-52 -ml-24"></div>
      </div>
    </>
  );
}
