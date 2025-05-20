"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 opacity-70"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </motion.div>

        <motion.div
          animate={{ rotateY: 360 }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-32 h-32 mx-auto mb-8 relative perspective-1000"
        >
          <div className="w-full h-full absolute transform-style-3d">
            <div className="absolute w-full h-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-lg transform translate-z-16 flex items-center justify-center">
              <Home className="w-10 h-10 text-blue-500" />
            </div>
            <div className="absolute w-full h-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-lg transform -translate-z-16 rotate-y-180 flex items-center justify-center">
              <ArrowLeft className="w-10 h-10 text-purple-500" />
            </div>
            <div className="absolute w-full h-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/30 rounded-lg transform -translate-x-16 rotate-y-90 flex items-center justify-center">
              <span className="text-2xl font-bold text-indigo-500">404</span>
            </div>
            <div className="absolute w-full h-full bg-pink-500/20 backdrop-blur-sm border border-pink-500/30 rounded-lg transform translate-x-16 -rotate-y-90 flex items-center justify-center">
              <span className="text-2xl font-bold text-pink-500">404</span>
            </div>
            <div className="absolute w-full h-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg transform -translate-y-16 rotate-x-90 flex items-center justify-center">
              <span className="text-2xl font-bold text-cyan-500">404</span>
            </div>
            <div className="absolute w-full h-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-lg transform translate-y-16 -rotate-x-90 flex items-center justify-center">
              <span className="text-2xl font-bold text-amber-500">404</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 gap-2">
              <Home className="h-4 w-4" />
              Return Home
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
