"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { MoonIcon, SunIcon, ChevronUpIcon } from "lucide-react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import ParticlesBackground from "@/components/ParticlesBackground";
import { AnimatedNav } from "../components/animated-nav";
import { motion, useScroll, useSpring } from "framer-motion";
import "@/styles/globals.css";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (prefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 15) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - -30,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme={theme} enableSystem={false}>
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 z-50 p-2 rounded-full bg-gray-600 dark:bg-slate-700 text-white dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-slate-600 duration-200 transition-colors transform hover:scale-110 ${
          !isVisible ? "cursor-default" : "cursor-pointer"
        }`}
        aria-label="Scroll to top"
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : 20,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <ChevronUpIcon className="h-5 w-5" />
      </motion.button>

      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 perspective-1000">
        <ParticlesBackground />

        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
          style={{ scaleX }}
        />

        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 z-50 p-2 translate-y-14 -translate-x-5 sm:translate-y-[5.5rem] rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors transform hover:scale-110"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5" />
          )}
        </button>

        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-3 sm:py-4 sm:mt-[7.5px] ">
            <AnimatedNav
              items={["Home", "Skills", "Projects", "Certificates", "Contact"]}
              onItemClick={scrollToSection}
            />
          </div>
        </nav>

        <div className="container mx-auto px-4 pt-20">
          <section id="home" className="min-h-screen flex items-center py-20">
            <Hero />
          </section>

          <section id="skills" className="min-h-screen flex items-center py-20">
            <Skills />
          </section>

          <section id="projects" className="min-h-screen py-20">
            <Projects />
          </section>

          <section
            id="certificates"
            className="min-h-screen flex items-center py-20"
          >
            <Certificates />
          </section>

          <section
            id="contact"
            className="min-h-screen flex items-center py-20"
          >
            <Contact />
          </section>
        </div>

        <footer className="bg-gray-100 dark:bg-gray-800 py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Sayed Ragheb. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
              Front End Developer
            </p>
          </div>
        </footer>
        <Toaster />
      </main>
    </ThemeProvider>
  );
}
