import React from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });

  return (
    <div>
      <figure className="absolute left-0 stroke-black">
        <svg
          className="-rotate-90"
          width="75"
          height="75"
          viewBox="0 0 100 100"
        >
          <motion.circle
            cx="75"
            cy="50"
            r="20"
            style={{
              pathLength: scrollYProgress,
            }}
            className="stroke-pink-600 stroke-[4px] fill-white"
          />
          <circle
            cx="75"
            cy="50"
            r="10"
            className="stroke-pink-400 stroke-1 animate-pulse fill-red-500"
          />
        </svg>
      </figure>
    </div>
  );
};

export default LiIcon;
