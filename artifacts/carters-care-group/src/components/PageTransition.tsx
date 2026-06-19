import { motion } from "framer-motion";

const EASE_IN: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_OUT: [number, number, number, number] = [0.4, 0, 1, 1];

const variants = {
  initial: {
    opacity: 0,
    y: 28,
    scale: 0.985,
    filter: "blur(6px)",
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: EASE_IN,
    },
  },
  exit: {
    opacity: 0,
    y: -14,
    scale: 1.008,
    filter: "blur(4px)",
    transition: {
      duration: 0.35,
      ease: EASE_OUT,
    },
  },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}
