"use client";

import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useAnimation,
} from "framer-motion";
import React, { useRef, useEffect } from "react";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const AnimatedText = ({ text }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      springValue.set(text.length);
    }
  }, [isInView, text, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= text.length) {
        ref.current.textContent = text.slice(0, latest.toFixed(0));
      }
    });
  }, [springValue, text]);

  return <span ref={ref}></span>;
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    console.log({ isInView });
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <>
      <div ref={ref}>
        <div className="font-bold text-8xl mt-64 text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            About me
          </motion.h1>
        </div>
        <div className="col-span-2 flex flex-col items-end justify-between">
          <div className="flex flex-col items-end justify-center mr-16 mt-16 ">
            <span className="inline-block text-3xl font-bold">
              <AnimatedText text="Keshav Juneja" />
            </span>
            <span className="inline-block text-3xl font-bold">
              <AnimatedNumbers value={24} />+
            </span>
            <h2 className="text-2xl mr-3 font-medium capitalize text-pink-500 ">
              Age
            </h2>
          </div>
        </div>
        <Skills />
        <Experience />
      </div>
    </>
  );
}
