import React, { useRef } from "react";
import { useScroll, motion, useSpring } from "framer-motion";
import LiIcon from "./LiIcon";

export default function Experience() {
  const Details = ({ type, time, place, city }) => {
    const ref = useRef(null);

    return (
      <li
        ref={ref}
        className="my-8 first:mt-0 last:mb-0 ml-20  flex flex-col items-center justify-between"
      >
        <LiIcon reference={ref} />
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className=""
        >
          <h3 className="grow font-bold text-2xl">{type}</h3>
          <p className="font-medium">{place}</p>
          <p>{city}</p>
          <span className="">{time}</span>
        </motion.div>
      </li>
    );
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="relative overflow-hidden   ">
      <img
        src="/education/cap.png"
        alt="cap"
        className="absolute w-full h-full  z-[-1] lg:hidden "
      />
      <div className="absolute right-44 bottom-0 z-[-1] transform scale-x-[-1] hidden lg:block">
        <img src="/education/catedu.png" alt="" />
      </div>
      <div className="absolute right-0 bottom-0 z-[-1] top-0 hidden lg:block">
        <img src="/education/treeedu.png" alt="" />
      </div>
      <div className="flex justify-center font-bold text-8xl mt-10 mb-32">
        <img
          src="/education/educap.png"
          alt="educationCap"
          className="w-[100px] h-[100px] -rotate-45 relative -top-11 left-14"
        />
        <span className="text-capPink">Edu</span>
        <span className="text-backPink ">cation</span>
      </div>

      <div ref={ref} className="w-[75%] mx-auto relative ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-pink-300 origin-top"
        />

        <ul className="flex flex-col items-start justify-between mb-28">
          <Details
            type="Masters of Technology In Computer Science"
            time="2021 - Present"
            place="Pranveer Singh Institute of Technology (PSIT)"
            city="Kanpur, India"
          />
          <Details
            type="Bachelor of Science In Computer Science"
            time="2017-2021"
            place="Maharana Pratap Engineering College"
            city="Kanpur, India"
          />
          <Details
            type="Intermediate School"
            time="2015-2017"
            place="Gaurav Memorial International School"
            city="Kanpur, India"
          />
          <Details
            type="High School"
            place="Delhi Public School Kalyanpur(DPS),"
            city="Kanpur, India"
          />
        </ul>
      </div>
    </div>
  );
}
