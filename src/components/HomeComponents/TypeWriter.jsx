"use client";
import { Typewriter } from "react-simple-typewriter";
import { CircleComponent } from "@/components/HomeComponents/CircleComponent";

export function TypewriterComponent() {
  return (
    <>
      <div className="block md:hidden">
        <img
          src="/homeBg.png"
          alt="Background"
          className="absolute h-[100%] w-full -z-10 opacity-70 top-0 bottom-0"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <CircleComponent />
        <span className="text-5xl md:text-5xl font-thin mt-32 md:mt-56 ml-0 md:ml-10 lg:ml-40 xl:ml-[22rem] xl:text-6xl xl:mt-0 text-center md:text-left">
          Imagine some cool line to get <br />
          your{" "}
          <span className="font-bold text-pink-500 ">
            <Typewriter
              words={[`Attention`, "Interest", "Engagement!"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </span>
      </div>
    </>
  );
}
