"use client";

import { motion } from "framer-motion";

const Skill = ({ x, y, imgSrc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      className="flex items-center justify-center rounded-full font-semibold  text-white py-3 px-6 shadow-black cursor-pointer absolute"
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
        <h1 className="font-bold text-3xl mt-64 w-full text-center mb-5">
          Skills
        </h1>
        <div className="w-full h-screen relative flex items-center justify-center">
          <div className="flex items-center justify-center rounded-full border-4 border-black h-192 w-192">
            <div className="flex items-center justify-center rounded-full border-4 border-orange-500 h-176 w-176">
              <div className="flex items-center justify-center rounded-full border-4 border-yellow-500 h-160 w-160">
                <div className="flex items-center justify-center rounded-full border-4 border-green-500 h-144 w-144">
                  <div className="flex items-center justify-center rounded-full border-4 border-blue-500 h-128 w-128">
                    <div className="flex items-center justify-center rounded-full border-4 border-indigo-500 h-96 w-96">
                      <div className="flex items-center justify-center rounded-full border-4 border-blue-500 h-64 w-64">
                        <div className="flex items-center justify-center rounded-full border-4 border-pink-500 h-40 w-40">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center justify-center rounded-full font-semibold bg-black text-white p-5 shadow-black"
                          >
                            Web
                          </motion.div>
                          <Skill
                            // name="HTML"
                            x="5.5vw"
                            y="-1vw"
                            imgSrc="/skills/css.jpg"
                          />
                          <Skill imgSrc="/skills/html.jpg" x="0vw" y="5vw" />
                          <Skill
                            imgSrc="/skills/javascript.jpg"
                            x="0vw"
                            y="-5vw"
                          />
                          <Skill imgSrc="/skills/react.jpg" x="-5vw" y="-6vw" />
                          <Skill
                            imgSrc="/skills/typescript.png"
                            x="5vw"
                            y="6.5vw"
                          />
                          <Skill imgSrc="/skills/nextjs.png" x="11vw" y="6vw" />
                          <Skill
                            imgSrc="/skills/tailwind.png"
                            x="5vw"
                            y="15vw"
                          />

                          <Skill
                            imgSrc="/skills/expressjs.jpg"
                            x="0vw"
                            y="5vw"
                          />
                          <Skill
                            imgSrc="/skills/firebase.jpg"
                            x="15vw"
                            y="-12vw"
                          />
                          <Skill imgSrc="/skills/git.jpg" x="-19vw" y="-15vw" />
                          <Skill
                            imgSrc="/skills/mangodb.jpg"
                            x="-25vw"
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
        </div>
      </div>
    </>
  );
};

export default Skills;
