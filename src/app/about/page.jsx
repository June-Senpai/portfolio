"use client";

import Experience from "@/components/Education";
import Skills from "@/components/Skills";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useAnimation,
  useScroll,
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

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const Line = () => {
    return (
      <div className="flex">
        <img src="t.png" className="rotate-45 h-56" alt="" />
        <img src="t.png" className="rotate-12 h-56" alt="" />
        <img src="t.png" className="rotate-12 h-56" alt="" />
        <img src="t.png" className="rotate-180 h-56" alt="" />
        <img src="t.png" className="rotate-45 h-56" alt="" />
      </div>
    );
  };

  return (
    <div className="overflow-x-hidden">
      {/* for above scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2.5 bg-pink-200 origin-left"
        style={{ scaleX }}
      />
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
        <Line />
        <Skills />
        <Line />
        <Experience />
        <div className="flex">
          <img src="line.png" className="h-56" alt="" />
          <img src="line.png" className="h-56" alt="" />
          <img src="line.png" className="h-56" alt="" />
        </div>
      </div>
    </div>
  );
}
