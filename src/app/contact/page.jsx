"use client";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [showEmailText, setShowEmailText] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <TransitionEffect text="Contact Page" />
        <motion.h1
          initial={{ y: -700 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
          className="text-8xl font-extrabold bg-clip-text text-transparent bg-center bg-[url('https://images.unsplash.com/photo-1587738433410-8f34adcb0c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-position-x-right"
        >
          Contact Me
        </motion.h1>
        <div className="mt-12 flex space-x-12 text-8xl">
          <Link
            href="https://www.linkedin.com/in/keshav-juneja-34598a130/"
            target="_blank"
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-blue-600"
            >
              <i className="">
                <ion-icon name="logo-linkedin"></ion-icon>
              </i>
            </motion.div>
          </Link>
          <Link href="https://github.com/June-Senpai" target="_blank">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.7 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-black text-pink-400"
            >
              <i className="">
                <ion-icon name="logo-github"></ion-icon>
              </i>
            </motion.div>
          </Link>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => setShowEmailText(true)}
            onHoverEnd={() => setShowEmailText(false)}
            className="hover:text-pink-400 relative"
          >
            <i className="">
              <ion-icon name="mail-unread-outline"></ion-icon>
            </i>
            {showEmailText && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute top-1 left-24 bg-white rounded-md p-2 shadow-pink-300 shadow-md text-2xl "
              >
                <span>Email me!</span>
                <br />
                <span className="text-black">keshav01juneja@gmail.com</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
