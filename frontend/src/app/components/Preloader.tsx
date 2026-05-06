"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed hidden lg:block inset-0 z-50 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          fill="#B3F6E3"
          initial={{ d: "M 0 0 L 100 0 L 100 100 Q 50 120 0 100 Z" }}
          animate={{ d: [
            "M 0 0 L 100 0 L 100 100 Q 50 120 0 100 Z",
            "M 0 0 L 100 0 L 100 100 Q 50 105 0 100 Z",
            "M 0 0 L 100 0 L 100 0 Q 50 -50 0 0 Z"
          ] }}
          transition={{
            duration: 1,
            ease: [0.76, 0, 0.24, 0.76],
            delay: 0.5
          }}
          onAnimationComplete={onComplete}
        />
      </svg>
    </div>
  );
}
