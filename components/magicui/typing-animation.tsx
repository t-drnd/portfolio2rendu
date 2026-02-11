"use client";

import { motion } from "framer-motion";
import React from "react";

interface TypingAnimationProps {
  children: string;
  className?: string;
  duration?: number;
  preserveLayout?: boolean;
}

export function TypingAnimation({
  children,
  className,
  duration = 50,
  preserveLayout = false,
  ...props
}: TypingAnimationProps) {
  const animationProps = preserveLayout
    ? {
        initial: { clipPath: "inset(0 100% 0 0)" },
        animate: { clipPath: "inset(0 0 0 0)" },
      }
    : {
        initial: { width: "0%" },
        animate: { width: "100%" },
      };

  return (
    <motion.p
      className={className}
      {...props}
      {...animationProps}
      transition={{
        duration: children.length * (duration / 600),
        ease: "linear",
        repeat: 0,
      }}
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        willChange: preserveLayout ? "clip-path" : "width",
        pointerEvents: preserveLayout ? "none" : undefined,
      }}
    >
      {children}
    </motion.p>
  );
}
