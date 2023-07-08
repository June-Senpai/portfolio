"use client";
import React from "react";

import { motion } from "framer-motion";
const Skill = ({ x, y, imgSrc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      // viewport={{ once: true }}
      className="rounded-2xl flex items-center justify-center  font-semibold  text-white py-3 px-6 shadow-black cursor-pointer absolute"
    >
      <img src={imgSrc} width={64} height={64} />
      {/* {name} */}
    </motion.div>
  );
};

const Image = ({ index, className }) => {
  const src = "/skills/flowerSpin.png";
  const alt = `flower${index}`;

  const yValue = index === 1 ? 100 : -100;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      animate={{ rotate: 360, y: [0, yValue, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

const Skills = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-8xl mb-10 text-center relative sm:top-32 lg:top-20 xl:top-0 ">
          <span className="text-8xl font-extrabold  bg-clip-text text-transparent bg-center bg-[url('https://images.unsplash.com/photo-1587738433410-8f34adcb0c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-position-x-right">
            Skills
          </span>
        </h1>

        <div className="flex justify-between">
          <Image index={1} className="relative left-32 top-32 w-1/12" />
          <Image index={2} className="relative right-20 top-[40rem] w-1/12" />
        </div>
        <motion.div className="relative flex items-center justify-center mt-2 z-0 ">
          <div className=" z-0 flex border-transparent 2xl:border-pink-300 xl:border-transparent md:border-transparent sm:border-transparent  items-center justify-center rounded-full border-4 h-176 w-176">
            <div className=" z-0 flex border-transparent 2xl:border-transparent xl:border-pink-300 md:border-transparent sm:border-transparent  items-center justify-center rounded-full border-4 h-176 w-176">
              <div className="z-0 flex border-transparent lg:border-pink-300 sm:border-transparent  items-center justify-center rounded-full border-4 h-144 w-144">
                <div className="flex z-0 border-transparent lg:border-pink-300 md:border-pink-300 2xl:border-transparent sm:border-transparent  items-center justify-center rounded-full border-4 h-128 w-128">
                  <div
                    className=" 
                  2xl:border-pink-300
                  lg:border-transparent
                flex items-center justify-center rounded-full border-4 border-pink-300
                h-96 w-96"
                  >
                    <div
                      className="
                    2xl:border-transparent
                  lg:border-pink-300
                  flex items-center justify-center rounded-full border-4 border-pink-300
                   h-72 w-72"
                    >
                      <div className="md:border-transparent flex items-center justify-center rounded-full border-4 border-pink-300 h-48 w-48">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className=" p-2 text-3xl 2xl:p-12 2xl:text-7xl md:p-3 md:text-4xl sm:p-2 sm:text-3xl flex items-center justify-center rounded-full font-semibold bg-pink-300 text-white"
                        >
                          Web
                        </motion.div>

                        <Skill
                          // name="HTML"
                          x="12vw"
                          y="-1vw"
                          imgSrc="/skills/css.png"
                        />
                        <Skill imgSrc="/skills/html.png" x="-7.5vw" y="10vw" />
                        <Skill
                          imgSrc="/skills/javascript.png"
                          x="0vw"
                          y="-11vw"
                        />
                        <Skill imgSrc="/skills/react.png" x="-18vw" y="-1vw" />
                        <Skill
                          imgSrc="/skills/typescript.png"
                          x="13vw"
                          y="13vw"
                        />
                        <Skill imgSrc="/skills/nextjs.png" x="12vw" y="-14vw" />
                        <Skill
                          imgSrc="/skills/tailwind.png"
                          x="-23vw"
                          y="8vw"
                        />

                        <Skill
                          imgSrc="/skills/expressjs.png"
                          x="0vw"
                          y="18vw"
                        />
                        <Skill imgSrc="/skills/nodejs.png" x="23vw" y="5vw" />
                        <Skill
                          imgSrc="/skills/firebase.png"
                          x="21vw"
                          y="-12vw"
                        />
                        <Skill imgSrc="/skills/git.png" x="-19vw" y="-15vw" />
                        <Skill
                          imgSrc="/skills/mangodb.png"
                          x="-15.5vw"
                          y="18vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
