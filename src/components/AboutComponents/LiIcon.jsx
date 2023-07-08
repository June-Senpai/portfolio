import React from "react";
import { useScroll, motion } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });

  const imageUrl = "/education/petal.png";
  const petalPositions = [
    { x: 50, y: 60, rotate: 0 },
    { x: 50, y: -10, rotate: 180 },
    { x: 10, y: 25, rotate: 90 },
  ];

  return (
    <div>
      <figure className="absolute left-0 z-50">
        <svg
          className="-rotate-90"
          width="75"
          height="75"
          viewBox="0 0 100 100"
        >
          <svg width="50" height="50"></svg>
          {petalPositions.map((position, index) => (
            <image
              key={index}
              href={imageUrl}
              x={position.x}
              y={position.y}
              width="50"
              height="50"
              transform={`rotate(${position.rotate} ${position.x + 25} ${
                position.y + 25
              })`}
            />
          ))}
          <svg width="50" height="50"></svg>

          <motion.circle
            cx="75"
            cy="50"
            r="20"
            style={{
              pathLength: scrollYProgress,
            }}
            className="stroke-pink-300 stroke-[4px] fill-white"
          />

          <circle
            cx="75"
            cy="50"
            r="10"
            className="stroke-pink-400 stroke-1 animate-pulse fill-yellow-300"
          />
        </svg>
      </figure>
    </div>
  );
};

export default LiIcon;
