// components/SlideFadeInMotion.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const SlideFadeInMotion = ({
  children,
  delay = 0,
  duration = 0.5,
}: React.PropsWithChildren<{
  delay?: number;
  duration?: number;
}>) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: duration, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideFadeInMotion;
