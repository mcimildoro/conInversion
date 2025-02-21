"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export const MotionTransition = ({
  children,
  position = "left",
  className = "",
  isVisible = true,
}: {
  children: ReactNode;
  position?: "left" | "right";
  className?: string;
  isVisible?: boolean;
}) => {
  const animation = {
    initial: { x: position === "left" ? -100 : 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: position === "left" ? -100 : 100, opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div {...animation} transition={{ duration: 0.5 }} className={className}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
