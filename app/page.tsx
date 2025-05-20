"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { MoonIcon, SunIcon } from "lucide-react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import ParticlesBackground from "@/components/ParticlesBackground";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);
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

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");

    toast({
      title: `${
        newTheme.charAt(0).toUpperCase() + newTheme.slice(1)
      } Mode Activated`,
      description: `Switched to ${newTheme} mode.`,
    });
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

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme={theme} enableSystem={false}>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 perspective-1000">
        <ParticlesBackground />

        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
          style={{ scaleX }}
        />

        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 z-50 p-2 translate-y-14 -translate-x-5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors transform hover:scale-110"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5" />
          )}
        </button>

        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-3">
            <ul className="flex justify-center space-x-8">
              {["Home", "Skills", "Projects", "Certificates", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                    </button>
                  </li>
                )
              )}
            </ul>
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
