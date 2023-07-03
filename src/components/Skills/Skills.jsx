"use client";

import { motion } from "framer-motion";

const Skill = ({ x, y, imgSrc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      className="flex items-center justify-center rounded-full font-semibold  text-white py-3 px-6 shadow-black cursor-pointer absolute

      "
    >
      <img src={imgSrc} alt={name} width={64} height={64} />
      {/* {name} */}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-8xl mt-64 w-full text-center relative sm:top-32 lg:top-20 xl:top-0 ">
          Skills
        </h1>

        <div className="relative flex items-center justify-center">
          <div className="border-transparent xl:border-red-800 md:border-transparent sm:border-transparent flex items-center justify-center rounded-full border-4 h-176 w-176">
            <div className="border-transparent lg:border-red-100 sm:border-transparent flex items-center justify-center rounded-full border-4 h-144 w-144">
              <div className="border-transparent lg:border-red-100 md:border-red-200 sm:border-transparent 2xl:border-transparent flex items-center justify-center rounded-full border-4 h-128 w-128">
                <div
                  className=" 
                  2xl:border-red-500
                  lg:border-transparent
                flex items-center justify-center rounded-full border-4 border-blue-100 
                h-96 w-96"
                >
                  <div
                    className="
                    2xl:border-transparent
                  lg:border-red-200
                  flex items-center justify-center rounded-full border-4 border-black
                   h-72 w-72"
                  >
                    <div className="md:border-transparent flex items-center justify-center rounded-full border-4 border-black h-48 w-48">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-2 text-3xl 2xl:p-12 2xl:text-7xl md:p-3 md:text-4xl sm:p-2 sm:text-3xl flex items-center justify-center rounded-full font-semibold bg-pink-300 text-white"
                      >
                        Web
                      </motion.div>

                      <Skill
                        // name="HTML"
                        x="12vw"
                        y="-1vw"
                        imgSrc="/skills/css.jpg"
                      />
                      <Skill imgSrc="/skills/html.jpg" x="-7.5vw" y="10vw" />
                      <Skill
                        imgSrc="/skills/javascript.jpg"
                        x="0vw"
                        y="-13vw"
                      />
                      <Skill imgSrc="/skills/react.jpg" x="-18vw" y="-1vw" />
                      <Skill
                        imgSrc="/skills/typescript.png"
                        x="13vw"
                        y="13vw"
                      />
                      <Skill imgSrc="/skills/nextjs.png" x="12vw" y="-14vw" />
                      <Skill imgSrc="/skills/tailwind.png" x="-23vw" y="8vw" />

                      <Skill imgSrc="/skills/expressjs.jpg" x="0vw" y="18vw" />
                      <Skill imgSrc="/skills/nodejs.jpg" x="23vw" y="5vw" />
                      <Skill imgSrc="/skills/firebase.jpg" x="21vw" y="-12vw" />
                      <Skill imgSrc="/skills/git.jpg" x="-19vw" y="-15vw" />
                      <Skill
                        imgSrc="/skills/mangodb.jpg"
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
      </div>
    </>
  );
};

export default Skills;
