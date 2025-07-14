"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import "../styles/globals.css";
import SayedRagheb from "../Images/Sayed Ragheb.png";
import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  Download,
} from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
export default function Hero() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="order-2 md:order-1 2xl:mx-auto"
      >
        <h2 className="text-lg text-gray-600 dark:text-gray-400 mb-2">
          Hello, I am
        </h2>
        <div className="relative mb-[70px]">
          <h1 className="text-4xl absolute md:text-5xl animation-f-h1 font-bold mb-3 text-stroke">
            Sayed Ragheb
          </h1>
          <h1 className="text-4xl absolute md:text-5xl animation-s-h1 font-bold mb-3 wave">
            Sayed Ragheb
          </h1>
        </div>
        <div className="text-2xl md:text-3xl font-semibold text-primary-600 dark:text-primary-400 mb-4 h-10">
          <TypeAnimation
            sequence={[
              "Front End Developer",
              1000,
              "React Developer",
              1000,
              "Next.js Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg">
          I design exceptional and innovative websites with a focus on user
          experience, responsive design, and modern technologies.
        </p>

        <div className="flex gap-4 mb-8">
          <motion.a
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/EL-KADI"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/el-kadi/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.facebook.com/profile.php?id=100015705041095"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
            aria-label="Facebook"
          >
            <FacebookIcon className="h-5 w-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.instagram.com/elkadii92/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-5 w-5" />
          </motion.a>
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/Pdfs/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            Download CV
            <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="order-1 md:order-2 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 3,
            ease: "easeInOut",
          }}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-xl"
          style={{
            boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
          }}
        >
          <Image
            src={SayedRagheb}
            alt="Sayed Ragheb"
            fill
            className="object-cover "
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
