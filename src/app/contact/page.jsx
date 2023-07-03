"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div>
      Contact
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
        hi
      </motion.div>
      <motion.div
        whileHover={{ rotate: 90, scale: 1.1 }}
        className="rounded-lg p-px bg-gradient-to-b from-blue-300 to bg-pink-300 dark:from-blue-800 shadow-2xl w-10 h-10"
      ></motion.div>
      <motion.div
        animate={{ rotate: [2, 3, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        tada
      </motion.div>
    </div>
  );
}
