"use client";
import React, { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Skills from "@/components/Skills";
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      <div
        ref={ref}
        className="w-full h-screen flex items-center justify-center"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-6xl w-full   flex items-center justify-center  relative text-red-400"
        >
          Project
        </motion.div>
        <AnimatedNumbers value={24} />+
      </div>
      <Skills />
    </div>
  );
}
