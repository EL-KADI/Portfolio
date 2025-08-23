"use client";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "lucide-react";

interface AnimatedThemeToggleProps {
  theme: "light" | "dark";
  onToggle: () => void;
}

export default function AnimatedThemeToggle({
  theme,
  onToggle,
}: AnimatedThemeToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed top-4 right-4 xl:right-10 translate-y-14 -translate-x-5 hover:scale-105 sm:translate-y-[5.4rem]   z-50 w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700"
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#1f2937",
      }}
    >
      <motion.div
        animate={{
          rotate: theme === "dark" ? 0 : 180,
          scale: theme === "dark" ? 1 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 0.4,
        }}
      >
        {theme === "light" ? (
          <SunIcon className="h-5 w-5 text-amber-500" />
        ) : (
          <MoonIcon className="h-5 w-5 text-blue-400" />
        )}
      </motion.div>
    </motion.button>
  );
}
