"use client";

import Experience from "@/components/AboutComponents/Education";
import ProjectsPart from "@/components/AboutComponents/Projects";
import Skills from "@/components/AboutComponents/Skills";
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
      <div>
        <div className="font-bold text-8xl mt-5 text-center relative">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <span>A</span>
            <span className="text-8xl font-extrabold bg-clip-text text-transparent bg-center bg-[url('https://images.unsplash.com/photo-1587738433410-8f34adcb0c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-position-x-right">
              bout me
            </span>
          </motion.h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="ml-28 mt-16">
            <span className="text-3xl mr-3 font-medium capitalize ">Name:</span>
            <span className="text-3xl font-bold text-pink-500 ">
              <AnimatedText text="Keshav Juneja" />
            </span>
            <span className="text-3xl font-bold">
              <br />
              <span className="text-3xl font-medium capitalize ">Age:</span>
              <span className="text-pink-500 ml-9">
                <AnimatedNumbers value={24} />
                <AnimatedText text="+" />
              </span>
            </span>
            <p className="text-lg font-light mt-5 w-[90%] leading-relaxed">
              Hi there! I'm a full stack developer with a passion for building
              awesome web applications. When I'm not coding or pushing pixels,
              you'll find me playing games or trying out new recipes in the
              kitchen (with varying degrees of success). I have a love-hate
              relationship with JavaScript, but we're working on it. My motto is
              “work hard, play hard, and always keep learning.” And if all else
              fails, there's always coffee. Lots and lots of coffee.
            </p>
          </div>
          <img
            src="/about/aboutr.png"
            className="hidden lg:block w-[30%] -mr-2 -mt-40 mb-32"
            alt=""
          />
        </div>

        <Line />
        <Skills />
        <Line />
        <Experience />
        <Line />
        <ProjectsPart />
      </div>
    </div>
  );
}
