"use client";

import { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = PropsWithChildren<{
  delay?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}>;

const EASE = [0.16, 1, 0.3, 1] as const;

export function FadeReveal({
  children,
  delay = 0,
  className,
  once = true,
  amount = 0.3,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
          filter: "blur(22px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 1,
            ease: EASE,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

