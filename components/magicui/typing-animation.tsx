"use client";

import { motion } from "framer-motion";
import React from "react";

interface TypingAnimationProps {
  children: string;
  className?: string;
  duration?: number;
}

export function TypingAnimation({
  children,
  className,
  duration = 50,
  ...props
}: TypingAnimationProps) {
  return (
    <motion.p
      className={className}
      {...props}
      initial={{ width: "0%" }}
      animate={{
        width: "100%",
      }}
      transition={{
        duration: children.length * (duration / 1000),
        ease: "linear",
        repeat: 0,
      }}
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
    >
      {children}
    </motion.p>
  );
}
