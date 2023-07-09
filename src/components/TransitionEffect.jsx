"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const TransitionEffect = ({ text }) => {
  const [showText, setShowText] = useState(true);

  const handleAnimationComplete = () => {
    setShowText(false);
  };
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 left-full w-screen h-screen z-30 bg-pink-300"
        initial={{ x: "-100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        onAnimationComplete={handleAnimationComplete}
      />
      <motion.div
        className="fixed top-0 bottom-0 left-full w-screen h-screen z-20 bg-pink-400"
        initial={{ x: "-100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 left-full w-screen h-screen z-10 bg-pink-500 flex items-center justify-center"
        initial={{ x: "-100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
      >
        {showText && <span className="text-white text-5xl">{text}</span>}
      </motion.div>
    </>
  );
};

export default TransitionEffect;
