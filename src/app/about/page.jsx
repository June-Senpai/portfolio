"use client";

import Skills from "@/components/Skills/Skills";
import {
  motion,
  spring,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { useRef, useEffect } from "react";

export const metadata = {
  title: "About Page",
};

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
  return (
    <>
      <div className="flex justify-center items-center mt-3">
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
    </>
  );
}
